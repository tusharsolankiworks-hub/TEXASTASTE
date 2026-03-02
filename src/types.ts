export interface Dish {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'BBQ' | 'Steak' | 'Burgers' | 'Fried Chicken' | 'Desserts' | 'Sides';
  image: string;
  featured?: boolean;
}

export interface Reservation {
  name: string;
  date: string;
  time: string;
  guests: number;
  phone: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}
