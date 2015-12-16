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
  }
});
