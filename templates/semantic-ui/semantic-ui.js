/* global AutoForm */

Template.autoForm.helpers({
  atts() {
    // After removing all of the props we know about, everything else should
    // become a form attribute unless it's an array or object.
    let val, htmlAttributes = {}, context = this;

    context = AutoForm.Utility.addClass(context, "ui form");

    let removeProps = [
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
      "trimStrings"
    ];

    // Filter out any attributes that have a component prefix
    function hasComponentPrefix(prop) {
      return _.any(
        AutoForm.Utility.componentTypeList,
        componentType => prop.indexOf(componentType + "-") === 0
      );
    }

    // Filter out arrays and objects, which are obviously not meant to be
    // HTML attributes.
    for (let prop in context) {
      if (context.hasOwnProperty(prop) && ! _.contains(removeProps, prop) &&
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
