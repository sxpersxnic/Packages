# Example Usage

This repository demonstrates how to use the `@sxnic` utility packages to reduce boilerplate in your projects.

## Quick Start

Create a new project and install the packages you need:

```bash
npm init -y
npm install --save-dev @sxnic/eslint-config @sxnic/prettier-config @sxnic/typescript-config
```

## Configuration Examples

### ESLint Configuration

`.eslintrc.json`:
```json
{
  "extends": ["@sxnic/eslint-config/typescript"]
}
```

### Prettier Configuration

`package.json`:
```json
{
  "prettier": "@sxnic/prettier-config"
}
```

### TypeScript Configuration

`tsconfig.json`:
```json
{
  "extends": "@sxnic/typescript-config/react.json",
  "compilerOptions": {
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
```

### TailwindCSS Configuration

`tailwind.config.js`:
```javascript
module.exports = require('@sxnic/tailwind-config');
```

### Tsup Configuration

`tsup.config.js`:
```javascript
module.exports = require('@sxnic/tsup-config/library');
```

### Commitlint Configuration

`commitlint.config.js`:
```javascript
module.exports = require('@sxnic/commitlint-config');
```

## React Components

```jsx
import { Button, Card, Input } from '@sxnic/react-components';

function App() {
  return (
    <Card padding="lg" shadow="md">
      <Input 
        label="Email" 
        type="email" 
        placeholder="Enter your email" 
      />
      <Button variant="primary" size="md">
        Submit
      </Button>
    </Card>
  );
}
```

## Benefits

- ✅ **Consistent**: Same configuration across all projects
- ✅ **Maintainable**: Update config in one place, affects all projects  
- ✅ **Fast Setup**: No need to configure ESLint, Prettier, TypeScript from scratch
- ✅ **Best Practices**: Configurations follow modern best practices
- ✅ **Type Safe**: Full TypeScript support throughout