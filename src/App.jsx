import { useEffect, useState } from "react";
import "./App.css";

const cards = [
  {
    id: 1,
    title: "Who We Are",
    className: "card-1",
  },
  {
    id: 2,
    title: "What We Do",
    className: "card-2",
  },
  {
    id: 3,
    title: "Our Mission",
    className: "card-3",
  },
  {
    id: 4,
    title: "Our Impact",
    className: "card-4",
  },
  {
    id: 5,
    title: "Our Vision",
    className: "card-5",
  },
];

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const intro = document.querySelector(".intro");

      if (!intro) return;

      const rect = intro.getBoundingClientRect();

      const scrollableDistance =
        intro.offsetHeight - window.innerHeight;

      const scrolled = Math.min(
        Math.max(-rect.top, 0),
        scrollableDistance
      );

      const currentProgress =
        scrollableDistance > 0
          ? scrolled / scrollableDistance
          : 0;

      setProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="page">

      <section className="intro">
        <div className="scene">

          {/* Connection lines */}

          <svg
            className="connection-network"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {cards.map((card, index) => {
              const cardStart = index / cards.length;
              const revealLength = 0.18;

              const cardProgress = Math.min(
                Math.max(
                  (progress - cardStart) / revealLength,
                  0
                ),
                1
              );

              const positions = [
                // Keep each endpoint just inside the corresponding card edge.
                { x: 34, y: 35 },
                { x: 80, y: 36 },
                { x: 30, y: 64 },
                { x: 78, y: 64 },
                { x: 50, y: 26 },
              ];

              const position = positions[index];

              return (
                <line
                  key={card.id}
                  className="connection-line"
                  x1="50"
                  y1="50"
                  x2={position.x}
                  y2={position.y}
                  style={{
                    opacity:
                      0.05 + cardProgress * 0.5,
                    strokeDashoffset:
                      100 - cardProgress * 100,
                  }}
                />
              );
            })}
          </svg>

          {/* Story cards */}

          {cards.map((card, index) => {
            const cardStart = index / cards.length;
            const revealLength = 0.18;

            const cardProgress = Math.min(
              Math.max(
                (progress - cardStart) / revealLength,
                0
              ),
              1
            );

            return (
              <div
                key={card.id}
                className={`story-card ${card.className}`}
                style={{
                  "--card-progress": cardProgress,
                }}
              >
                <span>0{card.id}</span>

                <h2>{card.title}</h2>
              </div>
            );
          })}

          {/* Center box */}

          <div
            className="center-box"
            style={{
              "--scene-progress": progress,
            }}
          >
            <p>KESAR NUTRITION</p>
          </div>

        </div>
      </section>

      {/* Normal website */}

      <section className="content">
        <h1>Our Story</h1>

        <p>
          Nutrition built around quality,
          performance and trust.
        </p>
      </section>

      {/* Contact */}

      <section className="contact">
        <h1>Contact Us</h1>

        <p>
          Let's build something together.
        </p>
      </section>

    </main>
  );
}

export default App;