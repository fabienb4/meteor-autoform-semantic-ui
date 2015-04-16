AutoForm.addInputType("select-icons-search", {
  template: "afSelectIconsSearch",
  valueOut: function () {
    return this.val();
  },
  valueConverters: {
    "stringArray": function (val) {
      if (typeof val === "string") {
        val = val.split(",");
        return _.map(val, function (item) {
          return $.trim(item);
        });
      }
      return val;
    },
    "number": AutoForm.Utility.stringToNumber,
    "numberArray": function (val) {
      if (typeof val === "string") {
        val = val.split(",");
        return _.map(val, function (item) {
          item = $.trim(item);
          return AutoForm.Utility.stringToNumber(item);
        });
      }
      return val;
    },
    "boolean": AutoForm.Utility.stringToBool,
    "booleanArray": function (val) {
      if (typeof val === "string") {
        val = val.split(",");
        return _.map(val, function (item) {
          item = $.trim(item);
          return AutoForm.Utility.stringToBool(item);
        });
      }
      return val;
    },
    "date": AutoForm.Utility.stringToDate,
    "dateArray": function (val) {
      if (typeof val === "string") {
        val = val.split(",");
        return _.map(val, function (item) {
          item = $.trim(item);
          return AutoForm.Utility.stringToDate(item);
        });
      }
      return val;
    }
  },
  contextAdjust: function (context) {

    var itemAtts = _.omit(context.atts, 'firstOption');

    // build items list
    context.items = [];

    // Add all defined options
    _.each(context.selectOptions, function(opt) {
      context.items.push({
        name: context.name,
        iconClass: opt.iconClass,
        spanClass: opt.spanClass,
        divClass: opt.divClass,
        label: opt.label,
        value: opt.value,
        // htmlAtts: _.omit(opt, 'label', 'value'),
        // _id must be included because it is a special property that
        // #each uses to track unique list items when adding and removing them
        // See https://github.com/meteor/meteor/issues/2174
        //
        // The toString() is necessary because otherwise Spacebars evaluates
        // any string to 1 if the other values are numbers, and then considers
        // that a duplicate.
        // See https://github.com/aldeed/meteor-autoform/issues/656
        _id: opt.value.toString(),
        // selected: (opt.value === context.value),
        atts: itemAtts
      });
    });

    return context;
  }
});

Template.afSelectIconsSearch_semanticUI.helpers({
  firstOption: function () {
    return typeof this.atts.firstOption === "string" ? this.atts.firstOption : "(Select One)";
  },
  hasIcon: function () {
    return this.atts.withIcon && ( ( typeof this.atts.withIcon === "string" && this[this.atts.withIcon] ) || this.iconClass ) ? true : false;
  },
  iconClass: function () {
    return typeof this.atts.withIcon === "string" && this[this.atts.withIcon] ? this[this.atts.withIcon] : this.iconClass;
  },
  hasSpan: function () {
    return this.atts.withSpan && ( ( typeof this.atts.withSpan === "string" && this[this.atts.withSpan] ) || this.spanClass ) ? true : false;
  },
  spanClass: function () {
    return typeof this.atts.withSpan === "string" && this[this.atts.withSpan] ? this[this.atts.withSpan] : this.spanClass;
  },
  hasImage: function () {
    return this.atts.withImage && ( ( typeof this.atts.withImage === "string" && this[this.atts.withImage] ) || this.imageClass ) ? true : false;
  },
  imageClass: function () {
    return typeof this.atts.withImage === "string" && this[this.atts.withImage] ? this[this.atts.withImage] : this.imageClass;
  },
  imageSrc: function () {
    return typeof this.atts.withImage === "string" && this[this.atts.withImage] && typeof this.atts.withImageSrc === "string" && this[this.atts.withImageSrc] ? this[this.atts.withImageSrc] : this.imageSrc;
  }
});

Template.afSelectIconsSearch_semanticUI.onRendered(function() {
  $(this.firstNode).find(".ui.search.dropdown").dropdown();
});
