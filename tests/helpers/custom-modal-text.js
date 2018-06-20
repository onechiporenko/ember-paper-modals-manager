import {find} from '@ember/test-helpers';

export default function (assert, part, text) {
  const selector = {
    header: '.md-title',
    body: 'md-dialog-content',
    footer: 'md-dialog-actions'
  }[part];
  assert.ok(find(selector).innerText.includes(text), `${part} has "${text}"`);
}
