import {
  gsap
} from 'gsap'
import {
  ScrollToPlugin
} from 'gsap/dist/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin);

export default function smoothScroll() {
  const links = document.querySelectorAll('a')
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const hash = link.href.split('#')[1]

      if (hash && document.getElementById(hash)) {
        e.preventDefault()

        gsap.to(window, {
          duration: 0.7,
          ease: 'power2.out',
          scrollTo: {
            y: document.getElementById(hash),
            autoKill: false,
            offsetY: 0,
          },
        })
      }
    })
  })
}
