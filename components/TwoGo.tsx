"use client";

import { useState } from "react";
import Navbar from "./Navbar";

const C = {
  bg:      "#FAF6EE",
  bgAlt:   "#F2EBE0",
  dark:    "#1A0A00",
  muted:   "#9A7E60",
  border:  "#DDD5C5",
  yellow:  "#F5C200",
  red:     "#C8390A",
};

const DISHES = [
  {
    id: 1, name: "Jollof Rice", tag: "THE CLASSIC",
    desc: "Party jollof. The one that hits different every single time.",
    img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=900&q=80",
    accent: C.yellow,
  },
  {
    id: 2, name: "Peppered Chicken", tag: "THE SHOWSTOPPER",
    desc: "Grilled, spiced, unapologetically bold.",
    img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c8?w=900&q=80",
    accent: C.red,
  },
  {
    id: 3, name: "Fried Rice", tag: "THE FAVOURITE",
    desc: "Loaded with colour. Loaded with flavour.",
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=900&q=80",
    accent: C.yellow,
  },
  {
    id: 4, name: "Bulk Orders", tag: "FOR THE CROWD",
    desc: "Feeding a crowd? 2Go handles the food, you handle the vibes.",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=900&q=80",
    accent: C.red,
  },
];

const REVIEWS = [
  { text: "2Go is the only restaurant I trust for my events. The jollof alone is worth it.", name: "Chioma A." },
  { text: "Ordered for a corporate lunch of 80 people. Everyone asked for the contact.", name: "Emeka O." },
  { text: "The food hits different. Consistent every time. That peppered chicken is unreal.", name: "Fatima B." },
  { text: "Warning: their chicken may cause aggressive enjoyment. They were absolutely right.", name: "Tunde K." },
  { text: "Fresh, fast, actually delicious. Not the usual catering food that disappoints.", name: "Adaeze M." },
];

const MARQUEE_ITEMS = [
  "JOLLOF RICE", "PEPPERED CHICKEN", "FRIED RICE",
  "BULK ORDERS", "FRESH DAILY", "ABUJA'S BEST",
  "STRIKING FLAVOUR", "ORDER NOW",
];

