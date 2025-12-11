import { MenuItem, Review, ServiceItem } from './types';
import { Utensils, Wine, Music, Users } from 'lucide-react';
import React from 'react';

export const BUSINESS_INFO = {
  name: "The Blue Duck Kitchen & Bar",
  address: "410 N Washington Ave, Livingston, TX 77351",
  phone: "+1 936-327-2385",
  email: "info@blueducklivingston.com",
  hours: {
    weekdays: "11:00 AM - 9:00 PM",
    weekends: "11:00 AM - 10:00 PM"
  },
  coords: {
    lat: 30.7114434,
    lng: -94.9327403
  },
  socials: {
    facebook: "https://www.facebook.com/BlueDuckLivingston",
    instagram: "https://instagram.com"
  }
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Signature Chicken Fried Steak',
    description: 'Our famous "tower" presentation. Hand-battered beef cutlet stacked high over garlic mashed potatoes, smothered in country gravy. Served with a side of green beans with bacon.',
    price: '$18.00',
    category: 'mains',
    popular: true,
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'Ribeye Steak',
    description: '12oz hand-cut Ribeye, seared to perfection. Served with a fully loaded baked potato (sour cream, cheddar, bacon, chives) and seasonal garnish.',
    price: '$28.00',
    category: 'mains',
    popular: true,
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'Crispy Fried Mushrooms',
    description: 'Whole fresh button mushrooms, golden-fried in our secret batter. Served with house-made ranch dipping sauce.',
    price: '$12.00',
    category: 'starters',
    popular: true,
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '7',
    name: 'Fried Pickles',
    description: 'Sliced dill pickles, lightly battered and fried golden brown. Crispy, tangy, and served with a side of ranch.',
    price: '$9.00',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1605493666691-e41793138b25?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '8',
    name: 'Loaded House Chips',
    description: 'Crispy homemade waffle-cut chips topped with melted cheddar, bacon bits, sour cream, and chives.',
    price: '$10.00',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1566453833772-7472099351df?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    name: 'The Blue Duck Burger',
    description: 'Half-pound patty, caramelized onions, blue cheese crumbles, arugula, on a brioche bun. Served with waffle fries.',
    price: '$16.00',
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    name: 'Classic Margarita',
    description: 'Tequila, fresh lime juice, triple sec, agave. Served on the rocks with a salt rim.',
    price: '$12.00',
    category: 'drinks',
    popular: true,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '10',
    name: 'Smoked Old Fashioned',
    description: 'Bourbon, smoked maple syrup, angostura bitters, orange peel.',
    price: '$14.00',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '11',
    name: 'Spicy Cucumber Martini',
    description: 'Gin, fresh cucumber juice, jalapeño simple syrup, lime.',
    price: '$13.00',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1575023782549-62ca0d244b39?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '12',
    name: 'Espresso Martini',
    description: 'Vodka, fresh espresso, coffee liqueur, simple syrup. The perfect pick-me-up.',
    price: '$13.00',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '13',
    name: 'Blackberry Mojito',
    description: 'White rum, fresh blackberries, mint, lime, soda water.',
    price: '$11.00',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1536935338788-843bb528f4fd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '9',
    name: 'Steak & Waffle Fries',
    description: 'Juicy sirloin steak served with crispy seasoned waffle fries and house chips.',
    price: '$22.00',
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1594041680527-185d638561d4?auto=format&fit=crop&w=800&q=80'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Local Guide',
    rating: 5,
    text: "Great service, super clean and great home cooked food. The atmosphere in this art deco building is unmatched in Livingston.",
    date: '3 weeks ago'
  },
  {
    id: 'r2',
    author: 'Sarah Jenkins',
    rating: 5,
    text: "The Chicken Fried Steak stack is huge! Best I've had in Texas. Definitely a gem for date night.",
    date: '1 month ago'
  },
  {
    id: 'r3',
    author: 'Michael R.',
    rating: 4,
    text: "Enjoyed the atmosphere but the music was a bit too loud. The loaded baked potato with the ribeye was perfect.",
    date: '2 months ago'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'Dine-In Experience',
    description: 'Enjoy our vibrant art-deco atmosphere with high ceilings, exposed brick, and a mezzanine level.',
    icon: <Utensils className="w-8 h-8 text-white" />
  },
  {
    id: 's2',
    title: 'Full Bar & Cocktails',
    description: 'Expert mixologists crafting traditional margaritas and modern cocktails.',
    icon: <Wine className="w-8 h-8 text-white" />
  },
  {
    id: 's3',
    title: 'Private Events',
    description: 'Host your special occasions in our historic dining room or upper mezzanine.',
    icon: <Users className="w-8 h-8 text-white" />
  },
  {
    id: 's4',
    title: 'Live Music',
    description: 'Regular live performances enhancing the vibrant vibe.',
    icon: <Music className="w-8 h-8 text-white" />
  }
];

// Gallery images using high quality Unsplash placeholders relevant to the food and cocktails
export const GALLERY_IMAGES = [
  { id: 1, alt: "Fried Mushrooms", url: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80" },
  { id: 2, alt: "Steak Dinner", url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" },
  { id: 3, alt: "Smoked Old Fashioned", url: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&w=800&q=80" },
  { id: 4, alt: "Burger and Fries", url: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80" },
  { id: 5, alt: "Restaurant Interior", url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" },
  { id: 6, alt: "Espresso Martini", url: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80" },
  { id: 7, alt: "Margarita", url: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80" },
  { id: 8, alt: "Spicy Martini", url: "https://images.unsplash.com/photo-1575023782549-62ca0d244b39?auto=format&fit=crop&w=800&q=80" },
];