import { layout as templateLayout } from '@ember-decorators/component';
import PromptConfirmModal from 'ember-modals-manager-internal/components/emmi-modals-container/prompt-confirm';
import layout from '../../templates/components/epmm-modals-container/prompt-confirm';

export default
@templateLayout(layout)
class _PromptConfirmModal extends PromptConfirmModal {
}
