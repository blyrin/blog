((() => {
  'use strict'
  const SECRET_KEY_SEQUENCE = 'hyw'
  const IMAGE_FOLDER = SECRET_KEY_SEQUENCE
  const DISPLAY_DURATION = 1000
  const IMAGE_LIST = [
    '喝亿味.webp',
    '禾易味.webp',
    '合一味.webp',
    '何以为.webp',
    '何异味.webp',
    '何易位.webp',
    '何益伟.webp',
    '何意味.webp',
    '何jbの.webp',
    '和伊未.webp',
    '和依未.webp',
    '和椅唯.webp',
    '和溢位.webp',
    '河一苇.webp',
    '河以为.webp',
    '河溢魏.webp',
    '核以威.webp',
    '核异位.webp',
    '核疫卫.webp',
    '核意味.webp',
    '荷移位1.webp',
    '荷移位2.webp',
    '盒已萎.webp',
    '颌易位.webp',
    '妈咪河移位.webp',
    '麻弥喝益喂.webp',
    '你想何出怎样的意味.webp',
  ]

  let keyBuffer = ''
  let resetTimer = null
  let preloadedImages = []

  const preloadImages = () => {
    IMAGE_LIST.forEach(filename => {
      const img = document.createElement('img')
      img.src = path_to_root + IMAGE_FOLDER + '/' + filename
      img.style.height = '50%'
      preloadedImages.push(img)
    })
  }

  const showRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * IMAGE_LIST.length)
    const img = preloadedImages[randomIndex]

    const overlay = document.createElement('div')
    overlay.style.position = 'fixed'
    overlay.style.inset = '0'
    overlay.style.zIndex = '9999'
    overlay.style.width = '100%'
    overlay.style.height = '100%'
    overlay.style.background = 'rgba(0 0 0 / 0.5)'
    overlay.style.display = 'flex'
    overlay.style.justifyContent = 'center'
    overlay.style.alignItems = 'center'

    overlay.appendChild(img)
    document.body.appendChild(overlay)

    setTimeout(() => {
      overlay.parentNode?.removeChild(overlay)
    }, DISPLAY_DURATION)
  }

  const handleKeyPress = event => {
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA' || event.target.isContentEditable) {
      return
    }
    const key = event.key.toLowerCase()
    if (!/^[a-z0-9]$/.test(key)) {
      return
    }
    keyBuffer += key
    if (keyBuffer.length > SECRET_KEY_SEQUENCE.length) {
      keyBuffer = keyBuffer.slice(-SECRET_KEY_SEQUENCE.length)
    }
    if (keyBuffer === SECRET_KEY_SEQUENCE) {
      showRandomImage()
      keyBuffer = ''
    }
    if (resetTimer) {
      clearTimeout(resetTimer)
    }
    resetTimer = setTimeout(() => {
      keyBuffer = ''
    }, 2000)
  }

  document.addEventListener('DOMContentLoaded', () => {
    preloadImages()
    document.addEventListener('keypress', handleKeyPress, { passive: true })
  })
})())
