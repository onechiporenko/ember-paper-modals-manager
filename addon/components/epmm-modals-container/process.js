import { layout as templateLayout } from '@ember-decorators/component';
import ProcessModal from 'ember-modals-manager-internal/components/emmi-modals-container/process';
import layout from '../../templates/components/epmm-modals-container/process';

export default
@templateLayout(layout)
class _ProcessModal extends ProcessModal {
}
