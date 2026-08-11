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
    )
    .fromTo(
      '#content-1',
      {
        autoAlpha: 0,
        y: 40,
      },
      {
        autoAlpha: 1,
        y: 0,
        ease: 'power2.out',
      },
      0.05,
    )
    .to(
      '#content-1',
      {
        autoAlpha: 0,
        y: -40,
        ease: 'power2.in',
      },
      0.25,
    )
    .fromTo(
      '#content-2',
      {
        autoAlpha: 0,
        y: 40,
      },
      {
        autoAlpha: 1,
        y: 0,
        ease: 'power2.out',
      },
      0.28,
    )
    .to(
      '#content-2',
      {
        autoAlpha: 0,
        y: -40,
        ease: 'power2.in',
      },
      0.50,
    )
    .fromTo(
      '#content-3',
      {
        autoAlpha: 0,
        y: 40,
      },
      {
        autoAlpha: 1,
        y: 0,
        ease: 'power2.out',
      },
      0.52,
    )
    .to(
      '#content-3',
      {
        autoAlpha: 0,
        y: -40,
        ease: 'power2.in',
      },
      0.75,
    )
    .fromTo(
      '#content-4',
      {
        autoAlpha: 0,
        y: 40,
      },
      {
        autoAlpha: 1,
        y: 0,
        ease: 'power2.out',
      },
      0.77,
    )
    .to(
      '#content-4',
      {
        autoAlpha: 0,
        y: -40,
        ease: 'power2.in',
      },
      0.92,
    )
    .fromTo(
      '#content-5',
      {
        autoAlpha: 0,
        y: 40,
      },
      {
        autoAlpha: 1,
        y: 0,
        ease: 'power2.out',
      },
      0.94,
    );

  return timeline;
}
