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
          <div className="scroll-content">
            <div className="scroll-panel scroll-panel--one" id="content-1">
              <span className="scroll-panel__label">SECTION 01</span>
              <h2>Who We Are</h2>
              <p>Leading with clarity and precision, our team crafts premium logistics experiences for ambitious brands.</p>
            </div>
            <div className="scroll-panel scroll-panel--two" id="content-2">
              <span className="scroll-panel__label">SECTION 02</span>
              <h2>What We Do</h2>
              <p>We design seamless transport journeys that combine industrial scale with modern digital storytelling.</p>
            </div>
            <div className="scroll-panel scroll-panel--three" id="content-3">
              <span className="scroll-panel__label">SECTION 03</span>
              <h2>Why Choose Us</h2>
              <p>Our disciplined approach ensures every shipment, timeline, and detail is handled with premium care.</p>
            </div>
            <div className="scroll-panel scroll-panel--four" id="content-4">
              <span className="scroll-panel__label">SECTION 04</span>
              <h2>Our Reach</h2>
              <p>From portside logistics to elevated road corridors, our network extends across every major corridor.</p>
            </div>
            <div className="scroll-panel scroll-panel--five" id="content-5">
              <span className="scroll-panel__label">DESTINATION</span>
              <h2>Let's Move Forward</h2>
              <p>As the truck reaches the road's end, the path is ready. Request a quote or contact us to begin your premium transport journey.</p>
              <div className="scroll-panel__actions">
                <button className="scroll-button scroll-button--primary">Request a Quote</button>
                <button className="scroll-button">Contact Us</button>
              </div>
            </div>
          </div>
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
