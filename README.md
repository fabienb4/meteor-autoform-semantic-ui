# fabienb4:autoform-semantic-ui

Semantic-ui template for `aldeed:autoform` package.

### Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [New Input Types](#new-input-types)
- [License](#license)
- [Contributing](#contributing)

### Installation

In your Meteor app directory:

```
$ meteor add fabienb4:autoform-semantic-ui
```

### Usage

In your code (client side) add:

```js
Meteor.startup(function() {
  AutoForm.setDefaultTemplate("semanticUI");
});
```

For more information on how to use autoform, please refer to [aldeed:autoform README](https://github.com/aldeed/meteor-autoform/blob/master/README.md).

### New Input Types

- `basic-select`: A basic select working without javascript (see: [basic-select](http://semantic-ui.com/collections/form.html#basic-select))
- `select-search`: A searchable select (see: [search-selection-dropdown](http://semantic-ui.com/collections/form.html#search-selection-dropdown))

### License

MIT

### Contributing

Anyone is welcome to contribute. Fork, make your changes (test them!), and then submit a pull request.

[![Support via Gratipay](https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.svg)](https://gratipay.com/fabienb4/)
