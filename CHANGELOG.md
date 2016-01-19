fabienb4:autoform-semantic-ui
=========================

Semantic-ui template for aldeed:autoform package.

## ChangeLog

### 0.9.3

- Updated `aldeed:autoform` dependency to 5.8.1.

### 0.9.2

- Added missing `settings` parameters to input types using Semantic-UI `checkbox` modules.
- Fixed `error` class on `afObjectField`.

### 0.9.1

- Added label and icon features to input.

### 0.9.0 [BREAKING]

- Renamed `classNames` attribute to `class` for consistency with Autoform.

### 0.8.0 [BREAKING]

- Reverted part of previous commit (problem fixed with Semantic-UI > 2.1.5).
- Fixed `select` not properly updated on initial page load or hard refresh.

> `semantic:ui-css` package hasn't been updated on Atmosphere at the time of writing, use `semantic:ui` instead (> 2.1.5 needed).

### 0.7.3

- Allow Autoform `disabled` form type behavior to work properly.
- Fixed `formValues` reactive update with `select`.
- Minor cleanup.

### 0.7.2

- Bumped aldeed:autoform package version.

### 0.7.1

- Updated `aldeed:autoform` dependency to 5.6.0.
- Updated `select`:
  - Let Semantic-UI handle selected item(s).
  - Allow customizing dropdown settings (see README).
- Updated README.

### 0.7.0 [BREAKING]

- Revamped `select` settings.
  - Removed `selection` property.
  - Added `classNames` property (default to: `"fluid selection"`, pass an empty string to clear default).
  - Fixed atts on hidden input.

### 0.6.3

- Fixed problem with labels.

### 0.6.2

- Additional fixes/improvements after 0.6.x.
 - Fixed `select`'s categories parsing.
 - Fixed `basic-select` optgroups parsing.
 - Improved item/subitems for `select` & `basic-select` parsing.
 - `select` items now support "label", "description" & "selection" (see README).
 - Updated README.

Thanks to @abernix for his help.

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
