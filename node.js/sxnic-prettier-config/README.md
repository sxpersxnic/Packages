# `@sxnic/prettier-config`

Shared Prettier configuration for sxnic projects to maintain consistent code formatting.

## Installation

```bash
npm install --save-dev @sxnic/prettier-config prettier
```

## Usage

### Method 1: package.json

```json
{
  "prettier": "@sxnic/prettier-config"
}
```

### Method 2: .prettierrc.js

```javascript
module.exports = require('@sxnic/prettier-config');
```

### Method 3: Extend and customize

```javascript
// .prettierrc.js
const baseConfig = require('@sxnic/prettier-config');

module.exports = {
  ...baseConfig,
  // Your customizations
  printWidth: 120,
};
```

## Configuration

This config includes:

- ✅ Single quotes for strings
- ✅ Semicolons always
- ✅ 2 spaces for indentation
- ✅ Trailing commas for multi-line
- ✅ 100 character line width
- ✅ LF line endings
- ✅ Arrow function parentheses only when needed
