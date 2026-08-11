import './Scene.css';

function Road() {
  return (
    <div id="road" className="scene-element road">
      <svg viewBox="0 0 1200 180" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="1200" height="180" fill="#4f5154" />
        <rect x="0" y="28" width="1200" height="16" fill="#424446" />
        <rect x="0" y="136" width="1200" height="16" fill="#424446" />
        <g stroke="#d8d8d8" strokeWidth="8" strokeLinecap="round">
          <path d="M120 90h40" />
          <path d="M260 90h40" />
          <path d="M400 90h40" />
          <path d="M540 90h40" />
          <path d="M680 90h40" />
          <path d="M820 90h40" />
          <path d="M960 90h40" />
          <path d="M1100 90h40" />
        </g>
      </svg>
    </div>
  );
}

export default Road;
