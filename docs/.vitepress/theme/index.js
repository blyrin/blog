import DefaultTheme from 'vitepress/theme-without-fonts'
import './custom.css'
export default DefaultTheme

import confetti from 'canvas-confetti'

if (!import.meta.env.SSR) {
  document.addEventListener('DOMContentLoaded', () => {
    const scalar = 2
    confetti({
      particleCount: 100,
      spread: 300,
      origin: { y: 0.6 },
      scalar,
      shapes: [confetti.shapeFromText({ text: '🍥', scalar })],
    })
  })
}
