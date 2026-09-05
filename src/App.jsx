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

      const scrollableDistance = intro.offsetHeight - window.innerHeight;

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

          <div className="center-box">
            <p>KESAR NUTRITION</p>
          </div>

        </div>
      </section>

      <section className="content">
        <h1>Our Story</h1>

        <p>
          Nutrition built around quality, performance and trust.
        </p>
      </section>

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