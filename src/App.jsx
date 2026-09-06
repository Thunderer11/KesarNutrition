import { useEffect, useState } from "react";
import "./App.css";

const cards = [
  {
    id: 1,
    title: "Who We Are",
    description:
      "Kesar Nutrition is a nutrition manufacturing business focused on quality products.",
    className: "card-1",
  },
  {
    id: 2,
    title: "What We Do",
    description:
      "Nutrition manufacturing, supplements and gelatin capsules.",
    className: "card-2",
  },
  {
    id: 3,
    title: "Our Mission",
    description:
      "Building a strong manufacturing business through quality and reliable products.",
    className: "card-3",
  },
  {
    id: 4,
    title: "Our Impact",
    description:
      "Quality manufacturing and quality products are at the heart of what we do.",
    className: "card-4",
  },
  {
    id: 5,
    title: "Our Vision",
    description:
      "Expanding our reach and taking Kesar Nutrition into international markets.",
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
              const cardStart = (index + 1) / (cards.length + 1);
              const revealLength = 0.20;

              const cardProgress = Math.min(
                Math.max(
                  (progress - cardStart) / revealLength,
                  0
                ),
                1
              );
              const isCurrent =
                progress >= cardStart &&
                progress < cardStart + revealLength;
              const isComplete =
                progress >= cardStart + revealLength;
              const positions = [
                { x: 30, y: 35 },
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
            const cardStart = (index + 1) / (cards.length + 1);
            const revealLength = 0.18;

            const cardProgress = Math.min(
              Math.max(
                (progress - cardStart) / revealLength,
                0
              ),
              1
            );

            const isCurrent =
              progress >= cardStart &&
              progress < cardStart + revealLength;

            const isComplete =
              progress >= cardStart + revealLength;

            return (
              <div
                key={card.id}
                className={`story-card ${card.className} ${
                  isCurrent ? "current" : ""
                } ${isComplete ? "complete" : ""}`}
                style={{
                  "--card-progress": cardProgress,
                }}
              >
                <span>0{card.id}</span>

                <h2>{card.title}</h2>
                <p>{card.description}</p>
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
          Kesar Nutrition is focused on quality nutrition
          manufacturing and building products people can trust.
        </p>

        <div className="partners">
          <p>Business Partners</p>

          <span>Rajneesh Sharma</span>
          <span>Parveen Kumar</span>
          <span>Sajan Garg</span>
        </div>
      </section>

      {/* Contact */}

      <section className="contact">
        <p>GET IN TOUCH</p>

        <h1>Contact Us</h1>

        <a href="mailto:Kesarnutritionpkl@gmail.com">
          Kesarnutritionpkl@gmail.com
        </a>
      </section>

    </main>
  );
}

export default App;