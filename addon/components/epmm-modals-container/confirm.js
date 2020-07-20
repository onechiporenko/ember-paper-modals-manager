import { layout as templateLayout } from '@ember-decorators/component';
import ConfirmModal from 'ember-modals-manager-internal/components/emmi-modals-container/confirm';
import layout from '../../templates/components/epmm-modals-container/confirm';

export default
@templateLayout(layout)
class _ConfirmModal extends ConfirmModal {
}
