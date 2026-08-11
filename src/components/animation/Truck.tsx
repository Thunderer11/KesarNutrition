import './Scene.css';

function Truck() {
  return (
    <div id="truck" className="scene-element truck">
      <svg viewBox="0 0 640 260" aria-labelledby="truckTitle" role="img" xmlns="http://www.w3.org/2000/svg">
        <title id="truckTitle">Side view container truck</title>
        <g id="truck-wheels" className="truck-wheels" fill="none" stroke="none">
          <circle cx="168" cy="210" r="28" fill="#232526" />
          <circle cx="308" cy="210" r="28" fill="#232526" />
          <circle cx="458" cy="210" r="28" fill="#232526" />
          <circle cx="598" cy="210" r="28" fill="#232526" />
          <circle cx="168" cy="210" r="10" fill="#d8d8d8" />
          <circle cx="308" cy="210" r="10" fill="#d8d8d8" />
          <circle cx="458" cy="210" r="10" fill="#d8d8d8" />
          <circle cx="598" cy="210" r="10" fill="#d8d8d8" />
        </g>

        <g id="truck-body-group">
          <path d="M40 126h164v90H40z" fill="#bdbfc1" stroke="#2b2d30" strokeWidth="4" />
          <path d="M204 126h320v88H204z" fill="#d0d2d4" stroke="#2b2d30" strokeWidth="4" />
          <path d="M40 126l48-56h96l24 56v90H40z" fill="#d8d9da" stroke="#2b2d30" strokeWidth="4" />
          <path d="M88 80h36v40H88z" fill="#44484d" />
          <path d="M136 80h34v40h-34z" fill="#44484d" />
          <path d="M180 84h44v24h-44z" fill="#bbbbbd" />
          <path d="M172 80h60v8h-60z" fill="#2b2d30" />
          <path d="M62 120h202v14H62z" fill="#2b2d30" />
          <path d="M62 146h202v14H62z" fill="#9c9fa3" />
          <path d="M260 130h278v80H260z" fill="#d9dbdd" />
          <path d="M260 130h278v24H260z" fill="#c2c4c6" />
          <path d="M482 130h24v80h-24z" fill="#b0b2b4" />
          <path d="M264 144h44v12h-44z" fill="#999a9d" />
          <path d="M336 144h40v12h-40z" fill="#999a9d" />
          <path d="M408 144h40v12h-40z" fill="#999a9d" />
          <path d="M480 144h40v12h-40z" fill="#999a9d" />
          <path d="M554 144h18v12h-18z" fill="#999a9d" />
          <path d="M184 210h364v18H184z" fill="#2b2d30" />
          <path d="M96 206h110v8H96z" fill="#2b2d30" />
          <path d="M44 214h98v10H44z" fill="#8f9194" />
          <path d="M396 214h140v10H396z" fill="#8f9194" />
        </g>
      </svg>
    </div>
  );
}

export default Truck;
