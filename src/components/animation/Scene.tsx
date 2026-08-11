import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ContainerCrane from './ContainerCrane';
import Container from './Container';
import Road from './Road';
import Truck from './Truck';
import { initIntroAnimation } from '../../animations/introAnimation';
import './Scene.css';

export type IntroState = 'IDLE' | 'RUNNING' | 'INTRO_COMPLETE';

function Scene() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [introState, setIntroState] = useState<IntroState>('IDLE');

  useEffect(() => {
    if (!viewportRef.current) return;

    const ctx = gsap.context(() => {
      setIntroState('RUNNING');
      initIntroAnimation({
        onComplete: () => {
          setIntroState('INTRO_COMPLETE');
        },
      });
    }, viewportRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="scene-stage">
      <div className="scene-viewport" ref={viewportRef} data-intro-state={introState}>
        <div id="scene-content" className="scene-content">
          <ContainerCrane />
          <Container />
          <Truck />
          <Road />
        </div>
      </div>
    </div>
  );
}

export default Scene;
