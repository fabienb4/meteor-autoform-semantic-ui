Template.afCheckbox_semanticUI.onRendered(function() {
  $(this.firstNode).checkbox();
});

Template.afCheckbox_semanticUI.helpers({
  inputAtts: function () {
    return _.omit(this.atts, "checkboxType");
  }
});
