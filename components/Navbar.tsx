"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Fredoka:wght@700&display=swap');

        .nav2go-link {
          font-family: 'Anton', sans-serif;
          font-size: 16px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #1A0A00;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.15s ease;
          line-height: 1;
        }
        .nav2go-link:hover { color: #C8390A; }

        .nav2go-order {
          background: #C8390A;
          color: #fff;
          border: 2.5px solid #1A0A00;
          border-radius: 9999px;
          padding: 13px 36px;
          font-family: 'Anton', sans-serif;
          font-size: 18px;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          line-height: 1;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .nav2go-order:hover { background: #1A0A00; color: #F5C200; }

        .nav2go-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 4px;
          background: none;
          border: none;
        }
        .nav2go-hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #1A0A00;
          border-radius: 2px;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .nav2go-mobile-menu {
          display: none;
          position: fixed;
          top: 64px;
          left: 0;
          right: 0;
          background: #FAF6EE;
          border-bottom: 2px solid #1A0A00;
          z-index: 998;
          padding: 24px;
          flex-direction: column;
          gap: 0;
        }
        .nav2go-mobile-menu.open { display: flex; }

        .nav2go-mobile-link {
          font-family: 'Anton', sans-serif;
          font-size: 22px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #1A0A00;
          text-decoration: none;
          padding: 16px 0;
          border-bottom: 1px solid #DDD5C5;
          display: block;
          cursor: pointer;
        }
        .nav2go-mobile-link:last-of-type { border-bottom: none; }
        .nav2go-mobile-link:hover { color: #C8390A; }

        .nav2go-mobile-cta {
          margin-top: 20px;
          background: #C8390A;
          color: #fff;
          border: 2.5px solid #1A0A00;
          border-radius: 9999px;
          padding: 14px 32px;
          font-family: 'Anton', sans-serif;
          font-size: 18px;
          text-transform: uppercase;
          cursor: pointer;
          text-align: center;
          display: block;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .nav2go-mobile-cta:hover { background: #1A0A00; color: #F5C200; }

        @media (max-width: 767px) {
          .nav2go-links    { display: none !important; }
          .nav2go-location { display: none !important; }
          .nav2go-order    { display: none !important; }
          .nav2go-hamburger { display: flex !important; }
          .nav2go-nav      { height: 64px !important; padding: 0 24px !important; }
          /* Switch to flex with space-between on mobile */
          nav.nav2go-nav   { display: flex !important; justify-content: space-between !important; align-items: center !important; }
        }
      `}</style>

      {/* Main nav bar */}
      <nav className="nav2go-nav" style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        height: 72,
        background: "#FAF6EE",
        borderBottom: "2px solid #1A0A00",
        padding: "0 48px",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        boxSizing: "border-box",
      }}>

        {/* LEFT — desktop nav links / mobile: empty (logo handled by grid center) */}
        <div className="nav2go-links" style={{ display: "flex", alignItems: "center", gap: 40 }}>
          <a href="#menu"    className="nav2go-link">Menu</a>
          <a href="#about"   className="nav2go-link">About Us</a>
          <a href="#contact" className="nav2go-link">Contact</a>
        </div>

        {/* CENTER — wordmark */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <span style={{
            fontFamily: "Fredoka",
            fontSize: 28,
            fontWeight: 700,
            color: "#1A0A00",
            lineHeight: 1,
            letterSpacing: "-0.5px",
            userSelect: "none",
          }}>
            2go<span style={{ color: "#F5C200" }}>.</span>
          </span>
        </div>

        {/* RIGHT — desktop: location + CTA | mobile: hamburger */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 32 }}>
          <div className="nav2go-location" style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                d="M5.5 0C2.462 0 0 2.462 0 5.5c0 3.85 5.5 8.5 5.5 8.5S11 9.35 11 5.5C11 2.462 8.538 0 5.5 0zm0 7.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                fill="#1A0A00"
              />
            </svg>
            <span style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 14,
              textTransform: "uppercase",
              letterSpacing: 1,
              color: "#1A0A00",
              lineHeight: 1,
            }}>
              Wuse II, Abuja
            </span>
          </div>

          <button className="nav2go-order">Order Now</button>

          {/* Hamburger — mobile only */}
          <button
            className="nav2go-hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span style={{ transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ opacity: open ? 0 : 1 }} />
            <span style={{ transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </div>

      </nav>

      {/* Mobile slide-down menu */}
      <div className={`nav2go-mobile-menu${open ? " open" : ""}`} role="navigation">
        <a href="#menu"    className="nav2go-mobile-link" onClick={() => setOpen(false)}>Menu</a>
        <a href="#about"   className="nav2go-mobile-link" onClick={() => setOpen(false)}>About Us</a>
        <a href="#contact" className="nav2go-mobile-link" onClick={() => setOpen(false)}>Contact</a>
        <a href="#"        className="nav2go-mobile-cta"  onClick={() => setOpen(false)}>Order Now</a>
      </div>
    </>
  );
}
