import './Scene.css';

function Truck() {
  return (
    <div id="truck" className="scene-element truck">
      <svg viewBox="0 0 640 240" aria-labelledby="truckTitle" role="img" xmlns="http://www.w3.org/2000/svg">
        <title id="truckTitle">Side view container truck</title>
        <g id="truck-wheels" className="truck-wheels" fill="none" stroke="none">
          <circle cx="138" cy="200" r="28" fill="#1a1c1f" />
          <circle cx="288" cy="200" r="28" fill="#1a1c1f" />
          <circle cx="438" cy="200" r="28" fill="#1a1c1f" />
          <circle cx="588" cy="200" r="28" fill="#1a1c1f" />
          <circle cx="138" cy="200" r="10" fill="#d8d8d8" />
          <circle cx="288" cy="200" r="10" fill="#d8d8d8" />
          <circle cx="438" cy="200" r="10" fill="#d8d8d8" />
          <circle cx="588" cy="200" r="10" fill="#d8d8d8" />
        </g>

        <g id="truck-body-group">
          <path d="M42 138h148v64H42z" fill="#c8cacd" stroke="#1a1c1f" strokeWidth="4" />
          <path d="M42 138l42-68h88l34 68v64H42z" fill="#dadbdd" stroke="#1a1c1f" strokeWidth="4" />
          <path d="M88 72h42v38H88z" fill="#33363a" />
          <path d="M132 72h30v38h-30z" fill="#33363a" />
          <path d="M164 80h18v18h-18z" fill="#b0b2b5" />
          <path d="M42 136h20" stroke="#1a1c1f" strokeWidth="4" />
          <path d="M42 156h20" stroke="#b0b2b5" strokeWidth="4" />
          <path d="M54 124l-12 12" stroke="#1a1c1f" strokeWidth="4" />
          <path d="M68 120h18v10H68z" fill="#1a1c1f" />
          <path d="M202 138h338v64H202z" fill="#e3e4e6" stroke="#1a1c1f" strokeWidth="4" />
          <path d="M202 138h338v16H202z" fill="#a9abaf" />
          <path d="M246 152h70" stroke="#b5b7ba" strokeWidth="8" />
          <path d="M336 152h70" stroke="#b5b7ba" strokeWidth="8" />
          <path d="M426 152h70" stroke="#b5b7ba" strokeWidth="8" />
          <path d="M516 152h24" stroke="#b5b7ba" strokeWidth="8" />
          <path d="M210 188h320" stroke="#1a1c1f" strokeWidth="8" />
          <path d="M84 186h112" stroke="#1a1c1f" strokeWidth="8" />
          <path d="M60 202h98" stroke="#727678" strokeWidth="8" />
        </g>
        <g id="truck-container" opacity="0">
          <rect x="210" y="38" width="260" height="100" fill="#d8d9da" stroke="#2c2e31" strokeWidth="4" />
          <g stroke="#93969a" strokeWidth="4">
            <path d="M234 50v76" />
            <path d="M266 50v76" />
            <path d="M298 50v76" />
            <path d="M330 50v76" />
            <path d="M362 50v76" />
            <path d="M394 50v76" />
            <path d="M426 50v76" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Truck;
