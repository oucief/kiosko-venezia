import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   SVG ICON COMPONENTS
───────────────────────────────────────────── */
const Icons = {
  Coffee: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" y1="2" x2="6" y2="4" />
      <line x1="10" y1="2" x2="10" y2="4" />
      <line x1="14" y1="2" x2="14" y2="4" />
    </svg>
  ),
  Corn: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2C8 2 5 6 5 10c0 5 4 10 7 12 3-2 7-7 7-12 0-4-3-8-7-8z" />
      <path d="M12 6v12M9 8l3-2 3 2M9 12l3-2 3 2M9 16l3-2 3 2" />
    </svg>
  ),
  Sandwich: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3" />
      <path d="M12 19H4a1 1 0 0 1-1-1v-1h18v1a1 1 0 0 1-1 1h-2.5" />
      <path d="M18.3 5a1 1 0 0 0-.3-.7L15.3 2a1 1 0 0 0-.7-.3H9.4a1 1 0 0 0-.7.3L6 5h12.3z" />
      <path d="M18 5H6l-2 6h16l-2-6z" />
    </svg>
  ),
  Bread: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 11a3 3 0 1 1 6 0v5H3v-5z" />
      <path d="M15 11a3 3 0 1 1 6 0v5h-6v-5z" />
      <path d="M3 16h18v4H3z" />
      <path d="M9 11h6" />
    </svg>
  ),
  Empanada: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 12C4 7.6 7.6 4 12 4s8 3.6 8 8-3.6 8-8 8S4 16.4 4 12z" />
      <path d="M12 4c0 4.4 3.6 8 8 8" />
      <path d="M8 10h.01M11 13h.01M14 10h.01" />
    </svg>
  ),
  Drink: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8 2h8l1 7H7L8 2z" />
      <path d="M7 9c0 5 1 10 5 10s5-5 5-10" />
      <path d="M11 14c0 1 .5 2 1 2s1-1 1-2" />
    </svg>
  ),
  Star: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  Phone: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  MapPin: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Clock: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  ChevronDown: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  Close: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  Leaf: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ),
  Award: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  ),
  Heart: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  Flame: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  ),
  Tag: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  ),
  Instagram: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  Facebook: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  WhatsApp: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.002 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.824L.057 23.882l6.219-1.438A11.946 11.946 0 0 0 12.002 24C18.63 24 24 18.627 24 12S18.63 0 12.002 0zm0 21.818a9.805 9.805 0 0 1-5.001-1.368l-.359-.214-3.69.853.92-3.585-.234-.368A9.79 9.79 0 0 1 2.18 12c0-5.423 4.398-9.818 9.822-9.818 5.424 0 9.818 4.395 9.818 9.818 0 5.423-4.394 9.818-9.818 9.818z" />
    </svg>
  ),
  Mail: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  ExternalLink: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
};

/* ─────────────────────────────────────────────
   DATA  — sourced from real Google Maps menu
───────────────────────────────────────────── */
const HOURS = [
  { days: "Monday – Wednesday", time: "7:00 AM – 6:00 PM" },
  { days: "Thursday – Friday", time: "7:00 AM – 8:00 PM" },
  { days: "Saturday", time: "8:00 AM – 8:00 PM" },
  { days: "Sunday", time: "Closed" },
];

const CATEGORIES = [
  { id: "mains", label: "Venezuelan Mains", Icon: Icons.Corn },
  { id: "breads", label: "Breads", Icon: Icons.Bread },
  { id: "bites", label: "Bites & Extras", Icon: Icons.Empanada },
  { id: "drinks", label: "Drinks", Icon: Icons.Drink },
];

