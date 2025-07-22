# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Windows Design UX prototype template built with React, TypeScript, and Vite. Currently, it's a foundational template awaiting implementation of Windows Design System components and patterns.

## Common Development Commands

### Package Management
- **Install dependencies**: `npm install`
- **Install with Azure Artifacts auth**: `npm run install-with-auth` (uses .npmrc for @minttec scope)
    
### Development
- **Start dev server**: `npm run dev` (runs on http://localhost:5173)
- **Build for production**: `npm run build` (TypeScript check + Vite build)
- **Preview production build**: `npm run preview`

### Code Quality
- **Lint code**: `npm run lint`
- **Fix linting issues**: `npm run lint:fix`
- **Format code**: `npm run format` (Note: Prettier config needs to be added)
- **Fix all issues**: `npm run doctor` (runs lint:fix + format)

## Architecture & Structure

### Tech Stack
- **React 18.3.1** - UI framework (downgraded for compatibility)
- **TypeScript 5.8.3** - Type safety with strict mode enabled
- **Vite 7.0.4** - Build tool and dev server
- **ESLint 9.30.1** - Code quality (flat config format)
- **Tailwind CSS v4** - Utility-first CSS framework with new architecture
- **shadcn/ui** - React component library built on Radix UI
- **@fluentui/react-brand-icons** - Fluent UI brand icons for Windows design
- **lucide-react** - Icon library (default for shadcn/ui)

### Project Structure
```
src/
├── App.tsx          # Main application component
├── App.css          # Global styles
├── main.tsx         # Application entry point
├── index.css        # Root styles
└── vite-env.d.ts    # Vite type definitions

public/             # Static assets
```

### TypeScript Configuration
- Strict mode enabled
- Target: ES2020
- Module: ESNext with bundler resolution
- JSX: react-jsx
- Aggressive linting rules for unused variables and parameters

### ESLint Configuration
Using flat config format with:
- TypeScript-ESLint plugin for type-aware linting
- React Hooks plugin for React best practices
- Configured to error on unused variables (except underscore-prefixed)

## Development Guidelines

### Code Comments
All files should contain a header comment starting with "ABOUTME:" for easy grepping and context understanding.

### Git Workflow
- Use descriptive commit messages
- No Claude Code attribution in commits
- Follow the git conventions outlined in the copilot instructions

### shadcn/ui Configuration
- **Style**: new-york variant
- **Base Color**: Neutral
- **CSS Variables**: Enabled
- **Aliases**: 
  - `@/components` - Component directory
  - `@/lib/utils` - Utility functions
  - `@/components/ui` - UI components
  - `@/hooks` - Custom React hooks

### Future Implementation Needs
This template requires implementation of:
1. Create component directory structure for shadcn/ui components
2. Integrate Fluent UI brand icons with shadcn components
3. Windows 11 design tokens and theming adaptation
4. Layout system following Windows design principles
5. State management solution (if needed)
6. Routing setup (if multi-page)
7. Testing framework configuration
8. Proper Prettier configuration

## Important Notes
- The project uses npm as the package manager
- No testing framework is currently configured
- The template is a blank canvas for Windows Design System implementation
- Azure Artifacts authentication may be required for @minttec packages