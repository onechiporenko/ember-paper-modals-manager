# Install

**Firstly:**

{{#docs-snippet name="install.sh" title="Install"}}
ember i ember-paper-modals-manager
{{/docs-snippet}}

`ember-paper` will be added to the `dependencies` in the `package.json` and installed if it wasn't installed before.

**Secondly:**

Add component `modals-container` to the `application.hbs`:

{{#docs-snippet name="application.hbs" title="application.hbs"}}
{{outlet}}
<ModalsContainer/>
{{/docs-snippet}}

**Thirdly:**

Inject a service `modals-manager` where you want to use modals:

{{#docs-snippet name="any-context.js" title="Modals Manager injection"}}
import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default MyController extends Controller {
  @service()
  modalsManager;
}
{{/docs-snippet}}

That's it. Now you are able to use predefined modals from `modals-manager`.
