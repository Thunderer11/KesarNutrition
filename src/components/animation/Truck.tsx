import './Scene.css';

function Truck() {
  return (
    <div id="truck" className="scene-element truck">
      <svg viewBox="0 0 560 220" aria-labelledby="truckTitle" role="img" xmlns="http://www.w3.org/2000/svg">
        <title id="truckTitle">Large industrial container truck</title>
        <g id="truck-body-group">
          <rect x="36" y="78" width="392" height="92" rx="24" fill="#dbe2f2" />
          <rect x="32" y="104" width="276" height="60" rx="18" fill="#184d9a" opacity="0.85" />
          <rect x="236" y="92" width="60" height="60" rx="14" fill="#f8fbff" />
          <rect x="316" y="98" width="132" height="46" rx="14" fill="#f2f5fb" />
          <path d="M112 110h72" stroke="#d6e2ff" strokeWidth="10" strokeLinecap="round" opacity="0.8" />
          <path d="M164 130h82" stroke="#c7d5f4" strokeWidth="8" strokeLinecap="round" opacity="0.75" />
          <path d="M310 116h92" stroke="#9ab1db" strokeWidth="8" strokeLinecap="round" opacity="0.9" />
        </g>

        <g id="truck-wheels" className="truck-wheels" fill="none" stroke="none">
          <circle cx="148" cy="190" r="30" fill="#1d2632" />
          <circle cx="432" cy="190" r="30" fill="#1d2632" />
          <circle cx="148" cy="190" r="14" fill="#6e7b94" />
          <circle cx="432" cy="190" r="14" fill="#6e7b94" />
        </g>
      </svg>
    </div>
  );
}

export default Truck;