const MENU_ITEMS = [
  /* ── CACHAPAS (Venezuelan corn pancakes) ── */
  {
    id: 1,
    category: "mains",
    name: "Cachapa — Cheese",
    subtitle: "Cachapas",
    description:
      "Tasty Venezuelan sweet corn pancake filled with white cheese.",
    price: "$11.50",
    badge: "Fan Favourite",
    badgeIcon: Icons.Heart,
    featured: true,
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
  },
  {
    id: 2,
    category: "mains",
    name: "Cachapa — Shredded Beef",
    subtitle: "Cachapas",
    description:
      "Sweet corn pancake loaded with slow-cooked shredded beef (pabellón-style).",
    price: "$16.50",
    badge: "Bestseller",
    badgeIcon: Icons.Flame,
    featured: true,
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80",
  },
  {
    id: 3,
    category: "mains",
    name: "Cachapa — Shredded Chicken",
    subtitle: "Cachapas",
    description:
      "Fluffy sweet corn pancake topped with seasoned shredded chicken.",
    price: "$16.50",
    badge: null,
    badgeIcon: null,
    featured: false,
    img: "https://images.unsplash.com/photo-1598515213280-6a2b62b7b5e0?w=600&q=80",
  },
  /* ── AREPAS (Venezuelan sandwiches) ── */
  {
    id: 4,
    category: "mains",
    name: "Arepa — Cheese",
    subtitle: "Arepas · Venezuelan Sandwiches",
    description:
      "Classic grilled corn-flour pocket stuffed with melted white cheese.",
    price: "$8.50",
    badge: null,
    badgeIcon: null,
    featured: false,
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
  },
  {
    id: 5,
    category: "mains",
    name: "Arepa — Shredded Beef",
    subtitle: "Arepas · Venezuelan Sandwiches",
    description:
      "Warm arepa pocket filled with tender slow-braised shredded beef.",
    price: "$9.50",
    badge: "Bestseller",
    badgeIcon: Icons.Flame,
    featured: true,
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",
  },
  {
    id: 6,
    category: "mains",
    name: "Arepa — Shredded Chicken",
    subtitle: "Arepas · Venezuelan Sandwiches",
    description: "Grilled arepa stuffed with juicy seasoned shredded chicken.",
    price: "$9.50",
    badge: null,
    badgeIcon: null,
    featured: false,
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&q=80",
  },
  /* ── PATACONES (Venezuelan plantain sandwiches) ── */
  {
    id: 7,
    category: "mains",
    name: "Patacón — Cheese",
    subtitle: "Patacones · Venezuelan Plantain Sandwiches",
    description: "Crispy smashed fried plantain bun packed with melted cheese.",
    price: "$11.50",
    badge: null,
    badgeIcon: null,
    featured: false,
    img: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?w=600&q=80",
  },
  {
    id: 8,
    category: "mains",
    name: "Patacón — Shredded Beef",
    subtitle: "Patacones · Venezuelan Plantain Sandwiches",
    description:
      "Double-fried plantain sandwich loaded with braised shredded beef.",
    price: "$14.50",
    badge: "Specialty",
    badgeIcon: Icons.Award,
    featured: true,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: 9,
    category: "mains",
    name: "Patacón — Shredded Chicken",
    subtitle: "Patacones · Venezuelan Plantain Sandwiches",
    description: "Crispy plantain bun stuffed with seasoned shredded chicken.",
    price: "$14.50",
    badge: null,
    badgeIcon: null,
    featured: false,
    img: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=600&q=80",
  },

  /* ── BREADS ── */
  {
    id: 10,
    category: "breads",
    name: "Pan Grill",
    subtitle: "Breads",
    description:
      "French bread sandwich filled with shredded beef or shredded chicken, potato sticks, and pressed.",
    price: "$14.50",
    badge: "Fan Favourite",
    badgeIcon: Icons.Heart,
    featured: true,
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
  },
  {
    id: 11,
    category: "breads",
    name: "Pan Callejero",
    subtitle: "Breads",
    description:
      "Bun-style bread with shredded beef or shredded chicken, potato sticks, and pressed.",
    price: "$14.50",
    badge: "Bestseller",
    badgeIcon: Icons.Flame,
    featured: true,
    img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80",
  },

  /* ── BITES & EXTRAS ── */
  {
    id: 12,
    category: "bites",
    name: "4 Mini Empanadas",
    subtitle: "Bites & Extras",
    description:
      "Four golden hand-fried mini empanadas — your choice of Beef, Cheese, or Chicken.",
    price: "$7.50",
    badge: "Bestseller",
    badgeIcon: Icons.Flame,
    featured: true,
    img: "https://images.unsplash.com/photo-1769254870299-338bfd99aabd?w=600&q=80",
  },
  {
    id: 13,
    category: "bites",
    name: "Mini Lunch",
    subtitle: "Bites & Extras",
    description:
      "A satisfying Ham and Cheese sandwich — the perfect light bite.",
    price: "$7.50",
    badge: "Best Value",
    badgeIcon: Icons.Tag,
    featured: true,
    img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80",
  },

  /* ── DRINKS ── */
  {
    id: 14,
    category: "drinks",
    name: "Blackberry Juice",
    subtitle: "Fresh Juices",
    description:
      "Freshly blended blackberry juice — vibrant, tart, and naturally sweet.",
    price: "$4.25",
    badge: "Fan Favourite",
    badgeIcon: Icons.Heart,
    featured: true,
    img: "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&q=80",
  },
  {
    id: 15,
    category: "drinks",
    name: "Passion Fruit Juice",
    subtitle: "Fresh Juices",
    description:
      "Tropical passionfruit juice bursting with bold, exotic flavor.",
    price: "$4.25",
    badge: "Bestseller",
    badgeIcon: Icons.Flame,
    featured: true,
    img: "https://images.unsplash.com/photo-1560508180-03f285f67ded?w=600&q=80",
  },
  {
    id: 16,
    category: "drinks",
    name: "Nestea",
    subtitle: "Beverages",
    description:
      "Chilled Nestea iced tea — smooth, refreshing, and perfectly sweet.",
    price: "$4.25",
    badge: null,
    badgeIcon: null,
    featured: false,
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
  },
  {
    id: 17,
    category: "drinks",
    name: "Malta",
    subtitle: "Beverages",
    description:
      "Classic Caribbean malt beverage — rich, dark, and full of character.",
    price: "$3.00",
    badge: null,
    badgeIcon: null,
    featured: false,
    img: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=600&q=80",
  },
  {
    id: 18,
    category: "drinks",
    name: "Coca Cola",
    subtitle: "Beverages",
    description: "Ice-cold Coca-Cola — the perfect companion to your meal.",
    price: "$2.00",
    badge: null,
    badgeIcon: null,
    featured: false,
    img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=600&q=80",
  },
];

