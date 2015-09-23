Template.afInputSubmit_semanticUI.helpers({
  atts() {
    let atts = _.clone(this.atts);

    // Add semantic-ui class
    atts = AutoForm.Utility.addClass(atts, "ui positive button");

    return atts;
  }
});
