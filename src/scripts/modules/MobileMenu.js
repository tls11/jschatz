class MobileMenu {
  constructor() {
    this.burgerBox = document.querySelector('.main-nav__burger-box');
    this.menuContent = document.querySelector('.main-nav__menu-content');
    this.navLinks = document.querySelectorAll('.main-nav__menu-content a');
    this.events();
  }

  events() {
    this.burgerBox.addEventListener('click', this.toggleMenu.bind(this));

    this.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (this.burgerBox.classList.contains('main-nav__burger-box--xed')) {
          this.toggleMenu();
        }
      });
    });
  }

  toggleMenu() {
    this.burgerBox.classList.toggle('main-nav__burger-box--xed');
    this.menuContent.style.maxHeight = this.menuContent.style.maxHeight ? null : this.menuContent.scrollHeight + 20 + 'px';
  }
}

export default MobileMenu;
