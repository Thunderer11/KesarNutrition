import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationOptions {
  trigger: HTMLElement;
  pinTarget: string | HTMLElement;
  endDistance?: number;
}

export function initScrollAnimation(options: ScrollAnimationOptions) {
  const scrollDistance = options.endDistance ?? 4200;

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: options.trigger,
      start: 'top top',
      end: `+=${scrollDistance}`,
      scrub: true,
      pin: options.pinTarget,
      pinSpacing: true,
      anticipatePin: 1,
    },
  });

  timeline
    .fromTo(
      '#truck',
      {
        x: 166,
        y: 0,
        rotation: 3,
      },
      {
        x: 760,
        y: 0,
        rotation: 2.25,
        ease: 'none',
      },
    )
    .fromTo(
      '#truck-wheels',
      {
        rotate: 218,
      },
      {
        rotate: 1020,
        ease: 'none',
      },
      0,
    )
    .fromTo(
      '#scene-content',
      {
        x: -44,
        y: -26,
        scale: 1.02,
      },
      {
        x: -84,
        y: -34,
        scale: 1.02,
        ease: 'none',
      },
      0,
    );

  return timeline;
}
