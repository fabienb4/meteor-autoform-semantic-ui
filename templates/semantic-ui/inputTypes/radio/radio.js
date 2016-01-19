Template.afRadio_semanticUI.helpers({
  atts() {
    let atts = _.clone(this.atts);

    if (this.selected) {
      atts.checked = "";
    }

    return atts;
  }
});

Template.afRadio_semanticUI.onRendered(function() {
  this.$(this.firstNode).checkbox(this.data.atts.settings);
});
