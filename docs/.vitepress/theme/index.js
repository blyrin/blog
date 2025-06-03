import DefaultTheme from 'vitepress/theme-without-fonts'
import './custom.css'
export default DefaultTheme

import confetti from 'canvas-confetti'

if (!import.meta.env.SSR) {
  const scalar = 2
  const confettiOptions = {
    particleCount: 100,
    spread: 300,
    origin: { y: 0.6 },
    scalar,
    shapes: [confetti.shapeFromText({ text: '🍥', scalar })],
  }
  const showParticles = () => confetti(confettiOptions)
  window.addEventListener('load', () => {
    showParticles()
    document
      .querySelector('.VPHero.VPHomeHero.has-image .image-container img')
      ?.addEventListener('click', showParticles)
  })
}
