Template.quickForm_semanticUI.helpers({
  quickFieldsAtts: function () {
    // These are the quickForm attributes that we want to forward to
    // the afQuickFields component.
    return _.pick(this.atts, "id-prefix");
  },
  submitButtonAtts: function bsQuickFormSubmitButtonAtts() {
    var qfAtts = this.atts;
    var atts = {};

    if (typeof qfAtts.buttonClasses === "string") {
      atts["class"] = qfAtts.buttonClasses;
    } else {
      atts["class"] = "ui submit button";
    }

    return atts;
  },
  qfAutoFormContext: function() {
    var ctx = _.clone(this.qfAutoFormContext || {});

    ctx = AutoForm.Utility.addClass(ctx, "ui form");

    delete ctx["id-prefix"];

    return ctx;
  }
});
