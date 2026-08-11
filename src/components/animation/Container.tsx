import './Scene.css';

function Container() {
  return (
    <div id="container" className="scene-element container">
      <svg viewBox="0 0 260 100" aria-labelledby="containerTitle" role="img" xmlns="http://www.w3.org/2000/svg">
        <title id="containerTitle">Shipping container</title>
        <rect x="0" y="0" width="260" height="100" fill="#d8d9da" stroke="#2c2e31" strokeWidth="4" />
        <path d="M6 8h248" stroke="#2c2e31" strokeWidth="3" />
        <path d="M6 92h248" stroke="#2c2e31" strokeWidth="3" />
        <g stroke="#93969a" strokeWidth="3">
          <path d="M24 16v68" />
          <path d="M52 16v68" />
          <path d="M80 16v68" />
          <path d="M108 16v68" />
          <path d="M136 16v68" />
          <path d="M164 16v68" />
          <path d="M192 16v68" />
          <path d="M220 16v68" />
        </g>
        <g fill="#2c2e31">
          <path d="M10 8h34v84H10z" />
          <path d="M216 8h34v84h-34z" />
        </g>
      </svg>
    </div>
  );
}

export default Container;
