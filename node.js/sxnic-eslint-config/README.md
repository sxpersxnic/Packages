# `@sxnic/eslint-config`

Shared ESLint configuration for sxnic projects to maintain consistent code quality and style.

## Installation

```bash
npm install --save-dev @sxnic/eslint-config eslint
```

## Usage

### Base Configuration

For basic JavaScript/Node.js projects:

```json
// .eslintrc.json
{
  "extends": ["@sxnic/eslint-config"]
}
```

### TypeScript Projects

```json
// .eslintrc.json
{
  "extends": ["@sxnic/eslint-config/typescript"]
}
```

### React Projects

```json
// .eslintrc.json
{
  "extends": ["@sxnic/eslint-config/react"]
}
```

### React + TypeScript Projects

```json
// .eslintrc.json
{
  "extends": ["@sxnic/eslint-config/typescript"]
}
```

The TypeScript config automatically extends React config for `.tsx` files.

## Features

- ✅ ESLint recommended rules
- ✅ Import/export best practices
- ✅ TypeScript support
- ✅ React and React Hooks support
- ✅ Accessibility rules (jsx-a11y)
- ✅ Prettier integration
- ✅ Consistent code formatting
