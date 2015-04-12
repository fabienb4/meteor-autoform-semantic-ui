Template.afSelect_semanticUI.helpers({
	atts: function dropdownAttsAdjust() {
	  var atts = _.clone(this.atts);

	  // Add semantic-ui class
	  atts = AutoForm.Utility.addClass(atts, "ui dropdown");

	  return atts;
	}
});

Template.afSelect_semanticUI.onRendered(function() {
  $(this.firstNode).find('.ui.dropdown').dropdown();
});
