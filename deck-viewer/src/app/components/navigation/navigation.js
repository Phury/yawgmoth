
export const navigationComponent = {
  template: require('./navigation.html'),
  controllerAs: 'ctrl',
  controller: class NavigationCtrl {
    constructor() {
      console.log('navigation loaded');
      this.showMenu = false;
    }

    toggleMenu() {
      this.showMenu = !this.showMenu;
    }


    isShowMenu() {
      return this.showMenu;
    }
  }
};
