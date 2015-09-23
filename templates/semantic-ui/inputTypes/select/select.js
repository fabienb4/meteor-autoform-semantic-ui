AutoForm.addInputType("select", {
	template: "afSelect",
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

		// delete eventual option used in other templates
		delete context.atts.firstOption;

		let itemAtts = _.omit(context.atts, "placeholder");

		// build items list
		context.items = [];

		// Add all defined options
		_.each(context.selectOptions, item => {
			if (item.itemGroup) {
				let subItems = _.map(item.items, subItem => ({
					name:     context.name,
					label:    subItem.label,
					icon:     subItem.icon || false,
					value:    subItem.value,
					htmlAtts: _.extend({ class: "item" }, _.omit(subItem, "label", "value")),
					// _id must be included because it is a special property that
					// #each uses to track unique list items when adding and removing them
					// See https://github.com/meteor/meteor/issues/2174
					//
					// The toString() is necessary because otherwise Spacebars evaluates
					// any string to 1 if the other values are numbers, and then considers
					// that a duplicate.
					// See https://github.com/aldeed/meteor-autoform/issues/656
					_id:      subItem.value.toString(),
					selected: (subItem.value === context.value),
					atts:     itemAtts
				}));

				context.items.push({
					itemGroup: item.itemGroup,
					items:     subItems
				});
			} else {
				context.items.push({
					name:     context.name,
					label:    item.label,
					icon:     item.icon || false,
					value:    item.value,
					htmlAtts: _.extend({ class: "item" }, _.omit(item, "label", "value")),
					// _id must be included because it is a special property that
					// #each uses to track unique list items when adding and removing them
					// See https://github.com/meteor/meteor/issues/2174
					//
					// The toString() is necessary because otherwise Spacebars evaluates
					// any string to 1 if the other values are numbers, and then considers
					// that a duplicate.
					// See https://github.com/aldeed/meteor-autoform/issues/656
					_id:      item.value.toString(),
					selected: (item.value === context.value),
					atts:     itemAtts
				});
			}
		});

		return context;
	}
});

Template.afSelect_semanticUI.helpers({
	divAtts() {
		let atts = { class: "ui fluid selection dropdown" };

		// Add search class
		if (this.atts.search || this.atts.fullTextSearch) {
			atts = AutoForm.Utility.addClass(atts, "search");
		}

		return atts;
	},
	placeholder() {
		return this.atts.placeholder || "(Select One)";
	},
	required() {
		return this.atts.required === "";
	},
	itemHtmlAtts() {
		let atts = _.clone(this.htmlAtts);

		// Add selected class
		if (this.selected) {
			atts = AutoForm.Utility.addClass(atts, "active selected");
		}

		return atts;
	}
});

Template.afSelect_semanticUI.events({
	"click .ui.clear.button"(event) {
		$(event.target).closest(".ui.dropdown").dropdown("clear").dropdown("hide");
	}
});

Template.afSelect_semanticUI.onRendered(function() {
  this.$(this.firstNode).dropdown({
		fullTextSearch: this.data.atts.fullTextSearch || false
	});
});
