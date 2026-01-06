"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleDownloadClick = (e) => {
    e.preventDefault();
    alert("Inserire link al CV PDF");
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .responsive-svg {
          width: 85px;
          height: 85px;
        }

        .responsive-svg-cta {
          width: 30px;
          height: 30px;
        }
        
        @media (max-width: 640px) {
          .responsive-svg {
            width: 70px !important;
            height: 70px !important;
          }
        }
      `,
        }}
      />

      <div className="hero section-bordered" id="home">
        <div className="cursor-follower" ref={cursorRef}></div>

        {/* Animated background elements */}
        <div className="hero-bg">
          <div className="hero-grid"></div>
          <div className="hero-gradient"></div>
        </div>

        <div className="hero-container">
          {/* Main Content */}
          <div className="hero-main">
            <div className="hero-eyebrow">
              <span className="eyebrow-badge">
                <span className="badge-dot"></span>
                DISPONIBILE PER NUOVE OPPORTUNITÀ
              </span>
            </div>

            <h1 className="hero-title">
              <span className="title-line">
                <span className="title-word" data-text="RAUNIG">
                  RAUNIG
                </span>
              </span>
              <span className="title-line">
                <span
                  className="title-word title-word-accent"
                  data-text="DOBRICA"
                >
                  DOBRICA
                </span>
              </span>
            </h1>

            <div className="hero-description">
              <p className="description-large">
                Preparatore Auto & Car Detailer
              </p>
              <p className="description-detail">
                Specializzato in lucidatura, ripristino carrozzeria e
                trattamenti estetici professionali di alta qualità
              </p>
            </div>

            <div className="hero-cta">
              <a href="#contact" className="cta-primary">
                <span className="cta-text">Contattami</span>
                <span className="cta-arrow">
                  <svg
                    className="responsive-svg-cta"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4 10H16M16 10L10 4M16 10L10 16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="#"
                className="cta-secondary"
                onClick={handleDownloadClick}
              >
                <span className="cta-icon">
                  <svg
                    className="responsive-svg-cta"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10 3V13M10 13L14 9M10 13L6 9M3 17H17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="cta-text">Scarica CV</span>
              </a>
            </div>
          </div>

          {/* Stats Sidebar */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">05+</div>
              <div className="stat-label">
                Anni di
                <br />
                Esperienza
              </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">26</div>
              <div className="stat-label">Anni</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg className="responsive-svg" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="9"
                    r="2.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="stat-label">Castelfranco Veneto, TV</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
