import {module, test} from 'qunit';
import {visit, click, find} from '@ember/test-helpers';
import {setupApplicationTest} from 'ember-qunit';

import {
  getConfirmButtonState,
  getConfirmModal,
  getDeclineModal,
  getCustomModalText,
  lastLogMessageAssert,
  getModalIsOpened,
  openModal,
  getPromptValue
} from 'ember-modals-manager-internal/test-support';

const confirmButtonState = getConfirmButtonState('md-dialog-actions button:last-child');
const confirmModal = getConfirmModal('md-dialog-actions button:last-child');
const declineModal = getDeclineModal('md-dialog-actions button');
const customModalText = getCustomModalText({
  header: '.md-title',
  body: 'md-dialog-content',
  footer: 'md-dialog-actions'
});
const modalIsOpened = getModalIsOpened('md-dialog-content');
const promptValue = getPromptValue('md-dialog-content input');

module('Acceptance | modals', function (hooks) {

  setupApplicationTest(hooks);

  test('alert-modal', async function (assert) {
    await visit('/');
    await openModal('alert');
    await modalIsOpened(assert, true);
    customModalText(assert, 'header', 'Custom Alert Modal Title');
    customModalText(assert, 'body', 'Custom Alert Modal Body');
    await confirmModal();
    await modalIsOpened(assert, false);
    await lastLogMessageAssert(assert, 'Alert was confirmed');
  });

  test('Custom alert-modal', async function (assert) {
    await visit('/');
    await openModal('custom-alert');
    await modalIsOpened(assert, true);
    customModalText(assert, 'header', 'Custom Alert Title Component');
    customModalText(assert, 'body', 'Custom Alert Body Component');
    customModalText(assert, 'footer', 'Custom Alert Footer Component');
    await confirmModal();
    await modalIsOpened(assert, false);
    await lastLogMessageAssert(assert, 'Custom Alert was confirmed');
  });

  test('confirm-modal', async function (assert) {
    await visit('/');
    await openModal('confirm');
    await modalIsOpened(assert, true);
    customModalText(assert, 'header', 'Custom Confirm Modal Title');
    customModalText(assert, 'body', 'Custom Confirm Modal Body');
    await confirmModal();
    await modalIsOpened(assert, false);
    await lastLogMessageAssert(assert, 'Confirm was confirmed');

    await openModal('confirm');
    await modalIsOpened(assert, true);
    await declineModal();
    await modalIsOpened(assert, false);
    await lastLogMessageAssert(assert, 'Confirm was declined');
  });

  test('Custom confirm-modal', async function (assert) {
    await visit('/');
    await openModal('custom-confirm');
    await modalIsOpened(assert, true);
    customModalText(assert, 'header', 'Custom Confirm Title Component');
    customModalText(assert, 'body', 'Custom Confirm Body Component');
    customModalText(assert, 'footer', 'Custom Confirm Footer Component');
    await confirmModal();
    await modalIsOpened(assert, false);
    await lastLogMessageAssert(assert, 'Custom Confirm was confirmed');

    await openModal('custom-confirm');
    await modalIsOpened(assert, true);
    await declineModal();
    await modalIsOpened(assert, false);
    await lastLogMessageAssert(assert, 'Custom Confirm was declined');
  });

  test('prompt-modal', async function (assert) {
    await visit('/');
    await openModal('prompt');
    await modalIsOpened(assert, true);
    customModalText(assert, 'header', 'Custom Prompt Modal Title');
    customModalText(assert, 'body', 'Custom Prompt Modal Body');
    customModalText(assert, 'body', 'Input Label');
    await promptValue('test');
    await confirmModal();
    await modalIsOpened(assert, false);
    await lastLogMessageAssert(assert, 'Prompt was confirmed (with "test")');

    await openModal('prompt');
    await modalIsOpened(assert, true);
    await declineModal();
    await modalIsOpened(assert, false);
    await lastLogMessageAssert(assert, 'Prompt was declined');
  });

  test('prompt-modal with disabled Confirm button', async function (assert) {
    await visit('/');
    await click('.disallow-empty');
    await openModal('prompt');
    await modalIsOpened(assert, true);
    customModalText(assert, 'header', 'Custom Prompt Modal Title');
    confirmButtonState(assert, true);
    await promptValue('test');
    confirmButtonState(assert, false);
    await confirmModal();
    await modalIsOpened(assert, false);
  });

  test('Custom prompt-modal', async function (assert) {
    await visit('/');
    await openModal('custom-prompt');
    await modalIsOpened(assert, true);
    customModalText(assert, 'header', 'Custom Prompt Title Component');
    customModalText(assert, 'body', 'Custom Prompt Body Component');
    customModalText(assert, 'footer', 'Custom Prompt Footer Component');
    await promptValue('test');
    await confirmModal();
    await modalIsOpened(assert, false);
    await lastLogMessageAssert(assert, 'Custom Prompt was confirmed (with "test")');

    await openModal('custom-prompt');
    await modalIsOpened(assert, true);
    await declineModal();
    await modalIsOpened(assert, false);
    await lastLogMessageAssert(assert, 'Custom Prompt was declined');
  });

  test('Custom prompt-modal with disabled Confirm button', async function (assert) {
    await visit('/');
    await click('.disallow-empty');
    await openModal('custom-prompt');
    customModalText(assert, 'header', 'Custom Prompt Title Component');
    await modalIsOpened(assert, true);
    confirmButtonState(assert, true);
    await promptValue('test');
    confirmButtonState(assert, false);
    await confirmModal();
    await modalIsOpened(assert, false);
  });

  test('prompt-confirm-modal', async function (assert) {
    await visit('/');
    await openModal('prompt-confirm');
    await modalIsOpened(assert, true);
    confirmButtonState(assert, true);
    customModalText(assert, 'header', 'Custom Prompt Confirm Modal Title');
    customModalText(assert, 'body', 'Please enter a "modal" without quotes');
    customModalText(assert, 'body', 'Input Label');
    await promptValue('modal');
    confirmButtonState(assert, false);
    await confirmModal();
    await modalIsOpened(assert, false);
    await lastLogMessageAssert(assert, 'Prompt-Confirm was confirmed (with "modal")');

    await openModal('prompt-confirm');
    await modalIsOpened(assert, true);
    confirmButtonState(assert, true);
    await declineModal();
    await modalIsOpened(assert, false);
    await lastLogMessageAssert(assert, 'Prompt-Confirm was declined');
  });

  test('Custom prompt-confirm-modal', async function (assert) {
    await visit('/');
    await openModal('custom-prompt-confirm');
    await modalIsOpened(assert, true);
    confirmButtonState(assert, true);
    customModalText(assert, 'header', 'Custom Prompt Confirm Title Component');
    customModalText(assert, 'body', 'Custom Prompt Confirm Body Component');
    customModalText(assert, 'body', 'Please enter a "modal" without quotes');
    customModalText(assert, 'footer', 'Custom Prompt Confirm Footer Component');
    await promptValue('modal');
    confirmButtonState(assert, false);
    await confirmModal();
    await modalIsOpened(assert, false);
    await lastLogMessageAssert(assert, 'Custom Prompt-Confirm was confirmed (with "modal")');

    await openModal('custom-prompt-confirm');
    await modalIsOpened(assert, true);
    confirmButtonState(assert, true);
    await declineModal();
    await modalIsOpened(assert, false);
    await lastLogMessageAssert(assert, 'Custom Prompt-Confirm was declined');
  });

  test('check-confirm-modal', async function (assert) {
    await visit('/');
    await openModal('check-confirm');
    await modalIsOpened(assert, true);
    confirmButtonState(assert, true);
    customModalText(assert, 'header', 'Custom Check Confirm Modal Title');
    customModalText(assert, 'body', 'Confirm your suggestion');
    customModalText(assert, 'body', 'Input Label');
    await click('md-dialog-content md-checkbox');
    confirmButtonState(assert, false);
    await confirmModal();
    await modalIsOpened(assert, false);
    await lastLogMessageAssert(assert, 'Check-Confirm was confirmed');

    await openModal('check-confirm');
    await modalIsOpened(assert, true);
    confirmButtonState(assert, true);
    await declineModal();
    await modalIsOpened(assert, false);
    await lastLogMessageAssert(assert, 'Check-Confirm was declined');
  });

  test('Custom check-confirm-modal', async function (assert) {
    await visit('/');
    await openModal('custom-check-confirm');
    await modalIsOpened(assert, true);
    confirmButtonState(assert, true);
    customModalText(assert, 'header', 'Custom Check Confirm Title Component');
    customModalText(assert, 'body', 'Custom Check Confirm Body Component');
    customModalText(assert, 'footer', 'Custom Check Confirm Footer Component');
    await click('md-dialog-content md-checkbox');
    confirmButtonState(assert, false);
    await confirmModal();
    await modalIsOpened(assert, false);
    await lastLogMessageAssert(assert, 'Custom Check-Confirm was confirmed');

    await openModal('custom-check-confirm');
    await modalIsOpened(assert, true);
    confirmButtonState(assert, true);
    await declineModal();
    await modalIsOpened(assert, false);
    await lastLogMessageAssert(assert, 'Custom Check-Confirm was declined');
  });

  test('progress-modal (success)', async function (assert) {
    await visit('/');
    await openModal('progress');
    const done = assert.async();
    await modalIsOpened(assert, true);
    assert.ok(find('md-dialog-content md-progress-linear'), 'Progress bar exists');
    await modalIsOpened(assert, true);
    setTimeout(async () => {
      await modalIsOpened(assert, false);
      await lastLogMessageAssert(assert, 'Progress was finished (with [0,1,2,3,4])');
      return done();
    }, 3100);
  });

  test('progress-modal circular (success)', async function (assert) {
    await visit('/');
    await click('.progress-circular');
    await openModal('progress');
    const done = assert.async();
    await modalIsOpened(assert, true);
    assert.ok(find('md-dialog-content md-progress-circular'), 'Progress bar exists');
    await modalIsOpened(assert, true);
    setTimeout(async () => {
      await modalIsOpened(assert, false);
      await lastLogMessageAssert(assert, 'Progress was finished (with [0,1,2,3,4])');
      return done();
    }, 3100);
  });

  test('progress-modal (error)', async function (assert) {
    await visit('/');
    await click('.progress-will-fail');
    await openModal('progress');
    const done = assert.async();
    await modalIsOpened(assert, true);
    assert.ok(find('md-dialog-content md-progress-linear'), 'Progress bar exists');
    assert.notOk(find('md-dialog-actions button'), 'Footer is without buttons');
    setTimeout(async () => {
      // actually it's another modal (alert)
      await modalIsOpened(assert, true);
      assert.notOk(find('md-dialog-content md-progress-linear'), 'Progress bar does not exist');
      customModalText(assert, 'body', 'Promise was rejected');
      await lastLogMessageAssert(assert, 'Progress was failed (completed [0,1]). Error - "Promise was rejected"');
      return done();
    }, 1000);
  });

  test('progress-modal circular (error)', async function (assert) {
    await visit('/');
    await click('.progress-will-fail');
    await click('.progress-circular');
    await openModal('progress');
    const done = assert.async();
    await modalIsOpened(assert, true);
    assert.ok(find('md-dialog-content md-progress-circular'), 'Progress bar exists');
    assert.notOk(find('md-dialog-actions button'), 'Footer is without buttons');
    setTimeout(async () => {
      // actually it's another modal (alert)
      await modalIsOpened(assert, true);
      assert.notOk(find('md-dialog-content md-progress-linear'), 'Progress bar does not exist');
      customModalText(assert, 'body', 'Promise was rejected');
      await lastLogMessageAssert(assert, 'Progress was failed (completed [0,1]). Error - "Promise was rejected"');
      return done();
    }, 1000);
  });

  test('Custom progress-modal (success)', async function (assert) {
    await visit('/');
    await openModal('custom-progress');
    const done = assert.async();
    await modalIsOpened(assert, true);
    customModalText(assert, 'header', 'Custom Progress Title Component');
    customModalText(assert, 'body', 'Custom Progress Body Component');
    customModalText(assert, 'body', '/ 5');
    customModalText(assert, 'footer', 'Custom Progress Footer Component');
    assert.ok(find('md-dialog-content md-progress-linear'), 'Progress bar exists');
    assert.notOk(find('md-dialog-actions button'), 'Footer is without buttons');
    setTimeout(async () => {
      await modalIsOpened(assert, false);
      await lastLogMessageAssert(assert, 'Progress was finished (with [0,1,2,3,4])');
      return done();
    }, 3100);
  });

  test('Custom progress-modal circular (success)', async function (assert) {
    await visit('/');
    await click('.progress-circular');
    await openModal('custom-progress');
    const done = assert.async();
    await modalIsOpened(assert, true);
    customModalText(assert, 'header', 'Custom Progress Title Component');
    customModalText(assert, 'body', 'Custom Progress Body Component');
    customModalText(assert, 'body', '/ 5');
    customModalText(assert, 'footer', 'Custom Progress Footer Component');
    assert.ok(find('md-dialog-content md-progress-circular'), 'Progress bar exists');
    assert.notOk(find('md-dialog-actions button'), 'Footer is without buttons');
    setTimeout(async () => {
      await modalIsOpened(assert, false);
      await lastLogMessageAssert(assert, 'Progress was finished (with [0,1,2,3,4])');
      return done();
    }, 3100);
  });

  test('process-modal (success)', async function (assert) {
    await visit('/');
    await openModal('process');
    await lastLogMessageAssert(assert, 'Process was confirmed (with some result)');
  });

  test('process-modal (error)', async function (assert) {
    await visit('/');
    await click('.process-will-fail');
    await openModal('process');
    await lastLogMessageAssert(assert, 'Process was declined (with some error)');
  });

  test('Custom process-modal', async function (assert) {
    await visit('/');
    await openModal('custom-process');
    await lastLogMessageAssert(assert, 'Process was confirmed (with some result)');
  });
});
