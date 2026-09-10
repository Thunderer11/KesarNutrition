import { useEffect, useState, useRef } from "react";
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

/* ================================
   CONNECTION LINE END POINTS
   We will adjust these later
================================ */

const positions = [
  { x: 30, y: 35 },
  { x: 80, y: 36 },
  { x: 30, y: 64 },
  { x: 78, y: 64 },
  { x: 50, y: 26 },
];

function App() {
  const [progress, setProgress] = useState(0);
  const sceneRef = useRef(null);
  const centerRef = useRef(null);
  const cardRefs = useRef([]);
  const [linePositions, setLinePositions] = useState([]);

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

  const updateLinePositions = () => {
    if (
      !sceneRef.current ||
      !centerRef.current
    ) {
      return;
    }

    const sceneRect =
      sceneRef.current.getBoundingClientRect();

    const centerRect =
      centerRef.current.getBoundingClientRect();

    const centerX =
      centerRect.left +
      centerRect.width / 2 -
      sceneRect.left;

    const centerY =
      centerRect.top +
      centerRect.height / 2 -
      sceneRect.top;

    const newPositions =
      cardRefs.current.map((card) => {
        if (!card) return null;

        const cardRect =
          card.getBoundingClientRect();

        const cardX =
          cardRect.left +
          cardRect.width / 2 -
          sceneRect.left;

        const cardY =
          cardRect.top +
          cardRect.height / 2 -
          sceneRect.top;

        const deltaX = cardX - centerX;
        const deltaY = cardY - centerY;

        const halfCenterWidth =
          centerRect.width / 2;

        const halfCenterHeight =
          centerRect.height / 2;

        const halfCardWidth =
          cardRect.width / 2;

        const halfCardHeight =
          cardRect.height / 2;

        const centerScaleX =
          Math.abs(deltaX) / halfCenterWidth;

        const centerScaleY =
          Math.abs(deltaY) / halfCenterHeight;

        const centerScale =
          Math.max(
            centerScaleX,
            centerScaleY
          );

        const startX =
          centerX +
          deltaX / centerScale;

        const startY =
          centerY +
          deltaY / centerScale;

        const cardScaleX =
          Math.abs(deltaX) / halfCardWidth;

        const cardScaleY =
          Math.abs(deltaY) / halfCardHeight;

        const cardScale =
          Math.max(
            cardScaleX,
            cardScaleY
          );

        const endX =
          cardX -
          deltaX / cardScale;

        const endY =
          cardY -
          deltaY / cardScale;

        return {
          x1:
            (startX / sceneRect.width) * 100,

          y1:
            (startY / sceneRect.height) * 100,

          x2:
            (endX / sceneRect.width) * 100,

          y2:
            (endY / sceneRect.height) * 100,
        };
      });

    setLinePositions(newPositions);
  };

  window.addEventListener(
    "scroll",
    handleScroll
  );

  window.addEventListener(
    "resize",
    updateLinePositions
  );

  handleScroll();

  requestAnimationFrame(
    updateLinePositions
  );

  return () => {
    window.removeEventListener(
      "scroll",
      handleScroll
    );

    window.removeEventListener(
      "resize",
      updateLinePositions
    );
  };
}, []);

  return (
    <main className="page">

      {/* ================================
          INTRO / STORY NETWORK
      ================================= */}

      <section className="intro">
        <div 
          className="scene"
          ref={sceneRef}
          >

          {/* Connection lines */}

          <svg
            className="connection-network"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {cards.map((card, index) => {
              const cardStart =
                (index + 1) / (cards.length + 1);

              const revealLength = 0.20;

                const cardProgress = Math.min(
                  Math.max(
                    (progress - cardStart) /
                      revealLength,
                    0
                  ),
                  1
                );

                const position =
                  linePositions[index];

                if (!position) return null;

                return (
                  <line
                    key={card.id}
                    className="connection-line"
                    x1={position.x1}
                    y1={position.y1}
                    x2={position.x2}
                    y2={position.y2}
                    style={{
                      opacity:
                        0.05 +
                        cardProgress * 0.5,

                      strokeDashoffset:
                        100 -
                        cardProgress * 100,
                    }}
                  />
                );
            })}
          </svg>

          {/* Story cards */}

          {cards.map((card, index) => {
            const cardStart =
              (index + 1) / (cards.length + 1);

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
                ref={(element) => {
                cardRefs.current[index] = element;
                }}
                style={{
                  "--card-progress": cardProgress,
                }}
              >
                <span>0{card.id}</span>

                <h2>{card.title}</h2>

                <p className="card-description">
                  {card.description}
                </p>
              </div>
            );
          })}

          {/* Center box */}

          <div
            className="center-box"
            ref={centerRef}
            style={{
              "--scene-progress": progress,
            }}
          >
            <p>KESAR NUTRITION</p>
          </div>

        </div>
      </section>

      {/* ================================
          OUR STORY
      ================================= */}

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

      {/* ================================
          CONTACT
      ================================= */}

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