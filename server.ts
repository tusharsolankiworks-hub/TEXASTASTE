import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("reservations.db");

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS reservations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    date TEXT NOT NULL,
    time TEXT NOT NULL,
    guests INTEGER NOT NULL,
    phone TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/reservations", (req, res) => {
    const { name, date, time, guests, phone } = req.body;
    
    if (!name || !date || !time || !guests || !phone) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      const stmt = db.prepare(
        "INSERT INTO reservations (name, date, time, guests, phone) VALUES (?, ?, ?, ?, ?)"
      );
      const result = stmt.run(name, date, time, guests, phone);
      res.status(201).json({ id: result.lastInsertRowid, message: "Reservation successful" });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to save reservation" });
    }
  });

  app.get("/api/reservations", (req, res) => {
    const stmt = db.prepare("SELECT * FROM reservations ORDER BY created_at DESC");
    const reservations = stmt.all();
    res.json(reservations);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
