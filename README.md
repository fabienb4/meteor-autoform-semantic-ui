# fabienb4:autoform-semantic-ui

Semantic-ui template for `aldeed:autoform` package.

> semantic-ui is NOT included in this package, to allow you to use a customized version if you need to. If you don't use a custom version, you must add the default package `semantic:ui-css` to your meteor app, otherwise, there will be no styling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [New Input Types](#new-input-types)
  - [`basic-select`](#basic-select-type)
  - [`select`](#select-type)
  - [`boolean-checkbox`](#boolean-checkbox-type)
    - [`slider`](#slider)
    - [`toggle`](#toggle)
- [Options](#options)
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

## New Input Types

### `basic-select` type
**A basic select working without javascript (see: [basic-select](http://semantic-ui.com/collections/form.html#basic-select))**

```js
{{> afQuickField name="items" type="basic-select" options=items}}
```


Format for `options`:

```js
items = [
  { value: "1", label: "Item 1" },
  { value: "2", label: "Item 2" }
];
```

### `select` type
**A javascript driven select (see: [selection](http://semantic-ui.com/modules/dropdown.html#selection))**

_If a field using a `select` is marked as optional in the schema, the dropdown will show a "Clear" button at the top of the list, allowing you to clear the currently selected value._

**WARNING: Categories and search don't play well together**

```js
// Simple
{{> afQuickField name="items" options=items}}

// Simple field without a label (does not work on checkboxes!)
{{> afQuickField name="items" options=items label=false}}

// Custom placeholder
{{> afQuickField name="items" options=items placeholder="Select an item"}}

// Search
{{> afQuickField name="items" options=items search=true}}

// Full text search
{{> afQuickField name="items" options=items fullTextSearch=true}}

// Allow additions
{{> afQuickField name="items" options=items allowAdditions=true}}

// Allow category selection
{{> afQuickField name="items" options=items allowCategorySelection=true}}
```

#### Multiple Selections
These options are only for if you wish to have [multiple selections](http://semantic-ui.com/modules/dropdown.html#multiple-selection) enabled.

```js
// Multiple selections
{{> afQuickField name="items" options=items multiple=true}}

// Maximum selections (in this case, 3)
{{> afQuickField name="items" options=items maxSelections=3}}

// Don't add a label for each selection, just use a tally/count of the selected.
{{> afQuickField name="items" options=items useLabels=false}}

```

#### Possible formats for `options`
##### Simple
```js
items = [
  { value: "1", label: "Item 1" },
  { value: "2", label: "Item 2" }
];
```

##### With Icons/Flags
Add currency symbols, flags or any of the [Semantic UI icons](http://semantic-ui.com/elements/icon.html) simply by setting the class in the item `icon` attribute.
See an [example of an `icon` dropdown in the Semantic UI docs](http://semantic-ui.com/modules/dropdown.html#icon)
```js
items = [
  { value: "1", label: "Item 1", icon: "file text icon" },
  { value: "2", label: "Item 2", icon: "bz flag" }
];
```

##### With a Description
A `description` will add a small note to the right of your dropdown item.  Useful for adding a number or symbol related to the item.
See an [example of `description` in the Semantic UI docs](http://semantic-ui.com/modules/dropdown.html#description)
```js
items = [
  { value: "1", label: "Item 1", description: "2 new" },
  { value: "2", label: "Item 2", description: "10 new" }
];
```

##### Groups (Divided by Headers)
```js
items = [
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
];
```

##### Categories
See an [example of categories in the Semantic UI docs](http://semantic-ui.com/modules/dropdown.html#category-selection)
```js
items = [
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
];
```

### `boolean-checkbox` type

#### `slider`
(see: [slider](http://semantic-ui.com/modules/checkbox.html#slider))

```js
{{> afQuickField name="isEnabled" checkboxType="slider"}}
```

#### `toggle`
(see: [toggle](http://semantic-ui.com/modules/checkbox.html#toggle))

```js
{{> afQuickField name="isEnabled" checkboxType="toggle"}}
```

## License

MIT

## Contributing

Anyone is welcome to contribute. Fork, make your changes (test them!), and then submit a pull request.

Bitcoin: `34o6GtZPvVXparT46Zw2kfdxex2SWRpkGS`

[![Support via Gratipay](https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.svg)](https://gratipay.com/fabienb4/)
