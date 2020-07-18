import { layout as templateLayout } from '@ember-decorators/component';
import PromptModal from 'ember-modals-manager-internal/components/modals-container/prompt';
import layout from 'ember-paper-modals-manager/templates/components/modals-container/prompt';

export default
@templateLayout(layout)
class _PromptModal extends PromptModal {
}
