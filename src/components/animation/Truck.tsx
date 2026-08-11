import './Scene.css';

function Truck() {
  return (
    <div id="truck" className="scene-element truck">
      <svg viewBox="0 0 640 240" aria-labelledby="truckTitle" role="img" xmlns="http://www.w3.org/2000/svg">
        <title id="truckTitle">Side view container truck</title>
        <g id="truck-wheels" className="truck-wheels" fill="none" stroke="none">
          <circle cx="150" cy="196" r="26" fill="#1c1e20" />
          <circle cx="298" cy="196" r="26" fill="#1c1e20" />
          <circle cx="446" cy="196" r="26" fill="#1c1e20" />
          <circle cx="594" cy="196" r="26" fill="#1c1e20" />
          <circle cx="150" cy="196" r="10" fill="#d8d8d8" />
          <circle cx="298" cy="196" r="10" fill="#d8d8d8" />
          <circle cx="446" cy="196" r="10" fill="#d8d8d8" />
          <circle cx="594" cy="196" r="10" fill="#d8d8d8" />
        </g>

        <g id="truck-body-group">
          <path d="M38 134h150v70H38z" fill="#c2c4c6" stroke="#1c1e20" strokeWidth="4" />
          <path d="M38 134l42-58h92l38 58v70H38z" fill="#dadbdd" stroke="#1c1e20" strokeWidth="4" />
          <path d="M90 80h52v38H90z" fill="#33363a" />
          <path d="M146 80h32v38h-32z" fill="#33363a" />
          <path d="M220 134h338v70H220z" fill="#e5e6e7" stroke="#1c1e20" strokeWidth="4" />
          <path d="M220 134h338v18H220z" fill="#aaaaad" />
          <path d="M262 152h90" stroke="#b2b4b7" strokeWidth="8" />
          <path d="M370 152h88" stroke="#b2b4b7" strokeWidth="8" />
          <path d="M104 166h48" stroke="#1c1e20" strokeWidth="6" />
          <path d="M226 150h36" stroke="#1c1e20" strokeWidth="6" />
          <path d="M286 150h36" stroke="#1c1e20" strokeWidth="6" />
          <path d="M346 150h36" stroke="#1c1e20" strokeWidth="6" />
          <path d="M406 150h36" stroke="#1c1e20" strokeWidth="6" />
          <path d="M468 150h36" stroke="#1c1e20" strokeWidth="6" />
          <path d="M530 150h28" stroke="#1c1e20" strokeWidth="6" />
        </g>
      </svg>
    </div>
  );
}

export default Truck;
