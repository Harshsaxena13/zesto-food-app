import LeafIcon from "../../components/icons/LeafIcon";
import ShieldIcon from "../../components/icons/ShieldIcon";
import SmileIcon from "../../components/icons/SmileIcon";
import ZapIcon from "../../components/icons/ZapIcon";

/* Mock content for the home page. */
export interface Restaurant {
  id: number;
  name: string;
  tag: string;
  tagColor: string;
  cuisine: string;
  rating: number;
  time: string;
  price: string;
  offer: string;
  image: string;
}

export interface Dish {
  name: string;
  rest: string;
  price: string;
  cal: string;
  image: string;
}

export const categories = [
  { emoji: "🍕", label: "Pizza", color: "#FFF0E8" },
  { emoji: "🍔", label: "Burgers", color: "#FFF8E8" },
  { emoji: "🍜", label: "Noodles", color: "#FFF0F0" },
  { emoji: "🥗", label: "Healthy", color: "#EDFAF2" },
  { emoji: "🍣", label: "Sushi", color: "#EEF5FF" },
  { emoji: "🌮", label: "Tacos", color: "#FFF5E8" },
  { emoji: "🍰", label: "Desserts", color: "#FFF0F8" },
  { emoji: "☕", label: "Drinks", color: "#F5F0FF" },
  { emoji: "🍗", label: "Chicken", color: "#FFF8EE" },
  { emoji: "🥙", label: "Wraps", color: "#EEFFF5" },
];

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "The Spice Route",
    tag: "Most Loved",
    tagColor: "#FF5200",
    cuisine: "North Indian · Mughlai",
    rating: 4.8,
    time: "25–35",
    price: "₹200",
    offer: "50% off up to ₹100",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
  },
  {
    id: 2,
    name: "Flame & Crust",
    tag: "Trending 🔥",
    tagColor: "#FF7A3D",
    cuisine: "Italian · Pizzeria",
    rating: 4.6,
    time: "20–30",
    price: "₹350",
    offer: "Free delivery",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
  },
  {
    id: 3,
    name: "Bowl Theory",
    tag: "Healthy Pick",
    tagColor: "#2DAA6E",
    cuisine: "Salads · Buddha Bowls",
    rating: 4.7,
    time: "15–25",
    price: "₹300",
    offer: "20% off",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
  },
  {
    id: 4,
    name: "Wok This Way",
    tag: "New",
    tagColor: "#5B7FFF",
    cuisine: "Pan-Asian · Chinese",
    rating: 4.5,
    time: "30–40",
    price: "₹250",
    offer: "Buy 2 get 1 free",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80",
  },
  {
    id: 5,
    name: "Burger Lab",
    tag: "Fan Favourite",
    tagColor: "#FFAA00",
    cuisine: "American · Burgers",
    rating: 4.9,
    time: "20–30",
    price: "₹400",
    offer: "₹75 off on ₹299+",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
  },
  {
    id: 6,
    name: "Sakura Garden",
    tag: "Premium",
    tagColor: "#E25FAD",
    cuisine: "Japanese · Sushi",
    rating: 4.7,
    time: "35–45",
    price: "₹600",
    offer: "15% off first order",
    image:
      "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80",
  },
];

export const trendingDishes: Dish[] = [
  {
    name: "Butter Chicken",
    rest: "The Spice Route",
    price: "₹320",
    cal: "520 kcal",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80",
  },
  {
    name: "Truffle Pizza",
    rest: "Flame & Crust",
    price: "₹480",
    cal: "680 kcal",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
  },
  {
    name: "Poke Bowl",
    rest: "Bowl Theory",
    price: "₹380",
    cal: "410 kcal",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
  },
  {
    name: "Smash Burger",
    rest: "Burger Lab",
    price: "₹350",
    cal: "780 kcal",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80",
  },
  {
    name: "Dragon Roll",
    rest: "Sakura Garden",
    price: "₹520",
    cal: "340 kcal",
    image:
      "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&q=80",
  },
];

export const offers = [
  {
    code: "ZESTO50",
    headline: "50% OFF",
    sub: "Up to ₹100 on your first order",
    bg: "linear-gradient(135deg,#FF5200 0%,#FF9D6C 100%)",
    light: true,
  },
  {
    code: "FREEDEL",
    headline: "FREE DELIVERY",
    sub: "On orders above ₹299 all weekend",
    bg: "linear-gradient(135deg,#1A1206 0%,#3D2B10 100%)",
    light: false,
  },
  {
    code: "ZESTONE",
    headline: "FLAT ₹125 OFF",
    sub: "For Zesto One members every day",
    bg: "linear-gradient(135deg,#FFAA00 0%,#FF7A3D 100%)",
    light: true,
  },
];

export const whyUs = [
  {
    icon: ZapIcon,
    title: "Lightning Fast",
    desc: "Average delivery in under 30 minutes with real-time GPS tracking.",
  },
  {
    icon: ShieldIcon,
    title: "Safe & Hygienic",
    desc: "Every partner kitchen passes our 50-point hygiene certification.",
  },
  {
    icon: SmileIcon,
    title: "5M+ Happy Eaters",
    desc: "Rated 4.8★ across app stores with glowing reviews every day.",
  },
  {
    icon: LeafIcon,
    title: "Eco Packaging",
    desc: "100% biodegradable packaging across 80% of our restaurant network.",
  },
];
