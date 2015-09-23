Template.afFormGroup_semanticUI.helpers({
  skipLabel() {
    let self = this;
    let type = AutoForm.getInputType(self.afFieldInputAtts);

    return (self.skipLabel || type === "boolean-checkbox");
  },
  required() {
    if (this.required) {
      return "required";
    }
  }
});
