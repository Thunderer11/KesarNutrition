import './Scene.css';

function ContainerCrane() {
  return (
    <div id="crane" className="scene-element crane">
      <svg viewBox="0 0 420 420" aria-labelledby="craneTitle" role="img" xmlns="http://www.w3.org/2000/svg">
        <title id="craneTitle">Container crane</title>
        <g id="crane-frame">
          <rect x="40" y="220" width="340" height="24" fill="#3b3d40" />
          <rect x="60" y="250" width="34" height="90" rx="8" fill="#4b4d50" />
          <rect x="120" y="250" width="34" height="90" rx="8" fill="#4b4d50" />
          <rect x="280" y="250" width="34" height="90" rx="8" fill="#4b4d50" />
          <rect x="340" y="250" width="34" height="90" rx="8" fill="#4b4d50" />
          <path d="M64 236h300" stroke="#2a2c2f" strokeWidth="8" />
        </g>
        <g id="crane-tower">
          <rect x="184" y="32" width="36" height="200" fill="#5b5d60" stroke="#2a2c2f" strokeWidth="4" />
          <rect x="168" y="232" width="72" height="20" fill="#3b3d40" />
        </g>
        <g id="crane-arm">
          <path d="M202 54L360 140" stroke="#2a2c2f" strokeWidth="18" strokeLinecap="round" />
          <path d="M202 82L360 168" stroke="#2a2c2f" strokeWidth="10" strokeLinecap="round" />
        </g>
        <g id="crane-cabin">
          <rect x="102" y="98" width="70" height="52" rx="8" fill="#888b8f" />
          <rect x="112" y="108" width="26" height="30" fill="#2d3033" />
          <rect x="146" y="108" width="26" height="30" fill="#2d3033" />
          <path d="M112 108h50" stroke="#2a2c2f" strokeWidth="4" />
        </g>
        <g id="crane-spreader">
          <rect x="342" y="160" width="18" height="92" fill="#626568" />
          <rect x="318" y="250" width="82" height="18" fill="#3d4044" />
          <path d="M318 250h82" stroke="#2a2c2f" strokeWidth="4" />
          <path d="M328 260v24" stroke="#2a2c2f" strokeWidth="4" />
          <path d="M392 260v24" stroke="#2a2c2f" strokeWidth="4" />
          <path d="M318 274h82" stroke="#2a2c2f" strokeWidth="4" />
        </g>
        <g id="crane-hook">
          <rect x="348" y="250" width="8" height="140" fill="#2a2c2f" />
          <rect x="340" y="390" width="24" height="12" fill="#2a2c2f" />
        </g>
      </svg>
    </div>
  );
}

export default ContainerCrane;
