import { Dish, Testimonial } from './types';

export const DISHES: Dish[] = [
  {
    id: '1',
    name: 'Texas Smoked Ribs',
    description: 'Slow-smoked for 12 hours with our signature dry rub and hickory wood.',
    price: '$28',
    category: 'BBQ',
    image: 'https://images.pexels.com/photos/8250726/pexels-photo-8250726.jpeg',
    featured: true,
  },
  {
    id: '2',
    name: 'Lone Star Ribeye',
    description: '16oz hand-cut prime beef, grilled to perfection with garlic herb butter.',
    price: '$42',
    category: 'Steak',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '3',
    name: 'The Outlaw Burger',
    description: 'Double wagyu patty, smoked brisket, pepper jack cheese, and chipotle aioli.',
    price: '$19',
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '4',
    name: 'Southern Fried Chicken',
    description: 'Buttermilk brined, crispy golden crust, served with honey butter biscuit.',
    price: '$22',
    category: 'Fried Chicken',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '5',
    name: 'Pecan Pie Cheesecake',
    description: 'Creamy cheesecake topped with caramelized Texas pecans and bourbon sauce.',
    price: '$12',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '6',
    name: 'Smoked Brisket Tacos',
    description: 'Three corn tortillas, chopped brisket, pickled onions, and cilantro.',
    price: '$16',
    category: 'BBQ',
    image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=800&auto=format&fit=crop',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Food Critic',
    content: 'The best BBQ I have had outside of Austin. The ribs literally fall off the bone.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Local Resident',
    content: 'Texas Taste has become our weekly family tradition. The atmosphere is unmatched.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=michael',
  },
  {
    id: '3',
    name: 'David Rodriguez',
    role: 'Chef',
    content: 'As a fellow chef, I appreciate the attention to detail in their smoking process.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=david',
  },
];
