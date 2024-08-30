import gsap from "gsap";
import SplitText from '../../assets/js/gsap-bonus/SplitText';
import {
  ScrollTrigger
} from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {

  const title = document.querySelector('.intro__title');
  const header = document.querySelector('.header');
  const introFooter = document.querySelector('.intro__footer');
  const titleServices = document.querySelector('.services__title');
  const titleBigServices = document.querySelector('.big-services__title');

  const titleMainShield = document.querySelector('.main-shield__title');

  const timeLine = gsap.timeline({
    paused: true,
    reversed: true
  })

  let splitTitle2 = new SplitText(titleServices, {
    type: 'lines, chars',
    linesClass: "line"
  })

  let splitTitle3 = new SplitText(titleBigServices, {
    type: 'lines, chars',
    linesClass: "line"
  })

  gsap.set(header, {
    yPercent: 18
  });
  gsap.set(introFooter, {
    yPercent: 100
  })
  gsap.set(splitTitle2.chars, {
    yPercent: 120
  });
  gsap.set(splitTitle3.chars, {
    yPercent: 120
  });

  timeLine
    .to(header, {
      yPercent: 0,
      opacity: 1,
      duration: 0.8
    })
    .to(introFooter, {
      yPercent: 0,
      opacity: 1,
      duration: 0.8
    })

  gsap.to(splitTitle2.chars, {
    yPercent: 0,
    opacity: 1,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".services__title",
      smooth: true,
      multiplier: 1.6
    }
  })

  gsap.to(splitTitle3.chars, {
    yPercent: 0,
    opacity: 1,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".big-services__title",
      smooth: true,
      multiplier: 1.6
    }
  })

  timeLine.play();
}
