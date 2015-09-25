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
    // After removing all of the props we know about, everything else should
    // become a form attribute unless it's an array or object.
    var val, htmlAttributes = {}, context = this;

    context = AutoForm.Utility.addClass(context, "ui form");

    var removeProps = [
      "schema",
      "collection",
      "validation",
      "doc",
      "resetOnSuccess",
      "type",
      "template",
      "autosave",
      "autosaveOnKeyup",
      "meteormethod",
      "filter",
      "autoConvert",
      "removeEmptyStrings",
      "trimStrings",
      "allowAdditions",
      "multiple",
      "maxSelections"
    ];

    // Filter out any attributes that have a component prefix
    function hasComponentPrefix(prop) {
      return _.any(AutoForm.Utility.componentTypeList, function (componentType) {
        return prop.indexOf(componentType + "-") === 0;
      });
    }

    // Filter out arrays and objects, which are obviously not meant to be
    // HTML attributes.
    for (var prop in context) {
      if (context.hasOwnProperty(prop) &&
          ! _.contains(removeProps, prop) &&
          ! hasComponentPrefix(prop)) {
        val = context[prop];

        if (! _.isArray(val) && ! _.isObject(val)) {
          htmlAttributes[prop] = val;
        }
      }
    }

    // By default, we add the `novalidate="novalidate"` attribute to our form,
    // unless the user passes `validation="browser"`.
    if (this.validation !== "browser" && ! htmlAttributes.novalidate) {
      htmlAttributes.novalidate = "novalidate";
    }

    return htmlAttributes;
  }
});
