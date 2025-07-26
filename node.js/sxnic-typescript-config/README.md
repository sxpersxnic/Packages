# `@sxnic/typescript-config`

Shared TypeScript configurations for different project types.

## Installation

```bash
npm install --save-dev @sxnic/typescript-config typescript
```

## Usage

### Base Configuration

For general TypeScript projects:

```json
// tsconfig.json
{
  "extends": "@sxnic/typescript-config/base.json",
  "compilerOptions": {
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
```

### Node.js Projects

```json
// tsconfig.json
{
  "extends": "@sxnic/typescript-config/node.json"
}
```

### React Projects

```json
// tsconfig.json
{
  "extends": "@sxnic/typescript-config/react.json"
}
```

### Library Projects

For npm packages and libraries:

```json
// tsconfig.json
{
  "extends": "@sxnic/typescript-config/library.json"
}
```

## Available Configurations

- **base.json**: General TypeScript configuration with strict settings
- **node.json**: Node.js specific configuration
- **react.json**: React projects with JSX support
- **library.json**: Library/package development with declaration files

## Features

- ✅ Strict type checking
- ✅ Modern ES2022 target
- ✅ Source maps and declarations
- ✅ Path mapping support (React config)
- ✅ Optimized for different project types
