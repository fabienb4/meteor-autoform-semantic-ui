# fabienb4:autoform-semantic-ui

> **I am looking for someone to take over this package, if you are interested in maintaining it, please send me an email.**

Semantic-ui template for `aldeed:autoform` package.

> semantic-ui is NOT included in this package, to allow you to use a customized version if you need to. If you don't use a custom version, you must add the default package `semantic:ui-css` to your meteor app, otherwise, there will be no styling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Input Options](#input-options)
  - [Icons and Labels](#icons-and-labels)
- [Extended Input Types](#extended-input-types)
  - [basic-select](#basic-select)
  - [select](#select)
  - [boolean-checkbox](#boolean-checkbox)
- [License](#license)
- [Contributing](#contributing)

## Installation

In your Meteor app directory:

```
$ meteor add aldeed:autoform fabienb4:autoform-semantic-ui
```

## Usage

In your code (client side) add:
```js
Meteor.startup(() => {
  AutoForm.setDefaultTemplate("semanticUI");
});
```

Or you can set the template on each form:
```js
{{#autoForm collection="Items" id="itemsInsertForm" type="insert" template="semanticUI"}}

{{/autoForm}}
```

For more information on how to use autoform, please refer to [aldeed:autoform README](https://github.com/aldeed/meteor-autoform/blob/master/README.md).

## Input Options

### Icons and Labels

> To avoid alignment problems, you might want to use `label=false` with the following inputs.

```js
  // Left icon
  {{> afQuickField name="name" leftIcon="empty circle"}}

  // Left label
  {{> afQuickField name="name" leftLabel="name"}}

  // Right icon
  {{> afQuickField name="name" rightIcon="empty circle"}}

  // Right label
  {{> afQuickField name="name" rightLabel="name"}}

  // Left icon, right label
  {{> afQuickField name="name" leftIcon="empty circle" rightLabel="name"}}

  // Left label, right icon
  {{> afQuickField name="name" leftLabel="name" rightIcon="empty circle"}}
```

## Extended Input Types

### basic-select
**A basic select working without javascript (see: [basic-select](http://semantic-ui.com/collections/form.html#html-select))**

```js
{{> afQuickField name="items" type="basic-select"}}
```

Possible formats for `options` in schema:

```js
// Simple
autoform: {
  afFieldInput: {
    options: () => [
      { value: "1", label: "Item 1" },
      { value: "2", label: "Item 2" }
    ]
  }
}

// With groups
autoform: {
  afFieldInput: {
    options: () => [
      {
        optgroup: "Group one",
        items: [
          { value: "1", label: "Item 1" },
          { value: "2", label: "Item 2" }
        ]
      },
      {
        optgroup: "Group two",
        items: [
          { value: "3", label: "Item 3" },
          { value: "4", label: "Item 4" }
        ]
      }
    ]
  }
}
```

### select
**A javascript driven select (see: [selection](http://semantic-ui.com/modules/dropdown.html#selection))**

_If a field using a `select` is marked as optional in the schema, the dropdown will show a "Clear" button at the top of the list, allowing you to clear the currently selected value._

**WARNING: Categories and selection/search don't play well together**

```js
// Simple
{{> afQuickField name="items"}}

// Custom placeholder
{{> afQuickField name="items" placeholder="Select an item"}}

// Specify classes for the dropdown (default: "fluid selection")
{{> afQuickField name="items" class="compact selection"}}

// Remove default "fluid selection" from classes
{{> afQuickField name="items" class=""}}

// Search (**do not play well with categories**)
{{> afQuickField name="items" search=true}}

// Full text search (**do not play well with categories**)
{{> afQuickField name="items" fullTextSearch=true}}

// Allow additions
{{> afQuickField name="items" allowAdditions=true}}

// Allow category selection
{{> afQuickField name="items" allowCategorySelection=true}}

// Multiple selections
{{> afQuickField name="items" multiple=true}}

// Maximum selections (in this case: 3)
{{> afQuickField name="items" maxSelections=3}}

// Show the number of selected items instead of their labels
{{> afQuickField name="items" useLabels=false}}

// Customize dropdown initialization settings
// See: http://semantic-ui.com/modules/dropdown.html#/settings
// Override any settings set with above properties
{{> afQuickField name="items" settings=settings}}
```

Possible formats for `options` in schema:
```js
// Simple
autoform: {
  afFieldInput: {
    options: () => [
      { value: "1", label: "Item 1" },
      { value: "2", label: "Item 2" }
    ]
  }
}

// With icon/flag/label/description
// See:
// http://semantic-ui.com/modules/dropdown.html#icon
// http://semantic-ui.com/modules/dropdown.html#label
// http://semantic-ui.com/modules/dropdown.html#description
autoform: {
  afFieldInput: {
    options: () => [
      { value: "1", label: "Item 1", icon: "file text icon" },
      { value: "2", label: "Item 2", icon: "bz flag" },
      { value: "3", label: "Item 3", circularLabel: "red" },
      { value: "4", label: "Item 4", description: "new" }
    ]
  }
}

// Groups with headers
// See: http://semantic-ui.com/modules/dropdown.html#header
autoform: {
  afFieldInput: {
    options: () => [
      {
        itemGroup: "Group one",
        items: [
          { value: "1", label: "Item 1" },
          { value: "2", label: "Item 2" }
        ]
      },
      {
        itemGroup: "Group two",
        items: [
          { value: "3", label: "Item 3" },
          { value: "4", label: "Item 4" }
        ]
      }
    ]
  }
}

// Categories (**do not play well with selection/search**)
// See: http://semantic-ui.com/modules/dropdown.html#multiple-levels
autoform: {
  afFieldInput: {
    options: () => [
      {
        category: { value: "cat-one", label: "Category one" },// value if allowCategorySelection
        items: [
          { value: "1", label: "Item 1" },
          { value: "2", label: "Item 2" }
        ]
      },
      {
        category: { label: "Category two" },
        items: [
          { value: "3", label: "Item 3" },
          { value: "4", label: "Item 4" }
        ]
      }
    ]
  }
}
```

### boolean-checkbox

##### `slider`
**See: [slider](http://semantic-ui.com/modules/checkbox.html#slider)**

```js
{{> afQuickField name="isEnabled" checkboxType="slider"}}
```

##### `toggle`
**See: [toggle](http://semantic-ui.com/modules/checkbox.html#toggle)**

```js
{{> afQuickField name="isEnabled" checkboxType="toggle"}}
```

## License

MIT

## Contributing

Anyone is welcome to contribute. Fork, make your changes (test them!), and then submit a pull request.

Bitcoin: `34o6GtZPvVXparT46Zw2kfdxex2SWRpkGS`

[![Support via Gratipay](https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.svg)](https://gratipay.com/fabienb4/)
