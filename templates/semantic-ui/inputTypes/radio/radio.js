Template.afRadio_semanticUI.helpers({
  atts: function selectedAttsAdjust() {
    var atts = _.clone(this.atts);

    if (this.selected) {
      atts.checked = "";
    }

    return atts;
  }
});

Template.afRadio_semanticUI.onRendered(function() {
  this.$(this.firstNode).checkbox();
});
