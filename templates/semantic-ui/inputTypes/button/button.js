Template.afInputButton_semanticUI.helpers({
  atts() {
    let atts = _.clone(this.atts);

    // Add semantic-ui class
    atts = AutoForm.Utility.addClass(atts, "ui button");

    return atts;
  }
});
