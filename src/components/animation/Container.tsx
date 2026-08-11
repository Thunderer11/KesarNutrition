import './Scene.css';

function Container() {
  return (
    <div id="container" className="scene-element container">
      <svg viewBox="0 0 240 120" aria-labelledby="containerTitle" role="img" xmlns="http://www.w3.org/2000/svg">
        <title id="containerTitle">Shipping container</title>
        <rect x="8" y="12" width="224" height="96" rx="18" fill="#893b2f" />
        <rect x="24" y="24" width="192" height="64" rx="12" fill="#a14a38" />
        <path d="M32 32h176" stroke="#d68b7b" strokeWidth="4" opacity="0.8" />
        <path d="M32 50h176" stroke="#d68b7b" strokeWidth="4" opacity="0.7" />
        <path d="M32 68h176" stroke="#d68b7b" strokeWidth="4" opacity="0.7" />
        <path d="M32 86h176" stroke="#d68b7b" strokeWidth="4" opacity="0.8" />
      </svg>
    </div>
  );
}

export default Container;
