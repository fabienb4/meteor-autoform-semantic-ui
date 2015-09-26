AutoForm.addInputType("basic-select", {
  template: "afBasicSelect",
	valueOut() {
		return this.val();
	},
	valueConverters: {
    stringArray:  AutoForm.valueConverters.stringToStringArray,
    number:       AutoForm.valueConverters.stringToNumber,
    numberArray:  AutoForm.valueConverters.stringToNumberArray,
    boolean:      AutoForm.valueConverters.stringToBoolean,
    booleanArray: AutoForm.valueConverters.stringToBooleanArray,
    date:         AutoForm.valueConverters.stringToDate,
    dateArray:    AutoForm.valueConverters.stringToDateArray
	},
  contextAdjust(context) {
    // can fix issues with some browsers selecting the firstOption instead of the selected option
    context.atts.autocomplete = "off";

    let itemAtts    = _.omit(context.atts, "firstOption");
    let firstOption = context.atts.firstOption;

    // build items list
    context.items = [];

    // If a firstOption was provided, add that to the items list first
    if (firstOption !== false) {
      context.items.push({
        name:  context.name,
        label: (typeof firstOption === "string" ? firstOption : "(Select One)"),
        value: "",
        // _id must be included because it is a special property that
        // #each uses to track unique list items when adding and removing them
        // See https://github.com/meteor/meteor/issues/2174
        //
        // Setting this to an empty string caused problems if option with value
        // 1 was in the options list because Spacebars evaluates "" to 1 and
        // considers that a duplicate.
        // See https://github.com/aldeed/meteor-autoform/issues/656
        _id:      "AUTOFORM_EMPTY_FIRST_OPTION",
        selected: false,
        atts:     itemAtts
      });
    }

    let buildOption = option => ({
      name:     context.name,
      label:    option.label,
      value:    option.value,
      htmlAtts: _.omit(option, "label", "value"),
      // _id must be included because it is a special property that
      // #each uses to track unique list items when adding and removing them
      // See https://github.com/meteor/meteor/issues/2174
      //
      // The toString() is necessary because otherwise Spacebars evaluates
      // any string to 1 if the other values are numbers, and then considers
      // that a duplicate.
      // See https://github.com/aldeed/meteor-autoform/issues/656
      _id:      option.value.toString(),
      selected: (option.value === context.value),
      atts:     itemAtts
    });

    // Add all defined options
    _.each(context.selectOptions, option => {
      if (option.optgroup) {
        let subOptions = _.map(option.items, buildOption);

        context.items.push({
          optgroup: option.optgroup,
          items:    subOptions
        });
      } else {
        context.items.push(buildOption(option));
      }
    });

    return context;
  }
});
