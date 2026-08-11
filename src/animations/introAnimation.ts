import { gsap } from 'gsap';

interface IntroAnimationOptions {
  onComplete?: () => void;
}

const introTiming = {
  initialPause: 0.45,
  containerLower: 1.35,
  impact: 0.65,
  craneRelease: 0.75,
  truckMove: 1.3,
  cameraShift: 1.05,
};

export function initIntroAnimation(options: IntroAnimationOptions = {}) {
  const timeline = gsap.timeline({ onComplete: options.onComplete });

  timeline
    .set('#crane', {
      opacity: 1,
      y: 0,
      rotation: 0,
      transformOrigin: '50% 20%',
    })
    .set('#container', {
      opacity: 1,
      y: -90,
      x: 0,
      rotation: 0,
      transformOrigin: '50% 10%',
    })
    .set('#truck', {
      opacity: 1,
      x: 0,
      y: 0,
      rotation: 0,
      transformOrigin: '50% 50%',
    })
    .set('#truck-wheels', {
      rotation: 0,
      transformOrigin: '50% 50%',
    })
    .set('#scene-content', {
      x: 0,
      y: 0,
      scale: 1,
      rotation: 0,
      transformOrigin: '50% 50%',
    })
    .addLabel('start', `+=${introTiming.initialPause}`)

    .addLabel('lower')
    .to(
      '#container',
      {
        duration: introTiming.containerLower,
        y: 40,
        ease: 'power2.inOut',
      },
      'lower',
    )
    .to(
      '#container',
      {
        duration: 0.5,
        x: 10,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: 1,
      },
      'lower+=0.18',
    )

    .addLabel('impact', `>-0.12`)
    .to(
      '#container',
      {
        duration: 0.16,
        y: 28,
        ease: 'power1.out',
      },
      'impact',
    )
    .to(
      '#truck',
      {
        duration: 0.12,
        y: 8,
        ease: 'power2.in',
      },
      'impact',
    )
    .to(
      '#truck',
      {
        duration: 0.42,
        y: -4,
        rotation: 1.5,
        ease: 'power2.out',
      },
      'impact+=0.12',
    )
    .to(
      '#container',
      {
        duration: 0.44,
        y: 36,
        rotation: 0.6,
        ease: 'elastic.out(1, 0.65)',
      },
      'impact+=0.12',
    )
    .to(
      '#truck',
      {
        duration: 0.48,
        y: 0,
        rotation: 0,
        ease: 'elastic.out(1, 0.6)',
      },
      'impact+=0.34',
    )

    .addLabel('release', `>+0.12`)
    .to(
      '#crane-hook',
      {
        duration: 0.55,
        y: -48,
        ease: 'power2.inOut',
      },
      'release',
    )
    .to(
      '#crane',
      {
        duration: introTiming.craneRelease,
        y: -28,
        ease: 'power2.out',
      },
      'release+=0.08',
    )

    .addLabel('truckMove', `>+0.2`)
    .to(
      '#truck-wheels',
      {
        duration: introTiming.truckMove,
        rotate: '+=190deg',
        ease: 'power2.inOut',
      },
      'truckMove',
    )
    .to(
      '#truck',
      {
        duration: introTiming.truckMove,
        x: '+=148',
        ease: 'power3.out',
      },
      'truckMove',
    )

    .addLabel('cameraShift', `>-0.18`)
    .to(
      '#truck',
      {
        duration: introTiming.cameraShift,
        x: '+=100',
        y: '-=22',
        rotation: 3,
        ease: 'power2.inOut',
      },
      'cameraShift',
    )
    .to(
      '#scene-content',
      {
        duration: introTiming.cameraShift,
        y: '-=22',
        scale: 1.02,
        ease: 'power2.inOut',
      },
      'cameraShift',
    )
    .to(
      '#road',
      {
        duration: introTiming.cameraShift,
        y: '-=8',
        ease: 'power2.inOut',
      },
      'cameraShift',
    )

    .addLabel('finalStop', `>+0.08`)
    .to(
      '#truck-wheels',
      {
        duration: 0.45,
        rotate: '+=28deg',
        ease: 'power1.out',
      },
      'finalStop',
    )
    .to(
      '#truck',
      {
        duration: 0.4,
        x: '+=18',
        ease: 'power3.out',
      },
      'finalStop',
    )
    .to(
      '#scene-content',
      {
        duration: 0.4,
        y: '-=4',
        ease: 'power3.out',
      },
      'finalStop',
    );

  return timeline;
}
