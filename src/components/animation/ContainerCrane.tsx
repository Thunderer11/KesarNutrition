import './Scene.css';

function ContainerCrane() {
  return (
    <div id="crane" className="scene-element crane">
      <svg viewBox="0 0 360 420" aria-labelledby="craneTitle" role="img" xmlns="http://www.w3.org/2000/svg">
        <title id="craneTitle">Container crane</title>
        <g id="crane-wheels">
          <circle cx="80" cy="338" r="22" fill="#1a1c1f" />
          <circle cx="282" cy="338" r="22" fill="#1a1c1f" />
          <circle cx="80" cy="338" r="8" fill="#d8d8d8" />
          <circle cx="282" cy="338" r="8" fill="#d8d8d8" />
        </g>
        <g id="crane-body">
          <path d="M62 262h30v76h-30z" fill="#6b6e72" />
          <path d="M256 262h30v76h-30z" fill="#6b6e72" />
          <path d="M54 262h270v18H54z" fill="#2a2c2f" />
          <path d="M72 240h72v48H72z" fill="#a3a5a7" stroke="#1a1c1f" strokeWidth="4" />
          <path d="M80 250h22v28H80z" fill="#1a1c1f" />
          <path d="M110 250h22v28h-22z" fill="#1a1c1f" />
        </g>
        <g id="crane-tower">
          <path d="M168 48h24v210h-24z" fill="#7a7d80" stroke="#1a1c1f" strokeWidth="4" />
        </g>
        <g id="crane-arm">
          <path d="M180 72L312 150" stroke="#1a1c1f" strokeWidth="16" strokeLinecap="round" />
          <path d="M180 98L312 176" stroke="#1a1c1f" strokeWidth="10" strokeLinecap="round" />
        </g>
        <g id="crane-spreader">
          <path d="M304 164v122" stroke="#1a1c1f" strokeWidth="10" />
          <path d="M284 286h46v16h-46z" fill="#1a1c1f" />
        </g>
      </svg>
    </div>
  );
}

export default ContainerCrane;
