"use client";

export default function Navbar() {
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
      `}</style>

      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 99,
        width: "100%",
        height: 72,
        background: "#FAF6EE",
        borderBottom: "1px solid #DDD5C5",
        padding: "0 48px",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        boxSizing: "border-box",
      }}>

        {/* LEFT — nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
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

        {/* RIGHT — location + CTA */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
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
        </div>

      </nav>
    </>
  );
}
