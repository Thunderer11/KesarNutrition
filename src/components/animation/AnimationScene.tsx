import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { initIntroAnimation } from '../../animations/introAnimation';
import './AnimationScene.css';

function AnimationScene() {
  const sceneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sceneRef.current) return;
    const ctx = gsap.context(() => {
      initIntroAnimation();
    }, sceneRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-scene" ref={sceneRef}>
      <div className="hero-scene__viewport">
        <div className="scene__background" />
        <div className="scene__road" />
        <div className="scene__crane" id="crane">
          <div className="crane__tower" />
          <div className="crane__arm" />
          <div className="crane__hoist" />
        </div>
        <div className="scene__container" id="container" />
        <div className="scene__truck" id="truck">
          <div className="truck__cab" />
          <div className="truck__body" />
          <div className="truck__wheels">
            <div className="truck__wheel" />
            <div className="truck__wheel" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnimationScene;
