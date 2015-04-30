/* global AutoForm */

/*
 * Template helpers for "semantic-ui" templates
 */
Template.registerHelper("attsPlusFluidClass", function attsPlusFluidClass() {
  var atts = _.clone(this.atts);

  // Add semantic-ui class
  atts = AutoForm.Utility.addClass(atts, "fluid");

  return atts;
});

Template.registerHelper("attsPlusButtonClass", function attsPlusButtonClass() {
  var atts = _.clone(this.atts);

  // Add semantic-ui class
  atts = AutoForm.Utility.addClass(atts, "ui blue button");

  return atts;
});

Template.autoForm.helpers({
  atts: function autoFormTplAtts() {
    var context = _.clone(this);

    if (context.validation !== "browser" && !context.novalidate) {
      context.novalidate = "novalidate";
    }

    context = AutoForm.Utility.addClass(context, "ui form");

    return _.omit(context,
      "schema",
      "collection",
      "validation",
      "doc",
      "resetOnSuccess",
      "type",
      "template",
      "autosave",
      "meteormethod",
      "filter",
      "autoConvert",
      "removeEmptyStrings",
      "trimStrings",
      "_resolvedSchema"
    );
  }
});
