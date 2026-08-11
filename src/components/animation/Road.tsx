import './Scene.css';

function Road() {
  return (
    <div id="road" className="scene-element road">
      <svg viewBox="0 0 1200 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 40H1160" stroke="#545658" strokeWidth="6" strokeLinecap="round" />
        <path className="road-secondary" d="M40 54H1160" stroke="#545658" strokeWidth="6" strokeLinecap="round" opacity="0" />
      </svg>
    </div>
  );
}

export default Road;
