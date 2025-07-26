# Packages

Utility packages designed to remove boilerplate and provide consistent configurations across projects.

## 🎯 Purpose

This monorepo contains a collection of npm packages that eliminate common setup boilerplate for JavaScript/TypeScript projects. Instead of copy-pasting configuration files or setting up the same tools repeatedly, these packages provide shared, battle-tested configurations.

## 📦 Available Packages

### Configuration Packages

- **[@sxnic/eslint-config](node.js/sxnic-eslint-config)** - Shared ESLint configurations for JavaScript, TypeScript, and React
- **[@sxnic/prettier-config](node.js/sxnic-prettier-config)** - Consistent code formatting with Prettier
- **[@sxnic/typescript-config](node.js/sxnic-typescript-config)** - TypeScript configurations for different project types
- **[@sxnic/commitlint-config](node.js/sxnic-commitlint-config)** - Conventional commit message linting
- **[@sxnic/tailwind-config](node.js/sxnic-tailwind-config)** - TailwindCSS configuration with design system
- **[@sxnic/tsup-config](node.js/sxnic-tsup-config)** - Bundling configurations for libraries and CLIs

### Component Libraries

- **[@sxnic/react-components](node.js/sxnic-react-components)** - Reusable React components with TypeScript

## 🚀 Quick Start

```bash
# Install the configs you need
npm install --save-dev @sxnic/eslint-config @sxnic/prettier-config @sxnic/typescript-config

# Install components
npm install @sxnic/react-components
```

See [EXAMPLES.md](EXAMPLES.md) for detailed usage examples.

## 🏗️ Project Structure

```
packages/
├── node.js/                    # Node.js ecosystem packages
│   ├── sxnic-eslint-config/    # ESLint configurations
│   ├── sxnic-prettier-config/  # Prettier configuration
│   ├── sxnic-typescript-config/# TypeScript configurations
│   ├── sxnic-commitlint-config/# Commitlint configuration
│   ├── sxnic-tailwind-config/  # TailwindCSS configuration
│   ├── sxnic-tsup-config/      # Tsup bundler configurations
│   └── sxnic-react-components/ # React component library
├── maven/                      # Future: Maven/Java packages
├── rust/                       # Future: Rust packages
└── go/                         # Future: Go packages
```

## 🎯 Benefits

- **⚡ Faster Setup**: Skip repetitive configuration setup
- **🔄 Consistency**: Same rules and styles across all projects
- **📦 Maintainable**: Update configurations in one place
- **✅ Best Practices**: Curated configurations following modern standards
- **🔧 Extensible**: Easy to customize for specific project needs

## 🛠️ Development

```bash
# Install dependencies
npm install

# Build all packages
npm run build

# Lint all packages
npm run lint

# Clean all build artifacts
npm run clean
```

## 📝 License

MIT - see [LICENSE](LICENSE) for details.
