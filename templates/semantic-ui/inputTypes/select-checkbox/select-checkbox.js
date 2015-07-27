Template.afCheckboxGroup_semanticUI.helpers({
  atts: function selectedAttsAdjust() {
    var atts = _.clone(this.atts);

    if (this.selected) {
      atts.checked = "checked";
    }

    // remove data-schema-key attribute because we put it
    // on the entire group
    delete atts["data-schema-key"];

    return atts;
  },
  dsk: function dsk() {
    return {
      "data-schema-key": this.atts["data-schema-key"]
    };
  }
});

Template.afCheckboxGroup_semanticUI.onRendered(function() {
  $(this.firstNode).find(".ui.checkbox").checkbox();
});
