import {fillIn} from '@ember/test-helpers';

export default async function (val) {
  await fillIn('md-dialog-content input', val);
}
