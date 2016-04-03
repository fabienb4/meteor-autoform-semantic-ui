Template.afFormGroup_semanticUI.helpers({
  skipLabel() {
    let self = this;
    let type = AutoForm.getInputType(self.afFieldInputAtts);

    return (self.skipLabel || type === "boolean-checkbox");
  },
  requiredClass() {
    if (this.required) {
      return "required";
    }
  },
  inputClass() {
    let leftLabel  = this.afFieldInputAtts.leftLabel;
    let rightLabel = this.afFieldInputAtts.rightLabel;
    let leftIcon   = this.afFieldInputAtts.leftIcon;
    let rightIcon  = this.afFieldInputAtts.rightIcon;

    if (leftLabel || rightLabel || leftIcon || rightIcon) {
      let className = "ui";

      if (leftLabel && rightIcon) {
        className += " labeled icon";
      } else if (leftIcon && rightLabel) {
        className += " left icon right labeled";
      } else if (leftLabel) {
        className += " labeled";
      } else if (rightLabel) {
        className += " right labeled";
      } else if (leftIcon) {
        className += " left icon";
      } else if (rightIcon) {
        className += " icon";
      }

      return className + " fluid input";
    }
  },
  leftLabel() {
    return this.afFieldInputAtts.leftLabel;
  },
  rightLabel() {
    return this.afFieldInputAtts.rightLabel;
  },
  leftIcon() {
    return this.afFieldInputAtts.leftIcon;
  },
  rightIcon() {
    return this.afFieldInputAtts.rightIcon;
  },
  helpText(){
    return this.afFieldInputAtts.helpText;
  },
  inputType(){
    let leftLabel  = this.afFieldInputAtts.leftLabel;
    let rightLabel = this.afFieldInputAtts.rightLabel;
    let leftIcon   = this.afFieldInputAtts.leftIcon;
    let rightIcon  = this.afFieldInputAtts.rightIcon;

    if (leftLabel || rightLabel || leftIcon || rightIcon)
      return "labeledinput";
    else
      return "unlabeledinput";

  },
  extraGroupClasses(){
    return this.afFieldInputAtts.extraGroupClasses;
  }
});

Template.unlabeledinput.inheritsHelpersFrom("afFormGroup_semanticUI");
Template.unlabeledinput.inheritsEventsFrom("afFormGroup_semanticUI");
Template.unlabeledinput.inheritsHooksFrom("afFormGroup_semanticUI");

Template.labeledinput.inheritsHelpersFrom("afFormGroup_semanticUI");
Template.labeledinput.inheritsEventsFrom("afFormGroup_semanticUI");
Template.labeledinput.inheritsHooksFrom("afFormGroup_semanticUI");

