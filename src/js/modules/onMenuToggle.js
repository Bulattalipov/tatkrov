export default function () {
  let btnMenu = document.querySelector('.header__burger');
  let btnMenu2 = document.querySelector('.menu__burger');
  let menu = document.querySelector('.menu');

  btnMenu.addEventListener('click', function () {
    menu.classList.add('active');
  })

  btnMenu2.addEventListener('click', function () {
    menu.classList.remove('active');
  })


  const listMenuItem = menu.querySelectorAll('.nav__list-item-link');

  listMenuItem.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active');
    })
  })

}
