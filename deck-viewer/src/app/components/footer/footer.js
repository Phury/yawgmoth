
export const footerComponent = {
  template: require('./footer.html'),
  require: {
    parentCtrl: '^^app'
  },
  controllerAs: 'ctrl',
  controller: class FooterCtrl {
    constructor() {
      console.log('footer loaded');

      this.$onInit = function () {
        this.url = this.parentCtrl.url;
      };

    }
  }
};
