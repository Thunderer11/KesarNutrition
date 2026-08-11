import './Scene.css';

function ContainerCrane() {
  return (
    <div id="crane" className="scene-element crane">
      <svg viewBox="0 0 360 420" aria-labelledby="craneTitle" role="img" xmlns="http://www.w3.org/2000/svg">
        <title id="craneTitle">Industrial container crane</title>
        <rect x="156" y="40" width="20" height="260" rx="10" fill="#7d848d" />
        <rect x="82" y="40" width="196" height="24" rx="12" fill="#7d848d" />
        <rect x="72" y="28" width="224" height="16" rx="8" fill="#94979c" />
        <rect x="66" y="260" width="16" height="40" rx="8" fill="#6f757d" />
        <rect x="278" y="260" width="16" height="40" rx="8" fill="#6f757d" />
        <rect x="146" y="20" width="44" height="24" rx="12" fill="#5d6267" />
        <g id="crane-hook">
          <rect x="170" y="64" width="8" height="130" fill="#9ea3a9" />
          <rect x="148" y="186" width="52" height="14" rx="6" fill="#7a8088" />
          <path d="M152 200h44v20h-44z" fill="#62676e" />
        </g>
      </svg>
    </div>
  );
}

export default ContainerCrane;
