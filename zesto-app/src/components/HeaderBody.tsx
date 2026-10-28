import { useState, useEffect } from "react";
import "./HeaderBody.css";
import BriefcaseIcon from "./icons/BriefcaseIcon";
import CartIcon from "./icons/CartIcon";
import ChevronDownIcon from "./icons/ChevronDownIcon";
import HelpIcon from "./icons/HelpIcon";
import LogoIcon from "./icons/LogoIcon";
import OffersIcon from "./icons/OffersIcon";
import SearchIcon from "./icons/SearchIcon";
import UserIcon from "./icons/UserIcon";

const Logo = () => (
  <div className="header-logo">
    <div className="logo-icon">
      <LogoIcon size={26} halo />
    </div>
    <span className="logo-text">zesto</span>
  </div>
);

export default function HeaderBody() {
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [locationOpen, setLocationOpen] = useState(false);

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
              <ChevronDownIcon />
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
          <button className="nav-item">
            <BriefcaseIcon />
            <span>Corporate</span>
          </button>

          <button className="nav-item nav-item--offers">
            <OffersIcon />
            <span>Offers</span>
            <span className="badge badge--new">NEW</span>
          </button>

          <button className="nav-item">
            <HelpIcon />
            <span>Help</span>
          </button>

          <button className="nav-item">
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
