import {get, setProperties} from '@ember/object';

export function initialize(appInstance) {
  const modalsManager = appInstance.lookup('service:modals-manager');
  setProperties(get(modalsManager, 'defaultOptions'), {
    clickOutsideToClose: false,
    escapeToClose: true,
    focusOnOpen: true,
    fullscreen: false,
    opaque: true,
    closeTo: '',
    openFrom: '',
    origin: '',
    parent: '',
  });
}

export default {
  name: 'paper-modals-manager',
  initialize
};
