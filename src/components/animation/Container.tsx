import './Scene.css';

function Container() {
  return (
    <div id="container" className="scene-element container">
      <svg viewBox="0 0 260 100" aria-labelledby="containerTitle" role="img" xmlns="http://www.w3.org/2000/svg">
        <title id="containerTitle">Shipping container</title>
        <rect x="0" y="0" width="260" height="100" fill="#d8d9da" stroke="#2c2e31" strokeWidth="4" />
        <g stroke="#93969a" strokeWidth="4">
          <path d="M24 12v76" />
          <path d="M56 12v76" />
          <path d="M88 12v76" />
          <path d="M120 12v76" />
          <path d="M152 12v76" />
          <path d="M184 12v76" />
          <path d="M216 12v76" />
        </g>
      </svg>
    </div>
  );
}

export default Container;
