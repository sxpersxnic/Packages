# `@sxnic/react-components`

A collection of reusable React components built with TypeScript and styled with TailwindCSS.

## Installation

```bash
npm install @sxnic/react-components
```

Note: This package requires React 17+ and TailwindCSS to be installed in your project.

## Usage

```tsx
import { Button, Card, Input } from '@sxnic/react-components';

function App() {
  return (
    <Card>
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

## Components

### Button

Versatile button component with multiple variants and sizes.

```tsx
<Button variant="primary" size="lg">
  Primary Button
</Button>
```

Props: `variant` (primary, secondary, outline, ghost), `size` (sm, md, lg)

### Card

Container component with customizable padding and shadow.

```tsx
<Card padding="lg" shadow="md">
  Content goes here
</Card>
```

Props: `padding` (sm, md, lg), `shadow` (none, sm, md, lg)

### Input

Form input with label and error handling.

```tsx
<Input 
  label="Username" 
  error="Username is required"
  placeholder="Enter username"
/>
```

Props: `label`, `error`, `variant` (default, outline)

## Styling

Components are designed to work with TailwindCSS. Make sure you have Tailwind configured in your project.
