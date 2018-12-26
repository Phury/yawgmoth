export const cvPage = {
  template: require('./cv.html'),
  controllerAs: 'ctrl',
  controller: class CvPageCtrl {
    constructor() {
      console.log('cv page loaded');
      this.showPersonalInformationModal = false;
    }



    isShowPersonalInformation() {
      return this.showPersonalInformationModal;
    }

    togglePersonalInformation() {
      this.showPersonalInformationModal = !this.showPersonalInformationModal;
    }
  }
};


