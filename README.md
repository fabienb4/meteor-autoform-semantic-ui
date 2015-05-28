# fabienb4:autoform-semantic-ui

Semantic-ui template for `aldeed:autoform` package.

> semantic-ui is NOT included in this package, to allow you to use a customized version if you need to. If you don't use a custom version, you must add the default package `semantic:ui-css` to your meteor app, otherwise, there will be no styling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [New Input Types](#new-input-types)
- [Options](#options)
- [License](#license)
- [Contributing](#contributing)

## Installation

In your Meteor app directory:

```
$ meteor add fabienb4:autoform-semantic-ui
```

## Usage

In your code (client side) add:
```js
Meteor.startup(function() {
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

##### `basic-select`: A basic select working without javascript (see: [basic-select](http://semantic-ui.com/collections/form.html#basic-select))

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

##### `select`: A javascript driven select (see: [selection](http://semantic-ui.com/modules/dropdown.html#selection))

_If a field using a `select` is marked as optional in the schema, the dropdown will show a "Clear" button at the top of the list, allowing you to clear the currently selected value._

```js
// Simple
{{> afQuickField name="items" options=items}}

// Custom placeholder
{{> afQuickField name="items" placeholder="Select an item" options=items}}

// Search
{{> afQuickField name="items" options=items search=true}}

// Full text search
{{> afQuickField name="items" options=items fullTextSearch=true}}
```

Possible formats for `options`:
```js
// Simple
items = [
  { value: "1", label: "Item 1" },
  { value: "2", label: "Item 2" }
];

// With icons/flags
items = [
  { value: "1", label: "Item 1", icon: "file text icon" },
  { value: "2", label: "Item 2", icon: "bz flag" }
];

// Groups with headers
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
]
```

## Options

#### Show errors in label

A field's errors can be shown in the label of the field.

In the form attributes (all fields in the form will show errors in labels):
```js
{{#autoForm collection="Items" id="itemsInsertForm" type="insert" errorsInLabels=true}}
  //...
{{/autoForm}}
```

In the field attributes (only this field will show errors in label):
```js
{{> afQuickField name="name" errorsInLabel=true}}
```

#### `boolean-checkbox` types

##### `slider` (see: [slider](http://semantic-ui.com/modules/checkbox.html#slider))

```js
{{> afQuickField name="isEnabled" checkboxType="slider"}}
```

##### `toggle` (see: [toggle](http://semantic-ui.com/modules/checkbox.html#toggle))

```js
{{> afQuickField name="isEnabled" checkboxType="toggle"}}
```

## License

MIT

## Contributing

Anyone is welcome to contribute. Fork, make your changes (test them!), and then submit a pull request.

[![Support via Gratipay](https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.svg)](https://gratipay.com/fabienb4/)