const FEATURED = MENU_ITEMS.filter((i) => i.featured);

const REVIEWS = [
  {
    name: "Maria G.",
    text: "Best food in Griffin! The cachapas are absolutely authentic and the empanadas are incredible. Feels like home.",
    stars: 5,
  },
  {
    name: "James T.",
    text: "The arepa with shredded beef changed my life. Passion fruit juice on the side is the perfect combo. 10/10!",
    stars: 5,
  },
  {
    name: "Sofia R.",
    text: "Pan Grill is incredible — crispy, loaded, and full of flavor. Staff is so warm and welcoming every time.",
    stars: 5,
  },
  {
    name: "Carlos M.",
    text: "The patacón sandwich is unreal. You can really taste the love and quality in every bite. Highly recommend!",
    stars: 5,
  },
];

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
function getTodayStatus() {
  const now = new Date();
  const day = now.getDay();
  const mins = now.getHours() * 60 + now.getMinutes();

  if (day === 0) return { open: false, label: "Closed Today" };

  let openAt = 7 * 60;
  let closeAt;
  if (day >= 1 && day <= 3) closeAt = 18 * 60;
  else if (day >= 4 && day <= 5) closeAt = 20 * 60;
  else {
    openAt = 8 * 60;
    closeAt = 20 * 60;
  }

  if (mins < openAt)
    return {
      open: false,
      label: `Opens at ${openAt === 7 * 60 ? "7:00 AM" : "8:00 AM"}`,
    };
  if (mins >= closeAt) return { open: false, label: "Closed Now" };
  return {
    open: true,
    label: `Open · Closes ${closeAt === 18 * 60 ? "6:00 PM" : "8:00 PM"}`,
  };
}

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */
function StarRating({ count = 5 }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Icons.Star key={i} className="w-3.5 h-3.5 text-amber-400" />
      ))}
    </span>
  );
}

