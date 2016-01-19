Template.afCheckboxGroupInline_semanticUI.helpers({
  atts() {
    let atts = _.clone(this.atts);

    if (this.selected) {
      atts.checked = "checked";
    }

    // remove data-schema-key attribute because we put it
    // on the entire group
    delete atts["data-schema-key"];

    return atts;
  },
  dsk() {
    return {
      "data-schema-key": this.atts["data-schema-key"]
    };
  }
});

Template.afCheckboxGroupInline_semanticUI.onRendered(function() {
  this.$(this.firstNode).find(".ui.checkbox").checkbox(this.data.atts.settings);
});
