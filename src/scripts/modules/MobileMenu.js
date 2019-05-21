class MobileMenu {
  constructor() {
    this.burgerOpen = false;
    this.burgerBox = document.querySelector('.main-nav__burger-box');
    this.menuContent = document.querySelector('.main-nav__menu-content');
    this.events();
  }

  events() {
    this.burgerBox.addEventListener('click', this.toggleMenu.bind(this));
    window.addEventListener('click', this.toggleMenu.bind(this));
  }

  toggleMenu(e) {
    e.stopPropagation();
    if (e.currentTarget === window && !this.burgerOpen) return;
    this.burgerOpen = !this.burgerOpen;
    this.burgerBox.classList.toggle('main-nav__burger-box--transform');
    this.menuContent.classList.toggle('opened');
  }
}

export default MobileMenu;
