import { Fragment, useState, type SubmitEventHandler } from "react";
import "./FooterBody.css";
import AppStoreIcon from "./icons/AppStoreIcon";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import LogoIcon from "./icons/LogoIcon";
import MailIcon from "./icons/MailIcon";
import MapPinIcon from "./icons/MapPinIcon";
import PhoneIcon from "./icons/PhoneIcon";
import PlayStoreIcon from "./icons/PlayStoreIcon";
import TwitterIcon from "./icons/TwitterIcon";
import WaveIcon from "./icons/WaveIcon";
import YoutubeIcon from "./icons/YoutubeIcon";

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

  const handleSubscribe: SubmitEventHandler<HTMLFormElement> = (e) => {
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
        <WaveIcon />
      </div>

      <div className="footer-body">
        <div className="footer-inner">
          {/* ── Brand column ── */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <LogoIcon size={24} />
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
              <Fragment key={city}>
                <a href="#" className="city-link">
                  {city}
                </a>
                {i < cities.length - 1 && (
                  <span className="cities-dot" aria-hidden="true">
                    ·
                  </span>
                )}
              </Fragment>
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
