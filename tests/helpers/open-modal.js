import {click} from '@ember/test-helpers';

export default async function (type) {
  return await click(`button.${type}-modal`);
}