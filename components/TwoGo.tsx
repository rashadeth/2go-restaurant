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
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .twogo-btn-dark {
          background: ${C.dark}; color: ${C.yellow}; border: 2.5px solid #FAF6EE;
          border-radius: 10px; padding: 16px 40px;
          font-family: 'Fredoka', sans-serif; font-size: 19px; font-weight: 600;
          cursor: pointer; display: inline-block;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .twogo-btn-dark:hover { background: #1A0A00; color: #F5C200; }

        .twogo-btn-yellow {
          background: ${C.yellow}; color: ${C.dark}; border: 2.5px solid #1A0A00;
          border-radius: 10px; padding: 16px 40px;
          font-family: 'Fredoka', sans-serif; font-size: 19px; font-weight: 600;
          cursor: pointer; display: inline-block;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .twogo-btn-yellow:hover { background: #1A0A00; color: #F5C200; }

        .twogo-btn-red {
          background: ${C.red}; color: #fff; border: 2.5px solid #1A0A00;
          border-radius: 10px; padding: 16px 40px;
          font-family: 'Fredoka', sans-serif; font-size: 19px; font-weight: 600;
          cursor: pointer; display: inline-block;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .twogo-btn-red:hover { background: #1A0A00; color: #F5C200; }

        .twogo-btn-outline {
          background: transparent; border: 2.5px solid #1A0A00;
          color: ${C.dark}; border-radius: 10px; padding: 16px 40px;
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
      `}</style>

      <Navbar />

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <div data-section="hero" style={{
        height: "100vh",
        position: "relative",
        backgroundImage: "url('/images/hero2.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}>
        {/* Block 1 — red headline */}
        <div style={{
          position: "absolute",
          top: "22%",
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

        {/* Block 2 — dark subheadline */}
        <div style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          textAlign: "center",
          fontFamily: "'Anton', sans-serif",
          fontSize: "clamp(24px, 3.5vw, 42px)",
          textTransform: "uppercase",
          color: C.dark,
          lineHeight: 1.0,
          textShadow: "0 0 8px rgba(255,255,255,0.5)",
        }}>
          Bold Food. Real Flavour.
        </div>

        {/* CTA button */}
        <button className="twogo-hero-cta" style={{
          position: "absolute",
          top: "72%",
          left: "50%",
          transform: "translateX(-50%)",
          whiteSpace: "nowrap",
        }}>
          Order Now
        </button>
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
      <div data-section="menu" style={{ background: C.bg, padding: "80px 48px", textAlign: "center" }}>

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
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 48,
          maxWidth: 1000,
          margin: "64px auto 0",
        }}>

          {/* Item 1 — Amala */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative" }}>
              <div style={{
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
              fontFamily: "'Anton', sans-serif", fontSize: 14,
              color: C.muted, textAlign: "center",
              maxWidth: 260, margin: "8px auto 0", lineHeight: 1.5,
            }}>
              Smooth, rich and deeply Nigerian. The kind of meal that feels like home.
            </p>
          </div>

          {/* Item 2 — Jollof Rice */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative" }}>
              <div style={{
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
              fontFamily: "'Anton', sans-serif", fontSize: 14,
              color: C.muted, textAlign: "center",
              maxWidth: 260, margin: "8px auto 0", lineHeight: 1.5,
            }}>
              Party jollof done right. Smoky, bold and impossible to resist.
            </p>
          </div>

          {/* Item 3 — Pepper Soup */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative" }}>
              <div style={{
                width: 280, height: 280, borderRadius: "50%",
                overflow: "hidden", margin: "0 auto", position: "relative",
              }}>
                <img
                  src="/images/food%20menu/pepersou.webp"
                  alt="Pepper Soup"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", display: "block", mixBlendMode: "multiply" }}
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
              fontFamily: "'Anton', sans-serif", fontSize: 14,
              color: C.muted, textAlign: "center",
              maxWidth: 260, margin: "8px auto 0", lineHeight: 1.5,
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
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 18,
          color: C.dark,
          lineHeight: 1.8,
          maxWidth: 860,
          margin: "0 auto",
          fontWeight: 400,
        }}>
          2Go Restaurant brings bold, real Nigerian flavours to Abuja. From our signature jollof rice and peppered chicken to our famous pepper soup, everything is made fresh daily with recipes rooted in tradition. Whether you&rsquo;re grabbing lunch, ordering for your office, or feeding a crowd at your event — we&rsquo;ve got the food, the vibe, and the flavour. One location in Wuse II, ready to serve you.
        </p>
      </div>

      {/* ─── WHY 2GO ─────────────────────────────────────────────── */}
      <div data-section="why" style={{ background: C.bgAlt, padding: "80px 48px", textAlign: "center" }}>

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

        {/* 3-column card grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
          maxWidth: 1100,
          margin: "64px auto 0",
        }}>

          {/* Card 1 — Amala */}
          <div style={{
            background: "#fff",
            border: `1.5px solid ${C.border}`,
            borderRadius: 20,
            padding: 24,
            position: "relative",
            overflow: "visible",
          }}>
            <div className="twogo-sticker-outer" style={{
              position: "absolute", top: -20, left: -20, zIndex: 1,
              width: 118, height: 118, background: "#1A0A00",
            }} />
            <div className="twogo-sticker" style={{
              position: "absolute", top: -16, left: -16, zIndex: 2,
              width: 110, height: 110, background: "#2D6A4F",
            }}>
              <span style={{
                fontFamily: "'Anton', sans-serif", fontSize: 11,
                color: "#fff", textTransform: "uppercase", lineHeight: 1.3, textAlign: "center",
              }}>
                Abuja&rsquo;s Favourite
              </span>
            </div>
            <img
              src="/images/food%20menu/2go%20amala.webp"
              alt="Amala & Ewedu"
              style={{ width: "100%", height: 260, objectFit: "contain", objectPosition: "center", display: "block" }}
            />
            <div style={{
              fontFamily: "'Anton', sans-serif", fontSize: 24,
              color: C.dark, textTransform: "uppercase", marginTop: 16, textAlign: "center",
            }}>
              Amala &amp; Ewedu
            </div>
            <p style={{
              fontFamily: "'Anton', sans-serif", fontSize: 14,
              color: C.muted, textAlign: "center", lineHeight: 1.5, marginTop: 8,
            }}>
              Smooth, rich and deeply Nigerian. The kind of meal that feels like home.
            </p>
          </div>

          {/* Card 2 — Jollof Rice */}
          <div style={{
            background: "#fff",
            border: `1.5px solid ${C.border}`,
            borderRadius: 20,
            padding: 24,
            position: "relative",
            overflow: "visible",
          }}>
            <div className="twogo-sticker-outer" style={{
              position: "absolute", top: -20, left: -20, zIndex: 1,
              width: 118, height: 118, background: "#1A0A00",
            }} />
            <div className="twogo-sticker" style={{
              position: "absolute", top: -16, left: -16, zIndex: 2,
              width: 110, height: 110, background: C.yellow,
            }}>
              <span style={{
                fontFamily: "'Anton', sans-serif", fontSize: 11,
                color: C.dark, textTransform: "uppercase", lineHeight: 1.3, textAlign: "center",
              }}>
                Our #1 Best Seller
              </span>
            </div>
            <img
              src="/images/food%20menu/2go%20rice.webp"
              alt="Jollof Rice"
              style={{ width: "100%", height: 260, objectFit: "contain", objectPosition: "center", display: "block" }}
            />
            <div style={{
              fontFamily: "'Anton', sans-serif", fontSize: 24,
              color: C.dark, textTransform: "uppercase", marginTop: 16, textAlign: "center",
            }}>
              Jollof Rice
            </div>
            <p style={{
              fontFamily: "'Anton', sans-serif", fontSize: 14,
              color: C.muted, textAlign: "center", lineHeight: 1.5, marginTop: 8,
            }}>
              Party jollof done right. Smoky, bold and impossible to resist.
            </p>
          </div>

          {/* Card 3 — Pepper Soup */}
          <div style={{
            background: "#fff",
            border: `1.5px solid ${C.border}`,
            borderRadius: 20,
            padding: 24,
            position: "relative",
            overflow: "visible",
          }}>
            <div className="twogo-sticker-outer" style={{
              position: "absolute", top: -20, left: -20, zIndex: 1,
              width: 118, height: 118, background: "#1A0A00",
            }} />
            <div className="twogo-sticker" style={{
              position: "absolute", top: -16, left: -16, zIndex: 2,
              width: 110, height: 110, background: C.red,
            }}>
              <span style={{
                fontFamily: "'Anton', sans-serif", fontSize: 11,
                color: "#fff", textTransform: "uppercase", lineHeight: 1.3, textAlign: "center",
              }}>
                500+ Orders This Month
              </span>
            </div>
            <img
              src="/images/food%20menu/pepersou.webp"
              alt="Pepper Soup"
              style={{ width: "100%", height: 260, objectFit: "contain", objectPosition: "center", display: "block", mixBlendMode: "multiply" }}
            />
            <div style={{
              fontFamily: "'Anton', sans-serif", fontSize: 24,
              color: C.dark, textTransform: "uppercase", marginTop: 16, textAlign: "center",
            }}>
              Pepper Soup
            </div>
            <p style={{
              fontFamily: "'Anton', sans-serif", fontSize: 14,
              color: C.muted, textAlign: "center", lineHeight: 1.5, marginTop: 8,
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

      {/* ─── HUNGER SHOT ─────────────────────────────────────────── */}
      <div data-section="hunger-shot" style={{ background: C.bg, padding: "0 48px 48px" }}>
        <div style={{ position: "relative", height: "80vh", overflow: "hidden", borderRadius: 32 }}>
          {/* Photo */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "url(https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1600&q=80)",
            backgroundSize: "cover", backgroundPosition: "center",
            filter: "brightness(0.28) saturate(0.75)",
          }} />
          {/* Cream overlay */}
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(130deg, rgba(250,246,238,0.92) 0%, rgba(250,246,238,0.35) 48%, transparent 100%)`,
          }} />
          {/* Bulk badge */}
          <div style={{
            position: "absolute", top: 40, right: 40,
            background: C.red, color: "#fff", borderRadius: 12,
            padding: "12px 24px", fontFamily: "Fredoka", fontSize: 16, fontWeight: 600,
          }}>
            Bulk Orders
          </div>

          {/* Content */}
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
            padding: "80px",
          }}>
            <span className="twogo-lbl" style={{ marginBottom: 20 }}>Feeding a crowd</span>
            <h2 style={{
              fontFamily: "Fredoka", fontSize: "clamp(52px,8vw,100px)",
              fontWeight: 700, lineHeight: 0.92, letterSpacing: "-2.5px",
              marginBottom: 36, maxWidth: 700, color: C.dark,
            }}>
              Feeding a crowd?<br />
              <span style={{ color: C.red }}>We do that too.</span>
            </h2>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
              <a href="https://wa.me/2349054005285" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <button className="twogo-btn-red" style={{ fontSize: 17 }}>Talk to Us on WhatsApp</button>
              </a>
              <button className="twogo-btn-dark" style={{ fontSize: 17 }}>View Menu</button>
            </div>
            <div style={{ display: "flex", gap: 28 }}>
              {["Birthdays", "Corporate", "Lifestyle"].map(t => (
                <span key={t} className="twogo-red-dot" style={{ fontSize: 13, color: C.muted, fontWeight: 500 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── REVIEWS ─────────────────────────────────────────────── */}
      <div data-section="reviews" style={{ background: C.bg, padding: "120px 48px" }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          marginBottom: 64, flexWrap: "wrap", gap: 24,
        }}>
          <div>
            <span className="twogo-lbl" style={{ display: "block", marginBottom: 14 }}>Real talk</span>
            <h2 style={{
              fontFamily: "Fredoka", fontSize: "clamp(40px,6vw,72px)",
              fontWeight: 700, letterSpacing: "-1.5px", lineHeight: 0.92, color: C.dark,
            }}>
              What Abuja<br />
              <span style={{ color: C.yellow }}>Is Saying.</span>
            </h2>
          </div>
          <span className="twogo-lbl">{REVIEWS.length} reviews</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 2 }}>
          {REVIEWS.map((r, i) => (
            <div key={i} className="twogo-review-card" style={{
              background: i % 2 === 0 ? "#fff" : C.bgAlt,
              border: `1px solid ${C.border}`,
              borderRadius:
                i === 0 ? "24px 0 0 0"
                : i === REVIEWS.length - 1 ? "0 0 24px 0"
                : "0",
              padding: "44px 36px",
            }}>
              <div style={{
                width: 20, height: 3,
                background: i % 2 === 0 ? C.red : C.yellow,
                borderRadius: 2, marginBottom: 22,
              }} />
              <div style={{ display: "flex", gap: 3, marginBottom: 18 }}>
                {[...Array(5)].map((_, si) => (
                  <span key={si} style={{ color: si < 4 ? C.yellow : C.red, fontSize: 13 }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.82, marginBottom: 28, fontStyle: "italic" }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <span style={{ fontSize: 13, color: C.dark, fontWeight: 600 }}>{r.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── LEAD CAPTURE ────────────────────────────────────────── */}
      <div data-section="lead-capture" style={{ background: C.dark, padding: "120px 48px", position: "relative", overflow: "hidden" }}>
        {/* Ghost type */}
        <div style={{
          position: "absolute", bottom: -40, right: -20,
          fontFamily: "Fredoka", fontSize: "clamp(120px,20vw,220px)",
          fontWeight: 700, color: "rgba(255,251,240,0.03)",
          lineHeight: 1, userSelect: "none", pointerEvents: "none",
          letterSpacing: "-6px", whiteSpace: "nowrap",
        }}>2GO</div>
        {/* Decorative rings */}
        <div style={{
          position: "absolute", top: -60, right: 200,
          width: 220, height: 220, borderRadius: "50%",
          border: `2px solid ${C.red}`, opacity: 0.12, pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: 20, right: 280,
          width: 80, height: 80, borderRadius: "50%",
          background: C.red, opacity: 0.08, pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 600, position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.red }} />
            <span className="twogo-lbl" style={{ color: "rgba(255,251,240,0.3)" }}>Stay in the loop</span>
          </div>

          <h2 style={{
            fontFamily: "Fredoka", fontSize: "clamp(48px,7vw,80px)",
            fontWeight: 700, color: "#FFFBF0", lineHeight: 0.92,
            letterSpacing: "-2px", marginBottom: 24,
          }}>
            Be first to know<br />
            <span style={{ color: C.yellow }}>deals</span> and{" "}
            <span style={{ color: C.red }}>drops.</span>
          </h2>

          <p style={{ fontSize: 17, color: "rgba(255,251,240,0.35)", lineHeight: 1.75, marginBottom: 48, maxWidth: 400 }}>
            Promos, new menu items, weekend specials. Right to your phone and inbox. No spam.
          </p>

          {!submitted ? (
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
                <input
                  className="twogo-inp" type="email" placeholder="your@email.com"
                  value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                />
                <input
                  className="twogo-inp" type="tel" placeholder="080XXXXXXXX"
                  value={form.phone}
                  onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                />
              </div>
              <button className="twogo-btn-yellow" onClick={submit} style={{ width: "100%", fontSize: 20 }}>
                Make it 2Go 🔥
              </button>
              <p style={{ fontSize: 13, color: "rgba(255,251,240,0.2)", textAlign: "center", marginTop: 16 }}>
                No spam. Just good food news.
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{
                width: 64, height: 64, borderRadius: "50%", background: C.yellow,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 26, color: C.dark, fontWeight: 700,
              }}>✓</div>
              <div>
                <h3 style={{ fontFamily: "Fredoka", fontSize: 28, fontWeight: 700, color: "#FFFBF0", marginBottom: 6 }}>
                  You&rsquo;re in the <span style={{ color: C.yellow }}>2Go fam!</span>
                </h3>
                <p style={{ fontSize: 15, color: "rgba(255,251,240,0.4)" }}>Good food news is on the way.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ─── FOOTER ──────────────────────────────────────────────── */}
      <div data-section="footer" style={{ background: C.bgAlt, padding: "64px 48px 40px", borderTop: `3px solid ${C.red}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: C.red }} />
              <span style={{ fontFamily: "Fredoka", fontSize: 30, fontWeight: 700, color: C.dark, lineHeight: 1 }}>
                2go<span style={{ color: C.yellow }}>.</span>
              </span>
            </div>
            <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.9 }}>
              Striking Flavour.<br />Unforgettable Experience.
            </p>
          </div>

          {/* Visit */}
          <div>
            <span className="twogo-lbl" style={{ display: "block", marginBottom: 20 }}>Visit Us</span>
            <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.9 }}>
              2GO Building, beside SIMS Digital Center<br />
              Aminu Kano Crescent, Wuse<br />
              Abuja, Nigeria
            </p>
          </div>

          {/* Contact */}
          <div>
            <span className="twogo-lbl" style={{ display: "block", marginBottom: 20 }}>Contact</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="tel:09054005285" style={{ color: C.muted, textDecoration: "none", fontSize: 14 }}>0905 400 5285</a>
              <a href="tel:08163217875" style={{ color: C.muted, textDecoration: "none", fontSize: 14 }}>0816 321 7875</a>
              <a
                href="https://instagram.com/2gorestaurantabj"
                target="_blank" rel="noreferrer"
                style={{ color: C.red, textDecoration: "none", fontSize: 14, fontWeight: 600, marginTop: 4 }}
              >
                @2gorestaurantabj ↗
              </a>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: `1px solid ${C.border}`, paddingTop: 28,
          display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
        }}>
          <span style={{ fontSize: 12, color: C.muted }}>© 2025 2Go Restaurant. All rights reserved.</span>
          <span style={{ fontSize: 12, color: C.muted }}>Abuja, Nigeria</span>
        </div>
      </div>
    </div>
  );
}
