((() => {
  'use strict'
  const SECRET_KEY_SEQUENCE = 'hyw'
  const IMAGE_FOLDER = SECRET_KEY_SEQUENCE
  const DISPLAY_DURATION = 1000
  const IMAGE_LIST = [
    '0538aa716f85d5fc1bb675de184df3d3344180449.webp',
    '091475ebe5aeb176fd615506a43da1c5687388994.webp',
    '0b1ad558d80d12d6b7f414c820ca22733546976209603286.webp',
    '23492a170f69ffc8422f61ccb5388eb6343546591.webp',
    '2f68c68840930ff6f3db00eb8074af7d1903951.webp',
    '334f011b2e9ac5b7e688681d64354a86518347173.webp',
    '4d7bea3eeceb2e1253c247fe2d1903b1399079134.webp',
    '4f24c30a9b3bd6f0b2fde704dabe4ee21076829075.webp',
    '4f61008a4ffaa91b6ddb67a8b812a62f28459821.webp',
    '66b80717bc1c736f5db3e52fb97e191e3546885488904954.webp',
    '66fefa1b0f76149662b3c495e62fecf61543331079.webp',
    '71130b2172224337dae132659f49c7c7515470683.webp',
    '7a1660324fd154b6afd71b9cc909cf8d95140780.webp',
    '899de9c972813197a9e81378b6c6f4761585009879.webp',
    '8a84e0d4749af757b8c29c2d812e23d11918189071.webp',
    '93fde0b2e57cdb2ed54e2a6f59e64b4b3546674915969195.webp',
    'a2984b519f3d4007de5b0682d0496b51646239469.webp',
    'a57589885c22d2117a25e675a5b22b73512396730.webp',
    'da84f3ded24fbe9d076405e40c7f20f71588193377.webp',
    'dd4a36ae02e6c3b09412e213d2eb9e803546674607688245.webp',
    'e236ba8eb9a52138b6aee6dcf84bb7441443018139.webp',
    'e6887cb1566768386a5a73a898be1389499180076.webp',
    'e966cea0e338926fe934dd21ab658b9e3493105743432519.webp',
    'e9f6f17b731964d973830524c28b78e82053949412.webp',
    'fc483fe1f928532b0a9609b09bda97cf1484507824.webp',
    'ff4bc3b45cc5fec0817467efbd498d70426176345.webp',
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
