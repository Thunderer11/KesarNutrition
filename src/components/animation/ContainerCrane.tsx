import './Scene.css';

function ContainerCrane() {
  return (
    <div id="crane" className="scene-element crane">
      <svg viewBox="0 0 360 420" aria-labelledby="craneTitle" role="img" xmlns="http://www.w3.org/2000/svg">
        <title id="craneTitle">Container crane</title>
        <g id="crane-base">
          <rect x="56" y="278" width="42" height="76" rx="8" fill="#5e6063" />
          <rect x="262" y="278" width="42" height="76" rx="8" fill="#5e6063" />
          <path d="M42 278h276" stroke="#2a2c2f" strokeWidth="10" />
        </g>
        <g id="crane-tower">
          <rect x="162" y="48" width="36" height="220" fill="#7a7d80" stroke="#2a2c2f" strokeWidth="4" />
        </g>
        <g id="crane-arm">
          <path d="M180 72L312 148" stroke="#2a2c2f" strokeWidth="16" strokeLinecap="round" />
          <path d="M180 98L312 174" stroke="#2a2c2f" strokeWidth="10" strokeLinecap="round" />
        </g>
        <g id="crane-cabin">
          <rect x="84" y="110" width="64" height="50" rx="10" fill="#a6a8ab" stroke="#2a2c2f" strokeWidth="4" />
          <rect x="94" y="122" width="24" height="26" fill="#2a2c2f" />
          <rect x="126" y="122" width="24" height="26" fill="#2a2c2f" />
        </g>
        <g id="crane-hook">
          <rect x="304" y="166" width="10" height="132" fill="#2a2c2f" />
          <rect x="286" y="296" width="46" height="12" rx="4" fill="#2a2c2f" />
        </g>
      </svg>
    </div>
  );
}

export default ContainerCrane;
