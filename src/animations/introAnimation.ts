import { gsap } from 'gsap';

export function initIntroAnimation() {
  const timeline = gsap.timeline();

  timeline
    .set('#crane', { opacity: 1, y: 0 })
    .set('#container', { opacity: 1, y: -40 })
    .set('#truck', { opacity: 1, x: 0 })
    .to('#container', { duration: 1.25, y: 20, ease: 'power2.out' })
    .to('#truck', { duration: 0.25, y: -4, ease: 'power1.out' }, '>-0.1')
    .to('#truck', { duration: 0.35, y: 0, ease: 'bounce.out' })
    .to('#crane', { duration: 0.8, y: -20, ease: 'power2.inOut' }, '>-0.1')
    .to('#truck', { duration: 1.5, x: 80, ease: 'power1.inOut' }, '>-0.3');

  return timeline;
}
