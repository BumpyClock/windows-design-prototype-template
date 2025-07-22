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

# MCP Servers
## Figma Dev Mode MCP Rules
- IMPORTANT: Always use components from `/src/components/ui` when possible
- Prioritize Figma fidelity to match designs exactly
- Avoid hardcoded values, use design tokens from Figma where available
- Follow WCAG requirements for accessibility
- Add component documentation
- Place UI components in `/src/components`; avoid inline styles unless truly necessary

  - The Figma Dev Mode MCP Server provides an assets endpoint which can serve image and SVG assets
  - IMPORTANT: If the Figma Dev Mode MCP Server returns a localhost source for an image or an SVG, use that image or SVG source directly
  - IMPORTANT: DO NOT import/add new icon packages, all the assets should be in the Figma payload
  - IMPORTANT: do NOT use or create placeholders if a localhost source is provided

## Playwright MCP Rules
  - The Playwright MCP Server provides a `playwright-mcp` server which can be used to check your implementation.
  - IMPORTANT: Ask the user if the the server is running before using it
  - IMPORTANT: Use the `playwright-mcp` server for all Playwright related tasks
  - IMPORTANT: Do not use the `playwright` package directly, use the `playwright-mcp` server instead
  
  
## Design System Guidelines
- Use the `src/design-system` directory for design tokens and utilities
- Use the `src/components/ui` directory for reusable UI components
- Use the `src/components` directory for application-specific components
