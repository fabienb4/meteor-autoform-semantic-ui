fabienb4:autoform-semantic-ui
=========================

Semantic-ui template for aldeed:autoform package.

## ChangeLog

### 0.6.1

- Updated `select` to support new features.
  - `allowAdditions`, `allowCategorySelection`, `multiple`, `maxSelections`, `useLabels` are now supported.
  - Categories can now be used (see README).

### 0.6.0 [BREAKING]

- Updated for compatibility Meteor 1.2 (_no longer usable with Meteor < 1.2_).
  - Make use of ES6.
- Major code cleanup.
- Changed quickForm's submit, submit, reset & button colors (green, green, grey & grey, respectively).

### 0.5.0

- Updated rendering according to changes in semantic-ui.
  - Errors:
    - Now display properly in a label under each field.
    - `errorsInLabel` is no longer used.
  - Arrays:
    - Fixed fields width.
    - Fixed corner labels positioning.
- Added support for grouping fields (See aldeed/autoform README).
  - Semantic-UI implementation uses `ui segment` instead of `fieldset` for better rendering.
- Updated autoform dependency to 5.5.1.
- Removed useless `fluid field` wrapper. Closes #18

### 0.4.6

- Optimized selectors.

### 0.4.6

- Patch semantic-ui.js with latest changes from autoForm.js.
- Placeholder should return when clearing an optional field that had an existing value.

### 0.4.5

- Updated checked status for select & checkbox.
- Added `select-checkbox-inline` & `select-radio-inline` input types.

### 0.4.4

- Updated autoform dependency to 5.3.2.

### 0.4.3

- Fixed issue with corner label size due to changes in Semantic UI 2.0

### 0.4.2

- Dropdowns now close after clearing
- Add the possibility to set attrs on the formgroup & label
- Minor cleanup

### 0.4.1

- Removed label on clear button in select to avoid issue with multilingual apps.

### 0.4.0

- Updated autoform dependency to 5.3.0.

### 0.3.7

- Boolean input field: `checkboxType` can now be used to determine what type of checkbox is used (can be either `slider` or `toggle`). When not provided, default to standard checkbox.
