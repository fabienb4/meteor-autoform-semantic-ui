AutoForm.addInputType("select-deluxe", {
  template: "afSelectDeluxe",
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
    //can fix issues with some browsers selecting the firstOption instead of the selected option
    context.atts.autocomplete = "off";

    // build items list
    context.items = [];

    var itemAtts = function itemAtts(opt) {
      var atts = { class: 'item', 'data-value': opt.value };
      if ( context.atts.textOnlyWhenSelected ) {
        atts['data-text'] = opt.label;
      }
      return atts;
    };

    // Add all defined options
    _.each(context.selectOptions, function(opt) {
      if (opt.optgroup) {
        var subItems = _.map(opt.options, function(subOpt) {
          return _.extend(subOpt, {
            name: context.name,
            itemAtts: itemAtts(subOpt),
            atts: context.atts
          });
        });
        context.items.push({
          optgroup: opt.optgroup,
          items: subItems
        });
      } else {
        context.items.push(_.extend(opt, {
          name: context.name,
          itemAtts: itemAtts(opt),
          atts: context.atts
        }));
      }
    });

    return context;
  }
});

var capitalizeFirstLetter = function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

var supportedItemUpgrades = {
  'div': 'DIV',
  'span': 'SPAN',
  'icon': 'I',
  'image': 'IMG'
};

Template.afSelectDeluxe_semanticUI.helpers({
  inputAttsAdjust: function inputAttsAdjust() {
    var atts = _.clone(this.atts);

    delete atts.firstOption;
    delete atts.withSearch;

    _.each(supportedItemUpgrades, function (options, type) {
      delete atts["with" + capitalizeFirstLetter(type)];
    });

    var currentData = Template.currentData();
    if ( currentData ) atts.value = currentData.value;

    return atts;
  },
  dropdownAtts: function () {
    var atts = {
      class: 'ui fluid selection dropdown'
    };

    // Add semantic-ui class
    atts = AutoForm.Utility.addClass(atts, "search");

    return atts;
  },
  firstOption: function () {
    return typeof this.atts.firstOption === "string" ? this.atts.firstOption : "(Select One)";
  },
  itemElementUpgrades: function () {
    var upgradeHtml = "";
    _.each(supportedItemUpgrades, function (tag, type) {
      if ( typeof this.atts['with' + capitalizeFirstLetter(type)] !== "undefined" ) {
        var className = typeof this.atts['with' + capitalizeFirstLetter(type)] === "string" ? this.atts['with' + capitalizeFirstLetter(type)] : type + "Class";
        if ( this[className] ) {
          var elemContent, elemAttrs = { 'class': this[className] };
          if ( type === "image" && this[type + "Src"] ) {
            elemAttrs.src = this[type + "Src"];
          } else if ( this[type + "Content"] ) {
            elemContent = this[type + "Content"];
          }

          upgradeHtml += HTML.toHTML(HTML[tag](HTML.Attrs(elemAttrs), elemContent));
        }
      }
    }, this);
    return Spacebars.SafeString(upgradeHtml);
  }
});

Template.afSelectDeluxe_semanticUI.onRendered(function() {
  $(this.firstNode).find(".ui.dropdown").dropdown();

  this.autorun(function () {
    var dataContext = Template.currentData();
    $(this.firstNode()).find(".ui.dropdown").dropdown('set selected', dataContext.value);
  });
});
