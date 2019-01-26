import {get, setProperties} from '@ember/object';

export function initialize(appInstance) {
  const modalsManager = appInstance.lookup('service:modals-manager');
  setProperties(get(modalsManager, 'defaultOptions'), {
    clickOutsideToClose: false,
    escapeToClose: false,
    focusOnOpen: true,
    fullscreen: false,
    opaque: true,
    closeTo: document.body,
    openFrom: '',
    origin: document.body,
    parent: '',
    circularDiameter: 25,
    circularStrokeRatio: 0.1,
    circularClass: '',
    circularAccent: false,
    circularWarn: false,
    linearAccent: false,
    linearWarn: false,
    confirmButtonPrimary: true,
    confirmButtonFab: false,
    confirmButtonMini: false,
    confirmButtonNoInk: false,
    confirmButtonRaised: false,
    confirmButtonIcon: '',
    declineButtonPrimary: true,
    declineButtonFab: false,
    declineButtonMini: false,
    declineButtonNoInk: false,
    declineButtonRaised: false,
    declineButtonIcon: '',
  });
}

export default {
  name: 'paper-modals-manager',
  initialize
};
