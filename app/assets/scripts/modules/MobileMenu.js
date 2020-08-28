class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector('.site-header__menu-icon');
    this.menuContent = document.querySelector('.site-header__menu-content');
    this.site__header = document.querySelector('.site-header');
   
    this.events();
  };

  events() {
    this.menuIcon.addEventListener('click', () => {
      this.menuContent.classList.toggle('site-header__menu-content--is-visible')
      this.site__header.classList.toggle('site-header--is-expanded')
      this.menuIcon.classList.toggle('site-header__menu-icon--close-x')
    })
  }
}
