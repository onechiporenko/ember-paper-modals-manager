import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {computed, get} from '@ember/object';

export default class ApplicationController extends Controller {

  @service()
  router;

  @computed('router.currentURL')
  get isDemo () {
    return get(this, 'router.currentURL').includes('/demo');
  }

}
