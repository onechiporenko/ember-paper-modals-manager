# Predefined modals

Every modal described below takes a single parameter. It's a POJO with properties:

* `title` - modal's title

* `body` - modal's body message

* `footer` - text shown near the footer buttons (empty string by default)
 
* `confirm` - text for confirm-button

* `decline` - text for decline-button

* `clickOutsideToClose` - causes clicking on the backdrop to trigger the `decline` handler. Defaults to `false`

* `escapeToClose` - causes pressing escape to close the dialog. Defaults to `true`

* `focusOnOpen` - causes the initial focus to be on an inner element with the autofocus attribute, rather than the last button inside `{{paper-dialog-actions}}`. Defaults to `true`

* `fullscreen` - causes the dialog to become fullscreen at smaller breakpoints

* `opaque` - causes the backdrop to become opaque. Defaults to `true`

* `closeTo` - target for closing the dialog with a transition

* `openFrom` - source for opening the dialog with a transition

* `origin` - if present, the dialog will use it as `openFrom` and `closeTo`. Also, focus will be returned to this element once the dialog closes

* `parent` - existing element where the modal and backdrop will be rendered

* `circularDiameter` - `diameter` for `paper-progress-circular`

* `circularStrokeRatio` - `strokeRatio` for `paper-progress-circular`

* `circularClass` - `class` for `paper-progress-circular`

* `circularAccent` - `accent` for `paper-progress-circular`

* `circularWarn` - `warn` for `paper-progress-circular`

* `linearAccent` - `accent` fom `paper-progress-linear`

* `linearWarn` - `warn` for `paper-progress-linear`

* `confirmButtonPrimary` - display `confirm` as the primary button, more prominent that other buttons

* `confirmButtonFab` - display `confirm` as a Floating Action Button

* `confirmButtonMini` - display `confirm` as a mini-sized button. Implies `fab`, unless `fab` is explicity set falsy

* `confirmButtonNoInk` - suppresses the ripple effect when clicked

* `confirmButtonRaised` - display `confirm` button with a 3-D effect

* `confirmButtonIcon` - set when the contents contains an icon and adjusts CSS appropriately

* `declineButtonPrimary` - display `decline` as the primary button, more prominent that other buttons

* `declineButtonFab` - display `decline` as a Floating Action Button

* `declineButtonMini` - display `decline` as a mini-sized button. Implies `fab`, unless `fab` is explicity set falsy

* `declineButtonNoInk` - suppresses the ripple effect when clicked

* `declineButtonRaised` - display `decline` button with a 3-D effect

* `declineButtonIcon` - set when the contents contains an icon and adjusts CSS appropriately

You may set default options for all modals with:

{{#docs-snippet name="default-options.js"}}
set(modalsManager, 'defaultOptions', {...});
{{/docs-snippet}}