export default function TwoGo() {
  const [form, setForm] = useState({ email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const submit = () => {
    if (form.email && form.phone) setSubmitted(true);
  };

  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Fredoka:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,400&family=Manrope:wght@400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .twogo-btn-dark {
          background: ${C.dark}; color: ${C.yellow}; border: 2.5px solid #FAF6EE;
          border-radius: 9999px; padding: 16px 40px;
          font-family: 'Fredoka', sans-serif; font-size: 19px; font-weight: 600;
          cursor: pointer; display: inline-block;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .twogo-btn-dark:hover { background: #1A0A00; color: #F5C200; }

        .twogo-btn-yellow {
          background: ${C.yellow}; color: ${C.dark}; border: 2.5px solid #1A0A00;
          border-radius: 9999px; padding: 16px 40px;
          font-family: 'Fredoka', sans-serif; font-size: 19px; font-weight: 600;
          cursor: pointer; display: inline-block;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .twogo-btn-yellow:hover { background: #1A0A00; color: #F5C200; }

        .twogo-btn-red {
          background: ${C.red}; color: #fff; border: 2.5px solid #1A0A00;
          border-radius: 9999px; padding: 16px 40px;
          font-family: 'Fredoka', sans-serif; font-size: 19px; font-weight: 600;
          cursor: pointer; display: inline-block;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .twogo-btn-red:hover { background: #1A0A00; color: #F5C200; }

        .twogo-btn-outline {
          background: transparent; border: 2.5px solid #1A0A00;
          color: ${C.dark}; border-radius: 9999px; padding: 16px 40px;
          font-family: 'Fredoka', sans-serif; font-size: 19px; font-weight: 500;
          cursor: pointer; display: inline-block;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .twogo-btn-outline:hover { background: #1A0A00; color: #F5C200; }

        .twogo-hero-cta {
          background: ${C.red}; color: #ffffff;
          font-family: 'Anton', sans-serif; font-size: 24px;
          text-transform: uppercase; letter-spacing: 1px;
          border: 2.5px solid #1A0A00; border-radius: 9999px;
          padding: 16px 56px; cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
          line-height: 1;
        }
        .twogo-hero-cta:hover { background: #1A0A00; color: #F5C200; }

        .twogo-dish-card {
          background: #fff; border: 1px solid ${C.border};
          border-radius: 20px; overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .twogo-dish-card:hover { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(26,10,0,0.1); }

        .twogo-sticker-outer {
          clip-path: polygon(50% 0%, 56% 12%, 65% 4%, 68% 17%, 79% 11%, 79% 24%, 91% 21%, 88% 34%, 100% 35%, 94% 46%, 105% 50%, 94% 54%, 100% 65%, 88% 66%, 91% 79%, 79% 76%, 79% 89%, 68% 83%, 65% 96%, 56% 88%, 50% 100%, 44% 88%, 35% 96%, 32% 83%, 21% 89%, 21% 76%, 9% 79%, 12% 66%, 0% 65%, 6% 54%, -5% 50%, 6% 46%, 0% 35%, 12% 34%, 9% 21%, 21% 24%, 21% 11%, 32% 17%, 35% 4%, 44% 12%);
        }
        .twogo-sticker {
          clip-path: polygon(50% 0%, 56% 12%, 65% 4%, 68% 17%, 79% 11%, 79% 24%, 91% 21%, 88% 34%, 100% 35%, 94% 46%, 105% 50%, 94% 54%, 100% 65%, 88% 66%, 91% 79%, 79% 76%, 79% 89%, 68% 83%, 65% 96%, 56% 88%, 50% 100%, 44% 88%, 35% 96%, 32% 83%, 21% 89%, 21% 76%, 9% 79%, 12% 66%, 0% 65%, 6% 54%, -5% 50%, 6% 46%, 0% 35%, 12% 34%, 9% 21%, 21% 24%, 21% 11%, 32% 17%, 35% 4%, 44% 12%);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center; padding: 24px;
          box-sizing: border-box;
        }

        .twogo-menu-cta {
          background: ${C.red}; color: #fff;
          font-family: 'Anton', sans-serif; font-size: 24px;
          text-transform: uppercase; letter-spacing: 1px;
          border: 2.5px solid #1A0A00; border-radius: 9999px;
          padding: 16px 56px; cursor: pointer; line-height: 1;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .twogo-menu-cta:hover { background: #1A0A00; color: #F5C200; }

        .twogo-why-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .twogo-why-card:hover { transform: translateY(-5px); box-shadow: 0 20px 56px rgba(26,10,0,0.1); }

        .twogo-review-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .twogo-review-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(26,10,0,0.08); }

        .twogo-inp {
          background: #fff; border: 1.5px solid ${C.border};
          border-radius: 10px; padding: 16px 20px;
          color: ${C.dark}; font-family: 'DM Sans', sans-serif; font-size: 16px;
          width: 100%; outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .twogo-inp:focus { border-color: ${C.yellow}; box-shadow: 0 0 0 4px rgba(245,194,0,0.12); }
        .twogo-inp::placeholder { color: ${C.muted}; }

        .twogo-mq-track {
          display: flex; width: max-content;
          animation: twogo-marquee 22s linear infinite;
        }
        @keyframes twogo-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .twogo-lbl {
          font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 500;
          letter-spacing: 3px; text-transform: uppercase; color: ${C.muted};
        }

        .twogo-red-dot { display: flex; align-items: center; gap: 10px; }
        .twogo-red-dot::before {
          content: ''; display: inline-block; width: 8px; height: 8px;
          border-radius: 50%; background: ${C.red}; flex-shrink: 0;
        }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: ${C.bg}; }
        ::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 2px; }

        .twogo-testimonials-row { scrollbar-width: none; -ms-overflow-style: none; }
        .twogo-testimonials-row::-webkit-scrollbar { display: none; }

        /* ── RESPONSIVE ───────────────────────────────────────────── */

        /* Tablet 768–1023 */
        @media (min-width: 768px) and (max-width: 1023px) {
          .twogo-menu-circle { width: 220px !important; height: 220px !important; }
          .twogo-feed-grid   { grid-template-columns: repeat(2, 1fr) !important; }
        }

        /* Mobile ≤767 */
        @media (max-width: 767px) {
          /* Navbar */
          .nav2go-links    { display: none !important; }
          .nav2go-location { display: none !important; }
          nav[data-twogo-nav] { height: 64px !important; padding: 0 24px !important; }

          /* Section padding */
          .twogo-section-pad { padding: 48px 24px !important; }

          /* Hero */
          .twogo-hero-hl   { font-size: clamp(36px, 10vw, 56px) !important; width: 90% !important; top: calc(18% + 24px) !important; line-height: 1.15 !important; }
          .twogo-hero-sub  { font-size: clamp(18px, 4vw, 28px) !important; width: 88% !important; top: 50% !important; }
          .twogo-hero-btn  { top: 66% !important; padding: 14px 40px !important; }

          /* Menu */
          .twogo-menu-grid   { grid-template-columns: 1fr !important; gap: 48px !important; }
          .twogo-menu-circle { width: 240px !important; height: 240px !important; }

          /* About */
          .twogo-about-p { font-size: 16px !important; }

          /* Why cards */
          .twogo-why-grid { grid-template-columns: 1fr !important; gap: 16px !important; }

          /* Rewards badges */
          .twogo-rewards-badges { grid-template-columns: 1fr !important; }

          /* Rewards tiers */
          .twogo-rewards-tiers { grid-template-columns: 1fr !important; }
          .twogo-tier-divider  { border-right: none !important; border-top: 1px solid ${C.border}; padding-top: 24px !important; margin-top: 16px !important; }

          /* Feed */
          .twogo-feed-grid { grid-template-columns: 1fr !important; }

          /* Catering */
          .twogo-catering-grid { grid-template-columns: 1fr !important; min-height: auto !important; overflow: hidden !important; }
          .twogo-catering-img  { min-height: 300px !important; position: relative !important; overflow: hidden !important; }
          .twogo-catering-img img { position: relative !important; top: 0 !important; left: 0 !important; width: 100% !important; height: 300px !important; transform: none !important; object-fit: cover !important; }
          .twogo-catering-left { padding: 48px 24px !important; }

          /* Footer */
          .twogo-footer-grid    { grid-template-columns: 1fr !important; gap: 32px !important; }
          .twogo-footer-divider { border-left: none !important; padding-left: 0 !important; border-top: 1px solid rgba(255,255,255,0.25); padding-top: 32px !important; }

          /* Buttons full-width */
          .twogo-btn-dark, .twogo-btn-yellow, .twogo-btn-red,
          .twogo-btn-outline, .twogo-hero-cta, .twogo-menu-cta {
            width: 100% !important; box-sizing: border-box !important;
          }

          /* Why section — remove dividers in single column */
          .twogo-why-divider { border-right: none !important; padding-right: 0 !important; }

          /* Rewards marquee — match 24px mobile padding */
          .twogo-rewards-marquee { margin-left: -24px !important; margin-right: -24px !important; width: calc(100% + 48px) !important; }

          /* Hero — match 64px mobile nav height */
          [data-section="hero"] { margin-top: 64px !important; }

          /* Prevent horizontal scroll globally */
          body, [data-section] { overflow-x: hidden; }
        }
      `}</style>

      <Navbar />

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <div data-section="hero" style={{
        height: "100vh",
        marginTop: 72,
        position: "relative",
        backgroundImage: "url('/images/hero2.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}>
        {/* Block 1 — red headline */}
        <div className="twogo-hero-hl" style={{
          position: "absolute",
          top: "calc(22% + 40px)",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          textAlign: "center",
          fontFamily: "'Anton', sans-serif",
          fontSize: "clamp(36px, 5vw, 64px)",
          textTransform: "uppercase",
          color: C.red,
          lineHeight: 0.95,
          letterSpacing: "1px",
        }}>
          Authentic Nigerian Flavour<br />in Abuja
        </div>

        {/* Block 2 + CTA — grouped at button position */}
        <div style={{
          position: "absolute",
          top: "calc(72% + 32px)",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          width: "70%",
        }}>
          <div className="twogo-hero-sub" style={{
            textAlign: "center",
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(24px, 3.5vw, 42px)",
            textTransform: "uppercase",
            color: C.dark,
            lineHeight: 1.0,
            textShadow: "0 0 8px rgba(255,255,255,0.5)",
            width: "100%",
          }}>
            Bold Food. Real Flavour.
          </div>
          <button className="twogo-hero-cta twogo-hero-btn" style={{ whiteSpace: "nowrap" }}>
            Order Now
          </button>
        </div>
      </div>

      {/* ─── MARQUEE ─────────────────────────────────────────────── */}
      <div data-section="marquee" style={{
        background: C.yellow,
        borderTop: `3px solid ${C.red}`,
        borderBottom: `3px solid ${C.red}`,
        overflow: "hidden",
        padding: "15px 0",
      }}>
        <div className="twogo-mq-track">
          {[0, 1].map(ri => (
            <div key={ri} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              {MARQUEE_ITEMS.map((t, i) => (
                <span key={i} style={{
                  fontFamily: "'Anton', sans-serif", fontSize: 17,
                  color: C.dark, padding: "0 28px",
                  display: "flex", alignItems: "center", gap: 28, whiteSpace: "nowrap",
                }}>
                  {t}
                  <span style={{ color: i % 2 === 0 ? C.red : C.dark, fontSize: 9, opacity: 0.5 }}>★</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ─── MENU ────────────────────────────────────────────────── */}
      <div data-section="menu" className="twogo-section-pad" style={{ background: C.bg, padding: "80px 48px", textAlign: "center" }}>

        {/* Section header */}
        <div style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: "clamp(36px, 5vw, 64px)",
          color: C.red,
          textTransform: "uppercase",
          lineHeight: 1,
        }}>
          What Everyone&rsquo;s Talking About
        </div>
        <div style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: 20,
          color: C.dark,
          textTransform: "uppercase",
          marginTop: 8,
        }}>
          2Go Best Sellers
        </div>

        {/* 3-column circle grid */}
        <div className="twogo-menu-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 48,
          maxWidth: 1000,
          margin: "64px auto 0",
        }}>

          {/* Item 1 — Amala */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative" }}>
              <div className="twogo-menu-circle" style={{
                width: 280, height: 280, borderRadius: "50%",
                overflow: "hidden", margin: "0 auto", position: "relative",
              }}>
                <img
                  src="/images/food%20menu/2go%20amala.webp"
                  alt="Amala & Ewedu"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                />
              </div>
              <div className="twogo-sticker-outer" style={{
                position: "absolute", top: -19, left: -19, zIndex: 1,
                width: 148, height: 148, background: "#1A0A00",
              }} />
              <div className="twogo-sticker" style={{
                position: "absolute", top: -15, left: -15, zIndex: 2,
                width: 140, height: 140, background: "#2D6A4F",
              }}>
                <span style={{
                  fontFamily: "'Anton', sans-serif", fontSize: 12,
                  color: "#fff", textTransform: "uppercase", lineHeight: 1.3, textAlign: "center",
                }}>
                  Abuja&rsquo;s Favourite
                </span>
              </div>
            </div>
            <div style={{
              fontFamily: "'Anton', sans-serif", fontSize: 24,
              color: C.dark, textTransform: "uppercase", marginTop: 20, textAlign: "center",
            }}>
              Amala &amp; Ewedu
            </div>
            <p style={{
              fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 14,
              color: C.dark, textAlign: "center",
              maxWidth: 260, margin: "8px auto 0", lineHeight: 1.7,
            }}>
              Smooth, rich and deeply Nigerian. The kind of meal that feels like home.
            </p>
          </div>

          {/* Item 2 — Jollof Rice */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative" }}>
              <div className="twogo-menu-circle" style={{
                width: 280, height: 280, borderRadius: "50%",
                overflow: "hidden", margin: "0 auto", position: "relative",
              }}>
                <img
                  src="/images/food%20menu/2go%20rice.webp"
                  alt="Jollof Rice"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                />
              </div>
              <div className="twogo-sticker-outer" style={{
                position: "absolute", top: -19, left: -19, zIndex: 1,
                width: 148, height: 148, background: "#1A0A00",
              }} />
              <div className="twogo-sticker" style={{
                position: "absolute", top: -15, left: -15, zIndex: 2,
                width: 140, height: 140, background: C.yellow,
              }}>
                <span style={{
                  fontFamily: "'Anton', sans-serif", fontSize: 12,
                  color: C.dark, textTransform: "uppercase", lineHeight: 1.3, textAlign: "center",
                }}>
                  Our #1 Best Seller
                </span>
              </div>
            </div>
            <div style={{
              fontFamily: "'Anton', sans-serif", fontSize: 24,
              color: C.dark, textTransform: "uppercase", marginTop: 20, textAlign: "center",
            }}>
              Jollof Rice
            </div>
            <p style={{
              fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 14,
              color: C.dark, textAlign: "center",
              maxWidth: 260, margin: "8px auto 0", lineHeight: 1.7,
            }}>
              Party jollof done right. Smoky, bold and impossible to resist.
            </p>
          </div>

          {/* Item 3 — Pepper Soup */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative" }}>
              <div className="twogo-menu-circle" style={{
                width: 280, height: 280, borderRadius: "50%",
                overflow: "hidden", margin: "0 auto", position: "relative",
              }}>
                <img
                  src="/images/food%20menu/real%20pepper.png"
                  alt="Pepper Soup"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                />
              </div>
              <div className="twogo-sticker-outer" style={{
                position: "absolute", top: -19, left: -19, zIndex: 1,
                width: 148, height: 148, background: "#1A0A00",
              }} />
              <div className="twogo-sticker" style={{
                position: "absolute", top: -15, left: -15, zIndex: 2,
                width: 140, height: 140, background: C.red,
              }}>
                <span style={{
                  fontFamily: "'Anton', sans-serif", fontSize: 12,
                  color: "#fff", textTransform: "uppercase", lineHeight: 1.3, textAlign: "center",
                }}>
                  500+ Orders This Month
                </span>
              </div>
            </div>
            <div style={{
              fontFamily: "'Anton', sans-serif", fontSize: 24,
              color: C.dark, textTransform: "uppercase", marginTop: 20, textAlign: "center",
            }}>
              Pepper Soup
            </div>
            <p style={{
              fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 14,
              color: C.dark, textAlign: "center",
              maxWidth: 260, margin: "8px auto 0", lineHeight: 1.7,
            }}>
              Hot, spicy and packed with flavour. The ultimate Nigerian comfort bowl.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div style={{ marginTop: 56 }}>
          <button className="twogo-menu-cta">Start Your Order</button>
        </div>

      </div>

      {/* ─── ABOUT ───────────────────────────────────────────────── */}
      <div data-section="about" style={{
        background: C.bg,
        borderTop: "4px solid #2D6A4F",
        borderBottom: "4px solid #2D6A4F",
        padding: "72px 48px",
        textAlign: "center",
      }}>
        <div style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: "clamp(28px, 4vw, 48px)",
          color: C.dark,
          textTransform: "uppercase",
          marginBottom: 32,
          lineHeight: 1.1,
        }}>
          Authentic Nigerian Flavour in Abuja
        </div>
        <p className="twogo-about-p" style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 600,
          fontSize: 18,
          color: C.dark,
          lineHeight: 1.7,
          maxWidth: 860,
          margin: "0 auto",
        }}>
          2Go Restaurant brings bold, real Nigerian flavours to Abuja. From our signature jollof rice and peppered chicken to our famous pepper soup, everything is made fresh daily with recipes rooted in tradition. Whether you&rsquo;re grabbing lunch, ordering for your office, or feeding a crowd at your event — we&rsquo;ve got the food, the vibe, and the flavour. One location in Wuse II, ready to serve you.
        </p>
      </div>

      {/* ─── WHY 2GO ─────────────────────────────────────────────── */}
      <div data-section="why" className="twogo-section-pad" style={{ background: "#F2EBE0", padding: "80px 48px", textAlign: "center" }}>

        {/* Section header */}
        <div style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: "clamp(36px, 5vw, 64px)",
          color: C.red,
          textTransform: "uppercase",
          lineHeight: 1,
        }}>
          Here Today, Gone Tomorrow
        </div>
        <div style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: 20,
          color: C.dark,
          textTransform: "uppercase",
          marginTop: 8,
        }}>
          2Go Limited Time Offers
        </div>

        {/* 3-column grid — no card wrappers */}
        <div className="twogo-why-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
          maxWidth: 1100,
          margin: "64px auto 0",
        }}>

          {/* Item 1 — Meat */}
          <div className="twogo-why-divider" style={{ position: "relative", borderRight: "1px solid #1A0A00", paddingRight: 24 }}>
            {/* Sticker */}
            <div className="twogo-sticker-outer" style={{
              position: "absolute", top: -16, left: -16, zIndex: 1,
              width: 116, height: 116, background: "#1A0A00",
            }} />
            <div className="twogo-sticker" style={{
              position: "absolute", top: -12, left: -12, zIndex: 2,
              width: 110, height: 110, background: "#2D6A4F",
            }}>
              <span style={{
                fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 11,
                color: "#fff", textTransform: "uppercase", lineHeight: 1.3, textAlign: "center", padding: 20, display: "block",
              }}>
                Freshly Baked
              </span>
            </div>
            {/* Image card */}
            <div style={{
              background: "#fff", border: "1px solid #1A0A00", borderRadius: 16,
              height: 320, width: "100%", overflow: "hidden",
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative",
            }}>
              <img
                src="/images/here%20today/remove%20meat.png"
                alt="Meat dish"
                style={{ maxHeight: 280, width: "auto", maxWidth: "90%", objectFit: "contain", display: "block", margin: "0 auto" }}
              />
            </div>
            {/* Text */}
            <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 26, color: C.dark, textTransform: "uppercase", marginTop: 20, textAlign: "center" }}>
              Meat Pie
            </div>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 15, color: C.dark, textAlign: "center", lineHeight: 1.6, marginTop: 8 }}>
              Crispy, golden and stuffed with bold Nigerian filling. A classic done right.
            </p>
          </div>

          {/* Item 2 — Smoothie */}
          <div className="twogo-why-divider" style={{ position: "relative", borderRight: "1px solid #1A0A00", paddingRight: 24 }}>
            <div className="twogo-sticker-outer" style={{
              position: "absolute", top: -16, left: -16, zIndex: 1,
              width: 116, height: 116, background: "#1A0A00",
            }} />
            <div className="twogo-sticker" style={{
              position: "absolute", top: -12, left: -12, zIndex: 2,
              width: 110, height: 110, background: C.yellow,
            }}>
              <span style={{
                fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 11,
                color: C.dark, textTransform: "uppercase", lineHeight: 1.3, textAlign: "center", padding: 20, display: "block",
              }}>
                Today Only
              </span>
            </div>
            <div style={{
              background: "#fff", border: "1px solid #1A0A00", borderRadius: 16,
              height: 320, width: "100%", overflow: "hidden",
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative",
            }}>
              <img
                src="/images/here%20today/remove%20smoothie.png"
                alt="Smoothie"
                style={{ maxHeight: 280, width: "auto", maxWidth: "90%", objectFit: "contain", display: "block", margin: "0 auto" }}
              />
            </div>
            <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 26, color: C.dark, textTransform: "uppercase", marginTop: 20, textAlign: "center" }}>
              Fresh Smoothie
            </div>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 15, color: C.dark, textAlign: "center", lineHeight: 1.6, marginTop: 8 }}>
              Blended fresh daily. Cold, fruity and the perfect companion to your meal.
            </p>
          </div>

          {/* Item 3 — Pepper Soup */}
          <div style={{ position: "relative" }}>
            <div className="twogo-sticker-outer" style={{
              position: "absolute", top: -16, left: -16, zIndex: 1,
              width: 116, height: 116, background: "#1A0A00",
            }} />
            <div className="twogo-sticker" style={{
              position: "absolute", top: -12, left: -12, zIndex: 2,
              width: 110, height: 110, background: C.red,
            }}>
              <span style={{
                fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 11,
                color: "#fff", textTransform: "uppercase", lineHeight: 1.3, textAlign: "center", padding: 20, display: "block",
              }}>
                Fan Favourite
              </span>
            </div>
            <div style={{
              background: "#fff", border: "1px solid #1A0A00", borderRadius: 16,
              height: 320, width: "100%", overflow: "hidden",
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative",
            }}>
              <img
                src="/images/here%20today/remove%20ssm.png"
                alt="Small Chops"
                style={{ maxHeight: 280, width: "auto", maxWidth: "90%", objectFit: "contain", display: "block", margin: "0 auto" }}
              />
            </div>
            <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 26, color: C.dark, textTransform: "uppercase", marginTop: 20, textAlign: "center" }}>
              Small Chops
            </div>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 15, color: C.dark, textAlign: "center", lineHeight: 1.6, marginTop: 8 }}>
              The ultimate party starter. Crispy, saucy and gone before you know it.
            </p>
          </div>

        </div>

      </div>

      {/* ─── REWARDS ─────────────────────────────────────────────── */}
      <div data-section="rewards" className="twogo-section-pad" style={{ background: "#F2EBE0", padding: "80px 48px", textAlign: "center" }}>

        {/* Medal icon */}
        <span style={{ fontSize: 56, display: "block", marginBottom: 16, lineHeight: 1, color: C.yellow }}>✯</span>

        {/* Headline */}
        <div style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: "clamp(28px, 4vw, 52px)",
          color: "#2D6A4F",
          textTransform: "uppercase",
          lineHeight: 1.05,
          marginBottom: 56,
        }}>
          Earn 10 Points for Every ₦1,000 You Spend!
        </div>

        {/* 3 yellow sticker badges */}
        <div className="twogo-rewards-badges" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          maxWidth: 900,
          margin: "0 auto",
          gap: 32,
          alignItems: "center",
          justifyItems: "center",
        }}>
          {[
            "Sign up today and get 500 POINTS",
            "Earn 10 points for every ₦1,000 you spend!",
            "Order bulk and earn 2X points instantly",
          ].map((text, i) => (
            <div key={i} style={{ position: "relative", width: 180, height: 180 }}>
              {/* Outer dark layer */}
              <div style={{
                position: "absolute", top: 0, left: 0,
                width: 188, height: 188, background: "#1A0A00",
                clipPath: "polygon(50% 0%, 56% 12%, 65% 4%, 68% 17%, 79% 11%, 79% 24%, 91% 21%, 88% 34%, 100% 35%, 94% 46%, 100% 50%, 94% 54%, 100% 65%, 88% 66%, 91% 79%, 79% 76%, 79% 89%, 68% 83%, 65% 96%, 56% 88%, 50% 100%, 44% 88%, 35% 96%, 32% 83%, 21% 89%, 21% 76%, 9% 79%, 12% 66%, 0% 65%, 6% 54%, 0% 50%, 6% 46%, 0% 35%, 12% 34%, 9% 21%, 21% 24%, 21% 11%, 32% 17%, 35% 4%, 44% 12%)",
              }} />
              {/* Inner yellow layer */}
              <div style={{
                position: "absolute", top: 4, left: 4,
                width: 180, height: 180, background: C.yellow,
                clipPath: "polygon(50% 0%, 56% 12%, 65% 4%, 68% 17%, 79% 11%, 79% 24%, 91% 21%, 88% 34%, 100% 35%, 94% 46%, 100% 50%, 94% 54%, 100% 65%, 88% 66%, 91% 79%, 79% 76%, 79% 89%, 68% 83%, 65% 96%, 56% 88%, 50% 100%, 44% 88%, 35% 96%, 32% 83%, 21% 89%, 21% 76%, 9% 79%, 12% 66%, 0% 65%, 6% 54%, 0% 50%, 6% 46%, 0% 35%, 12% 34%, 9% 21%, 21% 24%, 21% 11%, 32% 17%, 35% 4%, 44% 12%)",
                display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
              }}>
                <span style={{
                  fontFamily: "'Manrope', sans-serif", fontWeight: 600,
                  fontSize: 13, color: C.dark, textAlign: "center",
                  lineHeight: 1.4, padding: 28, wordBreak: "break-word",
                }}>
                  {text}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Rewards tiers */}
        <div className="twogo-rewards-tiers" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          maxWidth: 900,
          margin: "64px auto 0",
        }}>

          {/* Tier 1 */}
          <div className="twogo-tier-divider" style={{ padding: "0 32px", borderRight: `2px solid ${C.border}`, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 18, color: C.dark, lineHeight: 1.4 }}>
              Free Side Dish
            </div>
            <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 36, color: "#2D6A4F", textTransform: "uppercase", marginTop: 8, lineHeight: 1 }}>
              500 Points
            </div>
          </div>

          {/* Tier 2 */}
          <div className="twogo-tier-divider" style={{ padding: "0 32px", borderRight: `2px solid ${C.border}`, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 18, color: C.dark, lineHeight: 1.4 }}>
              Free Main Meal
            </div>
            <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 36, color: "#2D6A4F", textTransform: "uppercase", marginTop: 8, lineHeight: 1 }}>
              1,200 Points
            </div>
          </div>

          {/* Tier 3 */}
          <div style={{ padding: "0 32px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 18, color: C.dark, lineHeight: 1.4 }}>
              Free Full Combo
            </div>
            <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 36, color: "#2D6A4F", textTransform: "uppercase", marginTop: 8, lineHeight: 1 }}>
              2,000 Points
            </div>
          </div>

        </div>

        {/* Green marquee banner — full bleed */}
        <div className="twogo-rewards-marquee" style={{
          background: "#2D6A4F",
          padding: "18px 0",
          overflow: "hidden",
          marginTop: 64,
          marginLeft: -48,
          marginRight: -48,
          width: "calc(100% + 96px)",
        }}>
          {/* Inner track: two identical groups so translateX(-50%) loops seamlessly */}
          <div style={{
            display: "flex",
            flexDirection: "row",
            width: "max-content",
            animation: "marqueeScroll 30s linear infinite",
          }}>
            {[0, 1].map(group => (
              <div key={group} style={{ display: "flex", flexDirection: "row", alignItems: "center", flexShrink: 0 }}>
                {[0, 1, 2, 3, 4].map(i => (
                  <div key={i} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                    <span style={{
                      fontFamily: "'Anton', sans-serif", fontSize: 22,
                      color: "#fff", textTransform: "uppercase",
                      padding: "0 40px", whiteSpace: "nowrap", flexShrink: 0,
                    }}>
                      Join Our Rewards
                    </span>
                    <button style={{
                      background: C.yellow, color: C.dark,
                      border: "2.5px solid #1A0A00", borderRadius: 9999,
                      padding: "10px 28px", margin: "0 24px",
                      fontFamily: "'Anton', sans-serif", fontSize: 18,
                      textTransform: "uppercase", cursor: "pointer",
                      lineHeight: 1, whiteSpace: "nowrap", flexShrink: 0,
                    }}>
                      Join Now
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ─── FEED ────────────────────────────────────────────────── */}
      <div data-section="feed" className="twogo-section-pad" style={{ background: C.bg, padding: "80px 48px", textAlign: "center" }}>

        {/* Section header */}
        <div style={{ marginBottom: 56 }}>
          <div style={{
            fontFamily: "'Anton', sans-serif", fontSize: 18,
            color: C.dark, textTransform: "uppercase", letterSpacing: 2, lineHeight: 1,
          }}>
            On the Feed:
          </div>
          <div style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(36px, 6vw, 72px)",
            color: C.red, textTransform: "uppercase", lineHeight: 1, marginTop: 4,
          }}>
            Mucho 2Go Love
          </div>
          <div style={{
            fontFamily: "'Manrope', sans-serif", fontWeight: 600,
            fontSize: 18, color: C.dark, marginTop: 8,
          }}>
            Spotted: Real Abuja People Eating Right
          </div>
        </div>

        {/* Instagram cards grid */}
        <div className="twogo-feed-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
          maxWidth: 1100,
          margin: "0 auto",
        }}>
          {[
            { img: "/images/on%20the%20feed/WhatsApp%20Image%202026-05-07%20at%2015.19.19.jpeg",       caption: "The jollof that started it all 🔥 Every time hits different.", likes: "1,204", comments: 38 },
            { img: "/images/on%20the%20feed/WhatsApp%20Image%202026-05-07%20at%2015.19.20.jpeg",       caption: "Bulk order for 120 people. Not a single complaint. 💪",       likes: "983",   comments: 21 },
            { img: "/images/on%20the%20feed/WhatsApp%20Image%202026-05-07%20at%2015.19.20%20%281%29.jpeg", caption: "Peppered chicken got me calling in sick tomorrow 😭🍗",    likes: "2,107", comments: 64 },
            { img: "/images/on%20the%20feed/WhatsApp%20Image%202026-05-07%20at%2015.19.20%20%282%29.jpeg", caption: "Fried rice loaded with colour and flavour as always ✨",   likes: "876",   comments: 17 },
            { img: "/images/on%20the%20feed/WhatsApp%20Image%202026-05-07%20at%2015.19.35.jpeg",       caption: "Corporate lunch for the whole team. Everyone went quiet. 😂",  likes: "1,560", comments: 45 },
            { img: "/images/on%20the%20feed/WhatsApp%20Image%202026-05-07%20at%2015.19.19.jpeg",       caption: "Abuja's best kept secret isn't so secret anymore. 🌶️",        likes: "3,221", comments: 89 },
          ].map((card, i) => (
            <div key={i} style={{
              background: "#fff",
              border: `1px solid ${C.border}`,
              borderRadius: 12,
              overflow: "hidden",
              position: "relative",
              textAlign: "left",
            }}>
              {/* Top bar */}
              <div style={{
                padding: "12px 16px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: C.yellow,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 14, color: C.dark }}>2G</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 13, color: C.dark, lineHeight: 1.3 }}>
                      2gorestaurantabj
                    </div>
                    <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: 11, color: C.muted, lineHeight: 1.3 }}>
                      Wuse II, Abuja
                    </div>
                  </div>
                </div>
                <span style={{ fontSize: 18, color: C.muted, letterSpacing: 2, lineHeight: 1 }}>···</span>
              </div>

              {/* Image */}
              <div style={{
                height: 280,
                backgroundImage: `url(${card.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }} />

              {/* Actions row */}
              <div style={{ padding: "12px 16px 4px", display: "flex", gap: 14, alignItems: "center" }}>
                <span style={{ fontSize: 20, cursor: "pointer" }}>🤍</span>
                <span style={{ fontSize: 20, cursor: "pointer" }}>💬</span>
                <span style={{ fontSize: 20, cursor: "pointer" }}>↗</span>
              </div>

              {/* Likes */}
              <div style={{ padding: "0 16px 6px", fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 13, color: C.dark }}>
                {card.likes} likes
              </div>

              {/* Caption */}
              <div style={{ padding: "0 16px 12px" }}>
                <span style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 13, color: C.dark }}>2gorestaurantabj </span>
                <span style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: 13, color: C.dark }}>{card.caption}</span>
              </div>

              {/* View comments */}
              <div style={{ padding: "0 16px 14px", fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: 12, color: C.muted }}>
                View all {card.comments} comments
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ─── CATERING ────────────────────────────────────────────── */}
      <div data-section="catering" className="twogo-catering-grid" style={{
        background: C.yellow,
        minHeight: 500,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        position: "relative",
        overflow: "visible",
        paddingTop: 80,
      }}>

        {/* LEFT — text */}
        <div className="twogo-catering-left" style={{ padding: "80px 64px" }}>
          <span style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(56px, 8vw, 96px)",
            color: C.dark, textTransform: "uppercase",
            lineHeight: 0.9, display: "block",
          }}>
            Big Event?
          </span>
          <span style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(36px, 6vw, 64px)",
            color: C.dark, textTransform: "uppercase",
            lineHeight: 0.9, marginBottom: 24, display: "block",
          }}>
            We&rsquo;ve Got You.
          </span>
          <span style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(20px, 3vw, 28px)",
            color: C.dark, textTransform: "uppercase",
            marginBottom: 16, display: "block",
          }}>
            Nigerian Catering in Abuja for Events &amp; Parties
          </span>
          <p style={{
            fontFamily: "'Manrope', sans-serif", fontWeight: 600,
            fontSize: 17, color: C.dark, lineHeight: 1.7, marginBottom: 8,
          }}>
            Order catering straight from the kitchen that knows how to feed a crowd. 2Go style.
          </p>
          <p style={{
            fontFamily: "'Manrope', sans-serif", fontWeight: 500,
            fontSize: 13, color: C.dark, marginBottom: 40,
          }}>
            * Available for Wuse II and delivery within Abuja
          </p>
          <button className="twogo-btn-red" style={{
            fontSize: 20, padding: "18px 52px",
            display: "inline-block",
            fontFamily: "'Anton', sans-serif",
            letterSpacing: "1.5px",
            lineHeight: 1.2,
          }}>
            Book Your Catering
          </button>
        </div>

        {/* RIGHT — catering image */}
        <div className="twogo-catering-img" style={{
          minHeight: 500,
          background: C.yellow,
          position: "relative",
          overflow: "visible",
        }}>
          <img
            src="/images/catering/char.png"
            alt="2Go Catering"
            style={{
              position: "absolute",
              top: -100,
              left: "50%",
              transform: "translateX(-50%)",
              width: "130%",
              height: "calc(100% + 200px)",
              objectFit: "contain",
              objectPosition: "center",
              zIndex: 2,
              filter: "drop-shadow(0px 12px 24px rgba(0,0,0,0.12))",
            }}
          />
        </div>

      </div>

      {/* ─── TESTIMONIALS ────────────────────────────────────────── */}
      <div data-section="testimonials" className="twogo-section-pad" style={{ background: C.bg, padding: "80px 48px", textAlign: "center", overflow: "hidden" }}>

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(36px, 5vw, 64px)",
            color: C.red, textTransform: "uppercase", lineHeight: 1,
          }}>
            Real Talk, Real Flavour
          </div>
          <div style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 22, color: C.dark, textTransform: "uppercase", marginTop: 8,
          }}>
            What Abuja Is Saying About 2Go
          </div>
        </div>

        {/* Auto-scrolling marquee */}
        <div style={{ overflow: "hidden", width: "100%" }}>
          <div style={{
            display: "flex", flexDirection: "row", alignItems: "center",
            gap: 32, width: "max-content",
            animation: "twogo-marquee 25s linear infinite",
          }}>
            {[0, 1].map(set => (
              <div key={set} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 32, flexShrink: 0 }}>
                {[
                  { quote: "The jollof rice is unmatched. Every single time it's perfect. 2Go is the only place I trust.", name: "Chioma A.", star: C.red,      text: C.red      },
                  { quote: "Ordered for my birthday — 80 people, all plates wiped clean. Absolutely incredible.",          name: "Emeka O.",  star: "#2D6A4F", text: "#2D6A4F" },
                  { quote: "The pepper soup hit different on a cold evening. Rich, bold, deeply Nigerian. Love it.",        name: "Fatima B.", star: C.yellow,   text: C.red      },
                  { quote: "Fast delivery, hot food, great packaging. 2Go never disappoints. My go-to always.",            name: "Tunde K.",  star: "#2D6A4F", text: "#2D6A4F" },
                  { quote: "Best peppered chicken in Abuja. No debate. The flavour is insane every time.",                 name: "Adaeze M.", star: C.red,      text: C.red      },
                ].map((t, i) => (
                  <div key={i} style={{ flexShrink: 0, textAlign: "center" }}>
                    {/* Two-layer starburst */}
                    <div style={{ position: "relative", width: 264, height: 264, margin: "0 auto" }}>
                      {/* Outer dark layer */}
                      <div style={{
                        position: "absolute", top: 0, left: 0,
                        width: 264, height: 264, background: C.dark,
                        clipPath: "polygon(50% 0%, 56% 12%, 65% 4%, 68% 17%, 79% 11%, 79% 24%, 91% 21%, 88% 34%, 100% 35%, 94% 46%, 100% 50%, 94% 54%, 100% 65%, 88% 66%, 91% 79%, 79% 76%, 79% 89%, 68% 83%, 65% 96%, 56% 88%, 50% 100%, 44% 88%, 35% 96%, 32% 83%, 21% 89%, 21% 76%, 9% 79%, 12% 66%, 0% 65%, 6% 54%, 0% 50%, 6% 46%, 0% 35%, 12% 34%, 9% 21%, 21% 24%, 21% 11%, 32% 17%, 35% 4%, 44% 12%)",
                      }} />
                      {/* Inner white layer with content */}
                      <div style={{
                        position: "absolute", top: 2, left: 2,
                        width: 260, height: 260, background: "#fff",
                        clipPath: "polygon(50% 0%, 56% 12%, 65% 4%, 68% 17%, 79% 11%, 79% 24%, 91% 21%, 88% 34%, 100% 35%, 94% 46%, 100% 50%, 94% 54%, 100% 65%, 88% 66%, 91% 79%, 79% 76%, 79% 89%, 68% 83%, 65% 96%, 56% 88%, 50% 100%, 44% 88%, 35% 96%, 32% 83%, 21% 89%, 21% 76%, 9% 79%, 12% 66%, 0% 65%, 6% 54%, 0% 50%, 6% 46%, 0% 35%, 12% 34%, 9% 21%, 21% 24%, 21% 11%, 32% 17%, 35% 4%, 44% 12%)",
                        display: "flex", flexDirection: "column",
                        alignItems: "center", justifyContent: "center",
                        padding: "32px 20px",
                      }}>
                        <span style={{ fontSize: 28, color: t.star, marginBottom: 12, lineHeight: 1 }}>★</span>
                        <p style={{
                          fontFamily: "'Manrope', sans-serif", fontWeight: 600,
                          fontSize: 12, color: t.text, textAlign: "center", lineHeight: 1.6,
                        }}>
                          &ldquo;{t.quote}&rdquo;
                        </p>
                      </div>
                    </div>
                    {/* Name */}
                    <div style={{
                      fontFamily: "'Manrope', sans-serif", fontWeight: 700,
                      fontSize: 14, color: C.dark, textAlign: "center", marginTop: 12,
                    }}>
                      {t.name}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ─── FOOTER ──────────────────────────────────────────────── */}
      <footer data-section="footer" style={{
        background: C.red,
        padding: "48px 48px 0",
      }}>

        {/* Main grid */}
        <div className="twogo-footer-grid" style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr 1fr 1fr auto",
          gap: 48,
          alignItems: "start",
        }}>

          {/* Col 1 — Logo */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#fff", flexShrink: 0 }} />
              <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 48, color: "#fff", lineHeight: 1 }}>
                2go<span style={{ color: C.yellow }}>.</span>
              </span>
            </div>
          </div>

          {/* Col 2 — Locations */}
          <div>
            <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 16, color: "#fff", textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>
              Locations
            </div>
            {["Wuse II, Abuja", "Order for Delivery", "Bulk Orders", "Catering", "See Full Menu"].map(link => (
              <a key={link} href="#" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 15, color: "rgba(255,255,255,0.85)", display: "block", marginBottom: 8, textDecoration: "none" }}>
                {link}
              </a>
            ))}
          </div>

          {/* Col 3 — Order Now */}
          <div>
            <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 16, color: "#fff", textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>
              Order Now
            </div>
            {["Directly from us (Recommended)", "WhatsApp Order", "Call Us"].map(link => (
              <a key={link} href="#" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 15, color: "rgba(255,255,255,0.85)", display: "block", marginBottom: 8, textDecoration: "none" }}>
                {link}
              </a>
            ))}
          </div>

          {/* Col 4 — Socials */}
          <div>
            <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 16, color: "#fff", textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>
              Our Socials
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, width: "fit-content" }}>

              {/* LinkedIn */}
              <a href="#" target="_blank" rel="noreferrer" style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>

              {/* Facebook */}
              <a href="#" target="_blank" rel="noreferrer" style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>

              {/* TikTok */}
              <a href="#" target="_blank" rel="noreferrer" style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.83a8.25 8.25 0 004.84 1.56V7a4.85 4.85 0 01-1.07-.31z"/></svg>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/2gorestaurantabj" target="_blank" rel="noreferrer" style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>

            </div>
            <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 20, color: C.yellow, textTransform: "uppercase", marginTop: 16 }}>
              Blog
            </div>
          </div>

          {/* Col 5 — Special Discounts */}
          <div className="twogo-footer-divider" style={{ borderLeft: "1px solid rgba(255,255,255,0.25)", paddingLeft: 48 }}>
            <div style={{
              fontFamily: "'Anton', sans-serif", fontSize: 14, color: "#fff",
              textTransform: "uppercase", letterSpacing: 1, marginBottom: 16,
              maxWidth: 220, lineHeight: 1.3,
            }}>
              Special Discounts, Points &amp; More
            </div>
            <button
              style={{
                background: "#2D6A4F", color: "#fff",
                border: "2.5px solid #1A0A00", borderRadius: 9999,
                fontFamily: "'Anton', sans-serif", fontSize: 16, textTransform: "uppercase",
                padding: "14px 24px", width: "100%", display: "block",
                marginBottom: 12, cursor: "pointer", lineHeight: 1,
                transition: "background 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#1A0A00"; (e.currentTarget as HTMLButtonElement).style.color = "#F5C200"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "#2D6A4F"; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
            >
              2Go Rewards Program
            </button>
            <button
              style={{
                background: C.yellow, color: C.dark,
                border: "2.5px solid #1A0A00", borderRadius: 9999,
                fontFamily: "'Anton', sans-serif", fontSize: 16, textTransform: "uppercase",
                padding: "14px 24px", width: "100%", display: "block",
                cursor: "pointer", lineHeight: 1,
                transition: "background 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#1A0A00"; (e.currentTarget as HTMLButtonElement).style.color = "#F5C200"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = C.yellow; (e.currentTarget as HTMLButtonElement).style.color = C.dark; }}
            >
              Join the Familia
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.2)",
          marginTop: 48,
          padding: "20px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <span style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
            © 2025 2Go Restaurant. All Rights Reserved
          </span>
          <span style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
            Privacy Policy · Terms and Conditions
          </span>
        </div>

      </footer>

    </div>
  );
}
