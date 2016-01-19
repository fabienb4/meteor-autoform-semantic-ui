Template.afCheckbox_semanticUI.onRendered(function() {
  this.$(this.firstNode).checkbox(this.data.atts.settings);
});

Template.afCheckbox_semanticUI.helpers({
  inputAtts() {
    return _.omit(this.atts, "checkboxType");
  }
});
