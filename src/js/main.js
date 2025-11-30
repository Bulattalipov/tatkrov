// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';
import onMenuToggle from './modules/onMenuToggle';
import phoneMask from './helpers/phoneMask';
import imgGallery from './modules/imgGallery';
import smoothScroll from './helpers/smoothScroll';
import simpleSlider from './modules/simple-slider';
import loadingPage from './modules/loadingPage';
import cookie from './modules/cookie';

documenReady(() => {
  window.___YOUR_PROJECT___API = {};

  lazyIMages();
  initModal();
  onMenuToggle();
  phoneMask();
  imgGallery();
  smoothScroll();
  // loadingPage();
  simpleSlider();
  cookie();
});

$(function () {

  //E-mail Ajax Send
  $("form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "../../send.php", //Change
      data: th.serialize()
    }).done(function () {
      alert("Cпасибо! Мы свяжемся с Вами как можно скорее");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});
