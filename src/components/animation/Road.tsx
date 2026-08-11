import './Scene.css';

function Road() {
  return (
    <div id="road" className="scene-element road">
      <svg viewBox="0 0 1200 180" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="1200" height="180" fill="#141b28" />
        <path d="M0 36h1200" stroke="#1b2534" strokeWidth="32" />
        <path d="M120 90h960" stroke="#63738b" strokeWidth="12" />
        <g stroke="#bcc8d7" strokeWidth="8" strokeLinecap="round">
          <path d="M140 90h40" />
          <path d="M260 90h40" />
          <path d="M380 90h40" />
          <path d="M500 90h40" />
          <path d="M620 90h40" />
          <path d="M740 90h40" />
          <path d="M860 90h40" />
          <path d="M980 90h40" />
        </g>
      </svg>
    </div>
  );
}

export default Road;
