Template.afCheckbox_semanticUI.onRendered(function() {
  $(this.firstNode).checkbox();
});

Template.afCheckbox_semanticUI.helpers({
  /*
    Adds option to change checkbox type
    Options are:
      checkbox (default)
      slider   (http://semantic-ui.com/modules/checkbox.html#slider)
      toggle   (http://semantic-ui.com/modules/checkbox.html#toggle)
  */
  checkboxType: function () {
    switch (this.atts["checkbox-type"]) {
      case "slider": return "slider ";
      case "toggle": return "toggle ";
      default: return;
    }
  },
  itemAtts: function () {
    return _.omit(this.atts, "checkbox-type")
  }
});
