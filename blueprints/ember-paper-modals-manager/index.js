/* eslint-env node */

module.exports = {
  name: 'ember-paper-modals-manager',
  description: 'Configure ember-paper-modals-manager',

  normalizeEntityName: function() {},

  afterInstall() {
    return this.addEmberPaper();
  },

  addEmberPaper() {
    if (!('ember-paper' in this.project.dependencies())) {
      return this.addAddonToProject('ember-paper');
    }
  }
};
