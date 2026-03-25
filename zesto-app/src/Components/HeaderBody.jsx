import React, { useState, useEffect } from "react";
import "./HeaderBody.css";

const CartIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 01-8 0" />
  </svg>
);

const SearchIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const OffersIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
    <line x1="9.69" y1="8" x2="21.17" y2="8" />
    <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
    <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
    <line x1="14.31" y1="16" x2="2.83" y2="16" />
    <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
  </svg>
);

const HelpIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
);

const UserIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ChevronIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
  </svg>
);

const Logo = () => (
  <div className="header-logo">
    <div className="logo-icon">
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
      >
        <path
          d="M20 4C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4z"
          fill="white"
          fillOpacity="0.15"
        />
        <path
          d="M20 8c-1.5 0-2.8.6-3.8 1.5L13 13h5l2-3 2 3h5l-3.2-3.5C22.8 8.6 21.5 8 20 8z"
          fill="white"
        />
        <path d="M25 14H15l-2 3h14l-2-3z" fill="white" fillOpacity="0.8" />
        <circle cx="20" cy="22" r="4" fill="white" />
        <circle cx="20" cy="22" r="2" fill="#FF5200" />
      </svg>
    </div>
    <span className="logo-text">zesto</span>
  </div>
);

export default function HeaderBody() {
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [locationOpen, setLocationOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header-inner">
        {/* Left: Logo + Location */}
        <div className="header-left">
          <Logo />

          <button
            className="location-picker"
            onClick={() => setLocationOpen(!locationOpen)}
            aria-expanded={locationOpen}
          >
            <span className="location-label">Deliver to</span>
            <span className="location-value">
              New Delhi
              <span className="location-pin" />
            </span>
            <span className={`location-chevron ${locationOpen ? "open" : ""}`}>
              <ChevronIcon />
            </span>
          </button>
        </div>

        {/* Center: Search */}
        <div className="header-search-wrap">
          <div className="header-search">
            <SearchIcon />
            <input
              className="search-input"
              type="text"
              placeholder="Search for food, restaurants…"
            />
            <kbd className="search-shortcut">⌘K</kbd>
          </div>
        </div>

        {/* Right: Nav links */}
        <nav className="header-nav" aria-label="Main navigation">
          <button
            className="nav-item"
            onMouseEnter={() => setActiveNav("corporate")}
            onMouseLeave={() => setActiveNav(null)}
          >
            <BriefcaseIcon />
            <span>Corporate</span>
          </button>

          <button
            className="nav-item nav-item--offers"
            onMouseEnter={() => setActiveNav("offers")}
            onMouseLeave={() => setActiveNav(null)}
          >
            <OffersIcon />
            <span>Offers</span>
            <span className="badge badge--new">NEW</span>
          </button>

          <button
            className="nav-item"
            onMouseEnter={() => setActiveNav("help")}
            onMouseLeave={() => setActiveNav(null)}
          >
            <HelpIcon />
            <span>Help</span>
          </button>

          <button
            className="nav-item"
            onMouseEnter={() => setActiveNav("signin")}
            onMouseLeave={() => setActiveNav(null)}
          >
            <UserIcon />
            <span>Sign In</span>
          </button>

          <button
            className="nav-item nav-item--cart"
            onClick={() => setCartCount((c) => Math.max(0, c - 1))}
          >
            <div className="cart-icon-wrap">
              <CartIcon />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </div>
            <span>Cart</span>
          </button>
        </nav>
      </div>

      {/* Bottom accent line */}
      <div className="header-accent-line" />
    </header>
  );
}