function BadgeChip({ text, BadgeIcon }) {
  if (!text) return null;
  const styles = {
    "Fan Favourite": "bg-amber-100 text-amber-800",
    Bestseller: "bg-red-100 text-red-700",
    Specialty: "bg-purple-100 text-purple-700",
    "Best Value": "bg-green-100 text-green-700",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${styles[text] ?? "bg-stone-100 text-stone-600"}`}
    >
      {BadgeIcon && <BadgeIcon className="w-2.5 h-2.5" />}
      {text}
    </span>
  );
}

function MenuCard({ item }) {
  return (
    <article className="menu-card bg-white rounded-2xl overflow-hidden shadow-sm border border-[#f0e4d4] flex flex-col">
      <div className="relative h-44 overflow-hidden bg-stone-100">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div
          className="absolute inset-0 items-center justify-center bg-[#fdf0e0] hidden"
          aria-hidden="true"
        >
          <Icons.Sandwich className="w-16 h-16 text-[#c8956c]" />
        </div>
        {item.badge && (
          <div className="absolute top-2 left-2">
            <BadgeChip text={item.badge} BadgeIcon={item.badgeIcon} />
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1 gap-1.5">
        <p className="text-[#a0522d] text-[10px] font-medium uppercase tracking-wider">
          {item.subtitle}
        </p>
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-playfair font-semibold text-[#2c1810] text-base leading-tight">
            {item.name}
          </h3>
          <span className="text-[#8b4513] font-bold text-sm whitespace-nowrap">
            {item.price}
          </span>
        </div>
        <p className="text-stone-500 text-xs leading-relaxed flex-1">
          {item.description}
        </p>
      </div>
    </article>
  );
}

function FeaturedCard({ item }) {
  return (
    <article
      className="menu-card relative flex-shrink-0 w-68 rounded-2xl overflow-hidden shadow-md border border-[#f0e4d4] bg-white snap-start"
      style={{ width: "17rem" }}
    >
      <div className="relative h-52 overflow-hidden bg-stone-100">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div
          className="absolute inset-0 items-center justify-center bg-[#fdf0e0] hidden"
          aria-hidden="true"
        >
          <Icons.Sandwich className="w-20 h-20 text-[#c8956c]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          {item.badge && (
            <BadgeChip text={item.badge} BadgeIcon={item.badgeIcon} />
          )}
          <h3 className="font-playfair text-white font-semibold text-lg leading-tight mt-1 drop-shadow-sm">
            {item.name}
          </h3>
        </div>
      </div>
      <div className="p-3 flex items-center justify-between gap-2">
        <p className="text-stone-500 text-xs leading-relaxed line-clamp-2 flex-1">
          {item.description}
        </p>
        <span className="text-[#8b4513] font-bold text-base whitespace-nowrap">
          {item.price}
        </span>
      </div>
    </article>
  );
}

function HoursModal({ onClose }) {
  const status = getTodayStatus();
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl w-full max-w-sm shadow-2xl p-6 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-playfair text-xl font-semibold text-[#2c1810] flex items-center gap-2">
            <Icons.Clock className="w-5 h-5 text-[#8b4513]" />
            Hours
          </h2>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-600 p-1"
            aria-label="Close modal"
          >
            <Icons.Close className="w-5 h-5" />
          </button>
        </div>
        <div
          className={`mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${status.open ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}
        >
          <span
            className={`w-2 h-2 rounded-full ${status.open ? "bg-green-500 animate-pulse" : "bg-red-500"}`}
          />
          {status.label}
        </div>
        <ul className="space-y-3">
          {HOURS.map((h) => (
            <li key={h.days} className="flex justify-between text-sm">
              <span className="text-stone-500">{h.days}</span>
              <span
                className={`font-medium ${h.time === "Closed" ? "text-red-500" : "text-[#3d1f0a]"}`}
              >
                {h.time}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN APP
───────────────────────────────────────────── */
export default function App() {
  const [activeTab, setActiveTab] = useState("mains");
  const [showHours, setShowHours] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const menuRef = useRef(null);
  const tabsRef = useRef(null);

  const status = getTodayStatus();
  const filtered = MENU_ITEMS.filter((i) => i.category === activeTab);

  useEffect(() => {
    if (tabsRef.current) {
      const el = tabsRef.current.querySelector("[data-active='true']");
      el?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeTab]);

  function scrollToMenu() {
    menuRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-[#fdf8f2] pb-24">
      {/* ── HERO ─────────────────────────────────────── */}
      <header className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=85"
          alt="Warm Venezuelan cafe interior"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${heroLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setHeroLoaded(true)}
        />
        <div className="absolute inset-0 bg-[#3d1f0a]" />
        <div className="hero-overlay absolute inset-0" />

        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between px-5 pt-6">
          <div className="flex items-center gap-2">
            <Icons.Coffee className="w-6 h-6 text-[#f5e6c8]" />
            <span className="font-playfair text-[#f5e6c8] text-lg font-semibold tracking-wide">
              Kiosko Venezia
            </span>
          </div>
          <button
            onClick={() => setShowHours(true)}
            className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 text-xs text-white hover:bg-white/20 transition"
            aria-label="View store hours"
          >
            <span
              className={`w-2 h-2 rounded-full flex-shrink-0 ${status.open ? "bg-green-400 animate-pulse" : "bg-red-400"}`}
            />
            {status.label}
          </button>
        </div>

        {/* Hero content */}
        <div className="relative z-10 px-5 pb-12 flex flex-col items-center text-center">
          {/* Rating pill */}
          <div className="mb-5 inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2">
            <StarRating count={5} />
            <span className="text-white font-semibold text-sm">4.9</span>
            <span className="text-white/70 text-xs">· 82+ Google Reviews</span>
          </div>

          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white text-shadow-warm leading-tight mb-3">
            Roots &amp; Flavor
            <br />
            <em>From Venezuela</em>
          </h1>

          <p className="text-white/80 text-sm max-w-xs mb-2 leading-relaxed">
            Cachapas · Arepas · Patacones · Empanadas · Fresh Juices
          </p>

          <div className="flex items-center gap-1.5 text-white/60 text-xs mb-8">
            <Icons.MapPin className="w-3.5 h-3.5" />
            <span>315 W Solomon St · Downtown Griffin, GA</span>
          </div>

          <button
            onClick={scrollToMenu}
            className="flex items-center gap-2 bg-[#f5e6c8] text-[#3d1f0a] font-semibold text-sm px-8 py-3.5 rounded-full shadow-lg hover:bg-white transition active:scale-95"
          >
            Explore Our Menu
            <Icons.ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Wave break */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-10"
          >
            <path
              d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z"
              fill="#fdf8f2"
            />
          </svg>
        </div>
      </header>

      {/* ── DAILY TREATS SHOWCASE ─────────────────── */}
      <section className="px-5 pt-10 pb-2">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="font-playfair text-2xl font-bold text-[#2c1810]">
            Today's Picks
          </h2>
          <span className="text-xs text-stone-400 italic">
            Chef's favourites
          </span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-5 px-5 snap-x snap-mandatory">
          {FEATURED.map((item) => (
            <FeaturedCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* ── MENU ─────────────────────────────────── */}
      <section ref={menuRef} className="px-5 pt-8">
        <h2 className="font-playfair text-2xl font-bold text-[#2c1810] mb-5">
          Full Menu
        </h2>

        {/* Category tabs */}
        <div
          ref={tabsRef}
          className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide -mx-5 px-5 mb-6"
          role="tablist"
          aria-label="Menu categories"
        >
          {CATEGORIES.map(({ id, label, Icon }) => {
            const active = activeTab === id;
            return (
              <button
                key={id}
                data-active={active}
                role="tab"
                aria-selected={active}
                onClick={() => setActiveTab(id)}
                className={`flex-shrink-0 flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-full border transition-all duration-200 active:scale-95 ${
                  active
                    ? "bg-[#3d1f0a] text-[#f5e6c8] border-[#3d1f0a] shadow-md"
                    : "bg-white text-[#3d1f0a] border-[#e8d5be] hover:border-[#3d1f0a]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </button>
            );
          })}
        </div>

        {/* Menu grid */}
        <div
          role="tabpanel"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          aria-live="polite"
        >
          {filtered.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────── */}
      <section className="mx-5 mt-12 bg-[#3d1f0a] rounded-2xl p-6 text-white relative overflow-hidden">
        <div
          className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#8b4513]/30"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#f5e6c8]/10"
          aria-hidden="true"
        />
        <div className="relative z-10">
          <p className="text-[#f5e6c8]/70 text-xs uppercase tracking-widest mb-2">
            About Us
          </p>
          <h2 className="font-playfair text-2xl font-bold mb-3 leading-snug">
            Roots &amp; Flavor — <em>A Taste of Venezuela in Griffin</em>
          </h2>
          <p className="text-white/75 text-sm leading-relaxed mb-5">
            Kiosko Venezia is downtown Griffin's beloved Venezuelan kitchen and
            coffee bar. From golden cachapas and crispy patacones to hand-fried
            empanadas and fresh tropical juices — every dish is crafted with
            authenticity, love, and the bold flavors of Venezuela.
          </p>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { Icon: Icons.Star, val: "4.9", sub: "Google Rating" },
              { Icon: Icons.Award, val: "82+", sub: "Happy Reviews" },
              { Icon: Icons.Leaf, val: "100%", sub: "Handcrafted" },
            ].map((s) => (
              <div key={s.sub} className="bg-white/10 rounded-xl p-3">
                <s.Icon className="w-5 h-5 mx-auto mb-1 text-[#f5e6c8]" />
                <div className="font-playfair font-bold text-lg text-[#f5e6c8]">
                  {s.val}
                </div>
                <div className="text-white/60 text-[10px]">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────── */}
      <section className="px-5 pt-10 pb-4">
        <h2 className="font-playfair text-2xl font-bold text-[#2c1810] mb-4">
          What Guests Say
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide -mx-5 px-5 snap-x snap-mandatory">
          {REVIEWS.map((r, i) => (
            <article
              key={i}
              className="flex-shrink-0 w-72 bg-white rounded-2xl p-4 shadow-sm border border-[#f0e4d4] snap-start"
            >
              <StarRating count={r.stars} />
              <p className="text-stone-600 text-xs leading-relaxed mt-2 mb-3 italic">
                "{r.text}"
              </p>
              <p className="text-[#3d1f0a] text-xs font-semibold">— {r.name}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── HOURS ────────────────────────────────── */}
      <section className="mx-5 mt-6 bg-white rounded-2xl p-5 shadow-sm border border-[#f0e4d4]">
        <h2 className="font-playfair text-xl font-bold text-[#2c1810] mb-4 flex items-center gap-2">
          <Icons.Clock className="w-5 h-5 text-[#8b4513]" />
          Hours
        </h2>
        <ul className="space-y-2">
          {HOURS.map((h) => (
            <li key={h.days} className="flex justify-between text-sm">
              <span className="text-stone-500">{h.days}</span>
              <span
                className={`font-medium ${h.time === "Closed" ? "text-red-500" : "text-[#3d1f0a]"}`}
              >
                {h.time}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4 pt-4 border-t border-stone-100 flex items-start gap-2 text-xs text-stone-400">
          <Icons.MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
          <span>315 W Solomon St Ste 110, Griffin, GA 30223</span>
        </div>
      </section>

      {/* ── STAY CONNECTED ───────────────────────── */}
      <section className="px-5 pt-10 pb-2">
        <h2 className="font-playfair text-2xl font-bold text-[#2c1810] mb-1">
          Stay Connected
        </h2>
        <p className="text-stone-400 text-xs mb-5">
          Follow us · Message us · Visit us
        </p>

        <div className="grid grid-cols-2 gap-3">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/kioskovenezia.coffebites/"
            target="_blank"
            rel="noopener noreferrer"
            className="menu-card group flex items-center gap-3 bg-white rounded-2xl p-4 border border-[#f0e4d4] shadow-sm hover:border-pink-300 transition"
            aria-label="Follow on Instagram"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center flex-shrink-0">
              <Icons.Instagram className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <p className="text-[#2c1810] font-semibold text-xs">Instagram</p>
              <p className="text-stone-400 text-[10px] truncate">
                @kioskovenezia.coffebites
              </p>
            </div>
            <Icons.ExternalLink className="w-3.5 h-3.5 text-stone-300 ml-auto flex-shrink-0 group-hover:text-pink-400 transition" />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/kioskovenezia"
            target="_blank"
            rel="noopener noreferrer"
            className="menu-card group flex items-center gap-3 bg-white rounded-2xl p-4 border border-[#f0e4d4] shadow-sm hover:border-blue-300 transition"
            aria-label="Follow on Facebook"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1877F2] flex items-center justify-center flex-shrink-0">
              <Icons.Facebook className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <p className="text-[#2c1810] font-semibold text-xs">Facebook</p>
              <p className="text-stone-400 text-[10px] truncate">
                @kioskovenezia
              </p>
            </div>
            <Icons.ExternalLink className="w-3.5 h-3.5 text-stone-300 ml-auto flex-shrink-0 group-hover:text-blue-400 transition" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/17864742847"
            target="_blank"
            rel="noopener noreferrer"
            className="menu-card group flex items-center gap-3 bg-white rounded-2xl p-4 border border-[#f0e4d4] shadow-sm hover:border-green-300 transition"
            aria-label="Message on WhatsApp"
          >
            <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0">
              <Icons.WhatsApp className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <p className="text-[#2c1810] font-semibold text-xs">WhatsApp</p>
              <p className="text-stone-400 text-[10px] truncate">
                +1 786-474-2847
              </p>
            </div>
            <Icons.ExternalLink className="w-3.5 h-3.5 text-stone-300 ml-auto flex-shrink-0 group-hover:text-green-400 transition" />
          </a>

          {/* Email */}
          <a
            href="mailto:kioskovenezia@gmail.com"
            className="menu-card group flex items-center gap-3 bg-white rounded-2xl p-4 border border-[#f0e4d4] shadow-sm hover:border-amber-300 transition"
            aria-label="Send an email"
          >
            <div className="w-10 h-10 rounded-xl bg-[#3d1f0a] flex items-center justify-center flex-shrink-0">
              <Icons.Mail className="w-5 h-5 text-[#f5e6c8]" />
            </div>
            <div className="min-w-0">
              <p className="text-[#2c1810] font-semibold text-xs">Email Us</p>
              <p className="text-stone-400 text-[10px] truncate">
                kioskovenezia@gmail.com
              </p>
            </div>
            <Icons.ExternalLink className="w-3.5 h-3.5 text-stone-300 ml-auto flex-shrink-0 group-hover:text-amber-400 transition" />
          </a>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────── */}
      <footer className="px-5 pt-10 pb-8 text-center">
        {/* Social icon row */}
        <div className="flex items-center justify-center gap-4 mb-5">
          <a
            href="https://www.instagram.com/kioskovenezia.coffebites/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-white hover:scale-110 transition"
          >
            <Icons.Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://www.facebook.com/kioskovenezia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition"
          >
            <Icons.Facebook className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/17864742847"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition"
          >
            <Icons.WhatsApp className="w-4 h-4" />
          </a>
          <a
            href="mailto:kioskovenezia@gmail.com"
            aria-label="Email"
            className="w-9 h-9 rounded-full bg-[#3d1f0a] flex items-center justify-center text-[#f5e6c8] hover:scale-110 transition"
          >
            <Icons.Mail className="w-4 h-4" />
          </a>
        </div>

        <p className="font-playfair italic text-[#8b4513] text-sm mb-1">
          Kiosko Venezia
        </p>
        <p className="text-stone-400 text-xs mb-1">
          Roots &amp; Flavor · Griffin, GA
        </p>
        <p className="text-stone-300 text-[10px]">
          © 2024 Kiosko Venezia. All rights reserved.
        </p>
      </footer>

      {/* ── STICKY CTA FOOTER ────────────────────── */}
      <div className="sticky-footer fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#f0e4d4] px-3 py-3 shadow-[0_-4px_24px_rgba(61,31,10,0.12)]">
        <div className="flex gap-2 mb-2">
          <a
            href="tel:+17864742847"
            className="flex-1 flex items-center justify-center gap-1.5 bg-[#3d1f0a] text-[#f5e6c8] font-semibold text-xs py-3 rounded-xl active:scale-95 transition"
            aria-label="Call Kiosko Venezia"
          >
            <Icons.Phone className="w-3.5 h-3.5" />
            Call to Order
          </a>
          <a
            href="https://wa.me/17864742847"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] text-white font-semibold text-xs py-3 rounded-xl active:scale-95 transition"
            aria-label="Message on WhatsApp"
          >
            <Icons.WhatsApp className="w-3.5 h-3.5" />
            WhatsApp
          </a>
          <a
            href="https://maps.google.com/?q=315+W+Solomon+St+Ste+110+Griffin+GA+30223"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 bg-[#f5e6c8] text-[#3d1f0a] font-semibold text-xs py-3 rounded-xl active:scale-95 transition border border-[#e8d5be]"
            aria-label="Get directions to Kiosko Venezia"
          >
            <Icons.MapPin className="w-3.5 h-3.5" />
            Directions
          </a>
        </div>
      </div>

      {/* ── HOURS MODAL ──────────────────────────── */}
      {showHours && <HoursModal onClose={() => setShowHours(false)} />}
    </div>
  );
}
