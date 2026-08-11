import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ContainerCrane from './ContainerCrane';
import Container from './Container';
import Road from './Road';
import Truck from './Truck';
import { initIntroAnimation } from '../../animations/introAnimation';
import { initScrollAnimation } from '../../animations/scrollAnimation';
import './Scene.css';

export type IntroState = 'IDLE' | 'RUNNING' | 'INTRO_COMPLETE';

function Scene() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [introState, setIntroState] = useState<IntroState>('IDLE');

  useEffect(() => {
    if (!viewportRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      setIntroState('RUNNING');
      const introTimeline = initIntroAnimation({
        onComplete: () => {
          setIntroState('INTRO_COMPLETE');
          initScrollAnimation({
            trigger: sectionRef.current as HTMLElement,
            pinTarget: sectionRef.current as HTMLElement,
            endDistance: 3800,
          });
        },
      });

      return () => {
        introTimeline.kill();
      };
    }, viewportRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="scene-section" ref={sectionRef}>
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
      <div className="scroll-spacer" />
    </section>
  );
}

export default Scene;
