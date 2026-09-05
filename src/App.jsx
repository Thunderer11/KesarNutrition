import "./App.css";

function App() {
  return (
    <main className="page">

      <section className="intro">
        <div className="scene">

          <div className="story-card card-1">
            <span>01</span>
            <h2>Who We Are</h2>
          </div>

          <div className="story-card card-2">
            <span>02</span>
            <h2>What We Do</h2>
          </div>

          <div className="story-card card-3">
            <span>03</span>
            <h2>Our Mission</h2>
          </div>

          <div className="story-card card-4">
            <span>04</span>
            <h2>Our Impact</h2>
          </div>

          <div className="story-card card-5">
            <span>05</span>
            <h2>Our Vision</h2>
          </div>

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
        <p>Let's build something together.</p>
      </section>

    </main>
  );
}

export default App;