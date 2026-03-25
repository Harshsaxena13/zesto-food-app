import React, { useState, useEffect, useRef } from "react";
import "./ContentBody.css";

/* ─────────────────────────────────────────
   SVG Icons
───────────────────────────────────────── */
const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const ClockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width="13"
    height="13"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const FlameIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M12 22c5.523 0 10-4.477 10-10 0-4.136-2.5-7.677-6.1-9.23C16.614 4.778 17 6.85 17 8c0 2.761-2.239 5-5 5a5 5 0 01-4.9-4C5.04 10.635 4 12.707 4 15c0 3.866 3.134 7 8 7z" />
  </svg>
);
const TagIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width="15"
    height="15"
  >
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    width="16"
    height="16"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);
const ShieldIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width="28"
    height="28"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const ZapIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width="28"
    height="28"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const SmileIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width="28"
    height="28"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 13s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);
const LeafIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width="28"
    height="28"
  >
    <path d="M17 8C8 10 5.9 16.17 3.82 19.34a1 1 0 00.91 1.54c3.12-.32 7.51-1.74 10.18-5.88C17 11 21 7 21 7s-2 4-4 7" />
  </svg>
);
const ChevronRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    width="18"
    height="18"
    strokeLinecap="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const categories = [
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

const restaurants = [
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

const trendingDishes = [
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

const offers = [
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

const whyUs = [
  {
    icon: <ZapIcon />,
    title: "Lightning Fast",
    desc: "Average delivery in under 30 minutes with real-time GPS tracking.",
  },
  {
    icon: <ShieldIcon />,
    title: "Safe & Hygienic",
    desc: "Every partner kitchen passes our 50-point hygiene certification.",
  },
  {
    icon: <SmileIcon />,
    title: "5M+ Happy Eaters",
    desc: "Rated 4.8★ across app stores with glowing reviews every day.",
  },
  {
    icon: <LeafIcon />,
    title: "Eco Packaging",
    desc: "100% biodegradable packaging across 80% of our restaurant network.",
  },
];

/* ─────────────────────────────────────────
   Reusable hooks
───────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ─────────────────────────────────────────
   Sub-components
───────────────────────────────────────── */
function SectionHeader({ eyebrow, title, cta }) {
  return (
    <div className="section-header">
      <div className="section-header-left">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="section-title">{title}</h2>
      </div>
      {cta && (
        <button className="section-cta">
          {cta} <ArrowRightIcon />
        </button>
      )}
    </div>
  );
}

function RestaurantCard({ r, delay }) {
  const [ref, inView] = useInView();
  const [liked, setLiked] = useState(false);
  return (
    <div
      ref={ref}
      className={`r-card ${inView ? "r-card--visible" : ""}`}
      style={{ "--delay": `${delay}ms` }}
    >
      <div className="r-card-img-wrap">
        <img src={r.image} alt={r.name} className="r-card-img" loading="lazy" />
        <span className="r-card-tag" style={{ background: r.tagColor }}>
          {r.tag}
        </span>
        <button
          className={`r-card-like ${liked ? "r-card-like--active" : ""}`}
          onClick={() => setLiked((l) => !l)}
          aria-label="Save restaurant"
        >
          {liked ? "❤️" : "🤍"}
        </button>
        {r.offer && (
          <div className="r-card-offer">
            <TagIcon />
            {r.offer}
          </div>
        )}
      </div>
      <div className="r-card-body">
        <h3 className="r-card-name">{r.name}</h3>
        <p className="r-card-cuisine">{r.cuisine}</p>
        <div className="r-card-meta">
          <span className="r-meta-chip r-meta-rating">
            <StarIcon />
            {r.rating}
          </span>
          <span className="r-meta-chip">
            <ClockIcon />
            {r.time} min
          </span>
          <span className="r-meta-chip">{r.price} for two</span>
        </div>
      </div>
    </div>
  );
}

function DishCard({ d, index }) {
  const [ref, inView] = useInView();
  const [added, setAdded] = useState(false);
  return (
    <div
      ref={ref}
      className={`dish-card ${inView ? "dish-card--visible" : ""}`}
      style={{ "--delay": `${index * 80}ms` }}
    >
      <div className="dish-img-wrap">
        <img src={d.image} alt={d.name} className="dish-img" loading="lazy" />
      </div>
      <div className="dish-info">
        <p className="dish-name">{d.name}</p>
        <p className="dish-rest">{d.rest}</p>
        <div className="dish-foot">
          <span className="dish-price">{d.price}</span>
          <span className="dish-cal">{d.cal}</span>
        </div>
      </div>
      <button
        className={`dish-add ${added ? "dish-add--done" : ""}`}
        onClick={() => setAdded((a) => !a)}
      >
        {added ? "✓" : "+"}
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────
   Main Component
───────────────────────────────────────── */
export default function ContentBody() {
  const [activeCategory, setActiveCategory] = useState("Pizza");
  const [heroRef, heroIn] = useInView(0.05);
  const [statsRef, statsIn] = useInView();

  return (
    <main className="content">
      {/* ══════════ HERO ══════════ */}
      <section
        ref={heroRef}
        className={`hero ${heroIn ? "hero--visible" : ""}`}
      >
        {/* Floating blobs */}
        <div className="hero-blob hero-blob--1" aria-hidden="true" />
        <div className="hero-blob hero-blob--2" aria-hidden="true" />
        <div className="hero-blob hero-blob--3" aria-hidden="true" />

        <div className="hero-inner">
          <div className="hero-text">
            <span className="hero-pill">
              🔥 Over 500 restaurants delivering now
            </span>
            <h1 className="hero-headline">
              Hungry?
              <br />
              <span className="hero-highlight">We've got you</span>
              <br />
              covered. 🍽️
            </h1>
            <p className="hero-sub">
              From street-side chaats to five-star chefs—
              <br />
              delivered hot at your door in 30 minutes or less.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">
                Order Now <ArrowRightIcon />
              </button>
              <button className="btn-ghost">Explore Cuisine</button>
            </div>
            <div className="hero-trust">
              <div className="trust-avatars">
                {"🧑🏽🧕🏻👨🏾🧑🏼👩🏿".match(/\p{Emoji_Presentation}/gu)?.map((e, i) => (
                  <span key={i} className="trust-avatar" style={{ "--i": i }}>
                    {e}
                  </span>
                ))}
              </div>
              <p className="trust-text">
                <strong>5M+ orders</strong> delivered this month
              </p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card hero-card--main">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80"
                alt="Featured dish"
                className="hero-card-img"
              />
              <div className="hero-card-label">
                <span className="hero-card-emoji">🥗</span>
                <div>
                  <p className="hero-card-name">Poke Bowl</p>
                  <p className="hero-card-rest">Bowl Theory</p>
                </div>
                <span className="hero-card-price">₹380</span>
              </div>
            </div>
            {/* Floating badges */}
            <div className="hero-badge hero-badge--time">
              <span className="badge-icon">⚡</span>
              <span>22 min</span>
            </div>
            <div className="hero-badge hero-badge--rating">
              <StarIcon />
              <span>4.9 Rating</span>
            </div>
            <div className="hero-badge hero-badge--deal">
              <span>🎉</span>
              <span>50% OFF</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ STATS TICKER ══════════ */}
      <section
        ref={statsRef}
        className={`stats-bar ${statsIn ? "stats-bar--visible" : ""}`}
      >
        {[
          { val: "500+", label: "Restaurants" },
          { val: "30 min", label: "Avg Delivery" },
          { val: "5M+", label: "Happy Eaters" },
          { val: "50+", label: "Cuisines" },
          { val: "4.8★", label: "App Rating" },
          { val: "24/7", label: "Support" },
        ].map(({ val, label }, i) => (
          <React.Fragment key={val}>
            <div className="stat-item" style={{ "--i": i }}>
              <span className="stat-val">{val}</span>
              <span className="stat-label">{label}</span>
            </div>
            {i < 5 && (
              <span className="stat-divider" aria-hidden="true">
                ·
              </span>
            )}
          </React.Fragment>
        ))}
      </section>

      {/* ══════════ OFFERS STRIP ══════════ */}
      <section className="section offers-section">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Limited Time"
            title="Deals You Can't Miss"
            cta="All Offers"
          />
          <div className="offers-grid">
            {offers.map((o, i) => (
              <div
                key={o.code}
                className="offer-card"
                style={{ background: o.bg, "--delay": `${i * 120}ms` }}
              >
                <div className="offer-card-inner">
                  <div>
                    <p
                      className={`offer-headline ${o.light ? "offer-headline--light" : ""}`}
                    >
                      {o.headline}
                    </p>
                    <p
                      className={`offer-sub ${o.light ? "offer-sub--light" : ""}`}
                    >
                      {o.sub}
                    </p>
                  </div>
                  <div
                    className={`offer-code-wrap ${o.light ? "offer-code-wrap--light" : ""}`}
                  >
                    <span className="offer-code-label">USE CODE</span>
                    <span className="offer-code">{o.code}</span>
                  </div>
                </div>
                <div className="offer-card-bg-circle" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CATEGORIES ══════════ */}
      <section className="section categories-section">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Browse by Mood"
            title="What are you craving?"
          />
          <div className="categories-scroll">
            {categories.map(({ emoji, label, color }) => (
              <button
                key={label}
                className={`cat-pill ${activeCategory === label ? "cat-pill--active" : ""}`}
                style={{ "--cat-bg": color }}
                onClick={() => setActiveCategory(label)}
              >
                <span className="cat-emoji">{emoji}</span>
                <span className="cat-label">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TRENDING DISHES ══════════ */}
      <section className="section dishes-section">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Right Now"
            title="Trending Dishes 🔥"
            cta="View All"
          />
          <div className="dishes-list">
            {trendingDishes.map((d, i) => (
              <DishCard key={d.name} d={d} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ RESTAURANTS ══════════ */}
      <section className="section restaurants-section">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Top Picks"
            title="Restaurants Near You"
            cta="See All"
          />
          <div className="r-grid">
            {restaurants.map((r, i) => (
              <RestaurantCard key={r.id} r={r} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ WHY US ══════════ */}
      <section className="section why-section">
        <div className="why-inner">
          <div className="why-text-col">
            <span className="eyebrow">Why Zesto</span>
            <h2 className="why-title">
              Built for the love
              <br />
              of good food.
            </h2>
            <p className="why-desc">
              We obsess over every detail — from the moment you tap "Order" to
              the first bite. Fast, safe, and always delicious.
            </p>
            <button className="btn-primary">
              Learn More <ArrowRightIcon />
            </button>
          </div>
          <div className="why-cards-grid">
            {whyUs.map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className="why-card"
                style={{ "--delay": `${i * 100}ms` }}
              >
                <div className="why-card-icon">{icon}</div>
                <h3 className="why-card-title">{title}</h3>
                <p className="why-card-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA BANNER ══════════ */}
      <section className="cta-banner">
        <div className="cta-banner-blobs" aria-hidden="true">
          <div className="cta-blob cta-blob--1" />
          <div className="cta-blob cta-blob--2" />
        </div>
        <div className="cta-banner-inner">
          <p className="cta-eyebrow">🚀 Partner with Zesto</p>
          <h2 className="cta-title">
            Own a restaurant?
            <br />
            Reach thousands of new customers.
          </h2>
          <p className="cta-sub">
            Join 500+ restaurants already growing with us.
          </p>
          <div className="cta-actions">
            <button className="btn-primary btn-primary--dark">
              Register Your Restaurant <ArrowRightIcon />
            </button>
            <button className="btn-ghost btn-ghost--dark">Talk to Sales</button>
          </div>
        </div>
      </section>
    </main>
  );
}
