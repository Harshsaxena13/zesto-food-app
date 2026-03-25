import React, { useState } from "react";
import "./FooterBody.css";

/* ── Icons ── */
const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="16"
    height="16"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const AppStoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.18 23.76c.3.17.65.19.97.07l12.4-7.17-2.75-2.75-10.62 9.85zM.32 1.5C.12 1.83 0 2.24 0 2.72v18.56c0 .48.12.89.32 1.22l.06.06 10.4-10.4v-.25L.38 1.44.32 1.5zM20.06 10.3l-2.64-1.53-3.06 3.06 3.06 3.06 2.64-1.53c.76-.44.76-1.62 0-2.06zM4.15.24L16.55 7.4l-2.75 2.75L3.18.3C3.5.18 3.85.07 4.15.24z" />
  </svg>
);

/* ── Data ── */
const footerLinks = [
  {
    heading: "Company",
    links: ["About Us", "Careers", "Blog", "Press Kit", "Investor Relations"],
  },
  {
    heading: "For You",
    links: [
      "Offers & Deals",
      "Zesto One",
      "Corporate Orders",
      "Gift Cards",
      "Refer & Earn",
    ],
  },
  {
    heading: "Partner With Us",
    links: [
      "Add Your Restaurant",
      "Delivery Partner",
      "Advertise",
      "API & Integrations",
    ],
  },
  {
    heading: "Legal",
    links: [
      "Terms of Service",
      "Privacy Policy",
      "Cookie Policy",
      "Refund Policy",
      "Grievance Portal",
    ],
  },
];

const socialLinks = [
  { icon: <InstagramIcon />, label: "Instagram", href: "#" },
  { icon: <TwitterIcon />, label: "Twitter / X", href: "#" },
  { icon: <LinkedInIcon />, label: "LinkedIn", href: "#" },
  { icon: <YoutubeIcon />, label: "YouTube", href: "#" },
];

const cities = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
];

/* ── Component ── */
export default function FooterBody() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="footer">
      {/* ── Wave divider ── */}
      <div className="footer-wave" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            fill="var(--footer-bg)"
          />
        </svg>
      </div>

      <div className="footer-body">
        <div className="footer-inner">
          {/* ── Brand column ── */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path
                    d="M20 8c-1.5 0-2.8.6-3.8 1.5L13 13h5l2-3 2 3h5l-3.2-3.5C22.8 8.6 21.5 8 20 8z"
                    fill="white"
                  />
                  <path
                    d="M25 14H15l-2 3h14l-2-3z"
                    fill="white"
                    fillOpacity="0.8"
                  />
                  <circle cx="20" cy="22" r="4" fill="white" />
                  <circle cx="20" cy="22" r="2" fill="#FF5200" />
                </svg>
              </div>
              <span className="footer-logo-text">zesto</span>
            </div>

            <p className="footer-tagline">
              Hot food. Fast delivery.
              <br />
              Every craving, covered.
            </p>

            {/* Newsletter */}
            <div className="footer-newsletter">
              <p className="newsletter-label">
                Get exclusive deals in your inbox
              </p>
              {subscribed ? (
                <div className="newsletter-success">
                  <span>🎉 You're on the list!</span>
                </div>
              ) : (
                <form className="newsletter-form" onSubmit={handleSubscribe}>
                  <div className="newsletter-input-wrap">
                    <MailIcon />
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="newsletter-input"
                      required
                    />
                  </div>
                  <button type="submit" className="newsletter-btn">
                    Subscribe <ArrowRightIcon />
                  </button>
                </form>
              )}
            </div>

            {/* Social */}
            <div className="footer-social">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="social-btn"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Nav columns ── */}
          <div className="footer-links-grid">
            {footerLinks.map(({ heading, links }) => (
              <div key={heading} className="footer-col">
                <h3 className="footer-col-heading">{heading}</h3>
                <ul className="footer-col-list">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="footer-link">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── App download ── */}
        <div className="footer-app-strip">
          <div className="app-strip-inner">
            <div className="app-strip-text">
              <span className="app-strip-eyebrow">📱 Download the App</span>
              <span className="app-strip-headline">Order faster on the go</span>
            </div>
            <div className="app-strip-buttons">
              <a href="#" className="app-btn">
                <span className="app-btn-icon">
                  <AppStoreIcon />
                </span>
                <span className="app-btn-copy">
                  <span className="app-btn-sub">Download on the</span>
                  <span className="app-btn-name">App Store</span>
                </span>
              </a>
              <a href="#" className="app-btn">
                <span className="app-btn-icon">
                  <PlayStoreIcon />
                </span>
                <span className="app-btn-copy">
                  <span className="app-btn-sub">Get it on</span>
                  <span className="app-btn-name">Google Play</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Cities ── */}
        <div className="footer-cities">
          <span className="cities-label">
            <MapPinIcon /> We deliver in
          </span>
          <div className="cities-list">
            {cities.map((city, i) => (
              <React.Fragment key={city}>
                <a href="#" className="city-link">
                  {city}
                </a>
                {i < cities.length - 1 && (
                  <span className="cities-dot" aria-hidden="true">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p className="footer-copyright">
              © {new Date().getFullYear()} Zesto Technologies Pvt. Ltd. · Made
              with{" "}
              <span className="heart" aria-label="love">
                ♥
              </span>{" "}
              in India
            </p>
            <div className="footer-bottom-contact">
              <a href="tel:+911800000000" className="contact-link">
                <PhoneIcon /> 1800-000-0000
              </a>
              <a href="mailto:support@zesto.in" className="contact-link">
                <MailIcon /> support@zesto.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
