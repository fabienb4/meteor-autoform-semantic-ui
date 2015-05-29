Package.describe({
  name: 'fabienb4:autoform-semantic-ui',
  version: '0.4.0',
  // Brief, one-line summary of the package.
  summary: 'Semantic-ui template for aldeed:autoform package.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/fabienb4/meteor-autoform-semantic-ui.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use(['templating', 'underscore'], 'client');

  api.use('aldeed:autoform@5.3.0', 'client');

  api.addFiles([
    // semantic-ui Template - General
    'templates/semantic-ui/semantic-ui.js',
    // semantic-ui Template - Components
    'templates/semantic-ui/components/quickForm/quickForm.html',
    'templates/semantic-ui/components/quickForm/quickForm.js',
    'templates/semantic-ui/components/afArrayField/afArrayField.html',
    'templates/semantic-ui/components/afArrayField/afArrayField.css',
    'templates/semantic-ui/components/afFormGroup/afFormGroup.html',
    'templates/semantic-ui/components/afFormGroup/afFormGroup.js',
    'templates/semantic-ui/components/afObjectField/afObjectField.html',
    'templates/semantic-ui/components/afObjectField/afObjectField.js',
    // semantic-ui Template - Input Types
    'templates/semantic-ui/inputTypes/basic-select/basic-select.html',
    'templates/semantic-ui/inputTypes/basic-select/basic-select.js',
    'templates/semantic-ui/inputTypes/boolean-checkbox/boolean-checkbox.html',
    'templates/semantic-ui/inputTypes/boolean-checkbox/boolean-checkbox.js',
    'templates/semantic-ui/inputTypes/button/button.html',
    'templates/semantic-ui/inputTypes/color/color.html',
    'templates/semantic-ui/inputTypes/date/date.html',
    'templates/semantic-ui/inputTypes/datetime/datetime.html',
    'templates/semantic-ui/inputTypes/datetime-local/datetime-local.html',
    'templates/semantic-ui/inputTypes/email/email.html',
    'templates/semantic-ui/inputTypes/month/month.html',
    'templates/semantic-ui/inputTypes/number/number.html',
    'templates/semantic-ui/inputTypes/password/password.html',
    'templates/semantic-ui/inputTypes/radio/radio.html',
    'templates/semantic-ui/inputTypes/radio/radio.js',
    'templates/semantic-ui/inputTypes/range/range.html',
    'templates/semantic-ui/inputTypes/reset/reset.html',
    'templates/semantic-ui/inputTypes/search/search.html',
    'templates/semantic-ui/inputTypes/select/select.html',
    'templates/semantic-ui/inputTypes/select/select.js',
    'templates/semantic-ui/inputTypes/select-checkbox/select-checkbox.html',
    'templates/semantic-ui/inputTypes/select-checkbox/select-checkbox.js',
    'templates/semantic-ui/inputTypes/select-radio/select-radio.html',
    'templates/semantic-ui/inputTypes/select-radio/select-radio.js',
    'templates/semantic-ui/inputTypes/submit/submit.html',
    'templates/semantic-ui/inputTypes/tel/tel.html',
    'templates/semantic-ui/inputTypes/text/text.html',
    'templates/semantic-ui/inputTypes/textarea/textarea.html',
    'templates/semantic-ui/inputTypes/time/time.html',
    'templates/semantic-ui/inputTypes/url/url.html',
    'templates/semantic-ui/inputTypes/week/week.html',
  ], 'client');
});
