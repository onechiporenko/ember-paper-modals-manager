import {click} from '@ember/test-helpers';

export default async function () {
  return await click(`md-dialog-actions button:last-child`);
}
