import {find} from '@ember/test-helpers';

export default async function (assert, msg) {
  const lastLogMsg = await find('.logs').innerHTML.split('<br>').slice(0, -1).pop().trim();
  assert.equal(lastLogMsg, msg);
}
