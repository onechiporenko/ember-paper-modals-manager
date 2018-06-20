import $ from 'jquery';

export default function (assert, state) {
  const btnSelector = 'md-dialog-actions button:last';
  state ?
    assert.ok($(btnSelector).is(':disabled')) :
    assert.ok($(btnSelector).is(':enabled'));
}
