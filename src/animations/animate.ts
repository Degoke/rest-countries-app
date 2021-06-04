import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const animateHeader = (elem: Element | null): void => {
  gsap.from(elem, {
    xPercent: -20,
    opacity: 0,
    stagger: 2,
    duration: 2,
    scale: -1,
    ease: 'back',
  })
}

export const animateFromRight = (elem: Element | null): void => {
  gsap.from(elem, {
    xPercent: 120,
    opacity: 0,
    duration: 2,
    delay: 2,
    ease: 'bounce',
  })
}

export const animateFromRightOnScroll = (elem: Element | null): void => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.from(elem, {
    xPercent: 120,
    opacity: 0,
    duration: 2,
    delay: 1,
    ease: 'bounce',
    scrollTrigger: {
      trigger: elem!,
      scrub: true,
    },
  })
}

export const animateFromLeft = (elem: Element | null): void => {
  gsap.from(elem, {
    xPercent: -20,
    opacity: 0,
    duration: 2,
    delay: 2,
    ease: 'bounce',
  })
}
