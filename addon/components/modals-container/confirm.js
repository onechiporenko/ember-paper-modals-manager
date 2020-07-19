import { layout as templateLayout } from '@ember-decorators/component';
import ConfirmModal from 'ember-modals-manager-internal/components/modals-container/confirm';
import layout from 'ember-paper-modals-manager/templates/components/modals-container/confirm';

export default
@templateLayout(layout)
class _ConfirmModal extends ConfirmModal {
}
