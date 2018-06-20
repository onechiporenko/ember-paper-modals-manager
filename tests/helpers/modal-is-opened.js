import {find} from '@ember/test-helpers';

export default async function (assert, expected) {
  if (expected) {
    const modals = await find('md-dialog');
    assert.ok(!!modals, 'modal is opened');
  }
  else {
    const modals = await find('md-dialog');
    assert.notOk(!!modals, 'modal is not opened');
  }
}