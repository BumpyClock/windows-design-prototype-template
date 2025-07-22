---
applyTo: "**/*.ts,**/*.tsx"
---

# Project coding standards for TypeScript and React

Apply the [general coding guidelines](./writing-code.instructions.md) to all code.

## TypeScript Guidelines
- Use TypeScript for all new code
- Follow functional programming principles where possible
- Use interfaces for data structures and type definitions
- Prefer immutable data (const, readonly)
- Use optional chaining (?.) and nullish coalescing (??) operators

## React Guidelines
- Use functional components with hooks
- Follow the React hooks rules (no conditional hooks)
- Use React.FC type for components with children
- Keep components small and focused
- Use styles.ts for component styling
- use global design tokens for consistent theming

# Component creation guidelines
- The src/components/ui directory is for reusable UI components. Do not edit these without explicit permission from the user.
- The src/components directory is for application-specific components. Create components here as needed. create a new directory for each component, and include a styles.ts file for styling the component.
- When creating new components, use the `styles.ts` file for styling the component. This file should contain all the styles for the component, and should be imported into the component file. Use global design tokens for consistent theming. use the global design tokens for consistent theming. This ensures that the component is styled consistently with the rest of the application.