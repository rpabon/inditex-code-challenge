# Podcaster App

Developed by Ricardo Pabón

## How to Run the Project

To build and run the project, you can use the following npm scripts:

1. For development:
   `npm run dev`

This command does the following:

- Builds the project using the development Webpack configuration (`webpack/webpack.dev.js`)
- Starts the server using `node server.js`

2. For production:
   `npm run prod`

This command does the following:

- Builds the project using the production Webpack configuration (`webpack/webpack.prod.js`)
- Starts the server using `node server.js`

Both scripts use Webpack for building and a Node.js server for serving the application. The development build is optimized for faster builds and debugging, while the production build is optimized for performance and smaller file sizes.

## How to Test

To run the test suite, use the following command: `npm test`. This command uses Jest to run all test files in the project.

Additionally, you can use these scripts for code quality checks:

- To check TypeScript types without emitting files:
  `npm run ts:check`

- To run ESLint for code linting:
  `npm run lint`

- To automatically format code with Prettier:
  `npm run format`

## About the Architecture

The Podcaster App is built using a scalable and maintainable architecture with the following key features:

1. Webpack Setup: The project uses Webpack to bundle React, TypeScript, and CSS Modules. This setup allows for efficient code splitting, asset management, and optimized builds for both development and production environments.

2. Component-Based Architecture: The application is structured around reusable React components, promoting modularity and easier maintenance. Each component is designed to be self-contained with its own logic and styling.

3. Separation of Concerns and Custom Hook Composition: The codebase is organized to separate different aspects of the application, leveraging custom hook composition to create reusable and composable logic:
   - Components handle the UI and user interactions
   - Custom hooks manage complex logic and state
   - Utility functions handle reusable operations
   - CSS Modules provide scoped styling for components

This approach allows for:

- Better separation of concerns
- Easier testing of business logic
- More flexible and maintainable code

4. Open/Closed Principle: The architecture adheres to the Open/Closed Principle by designing components and hooks that are open for extension but closed for modification. This is achieved through composition and props, allowing new functionality to be added without changing existing code.

5. Facade Pattern: Complex subsystems or external APIs are wrapped in simpler interfaces (facades) to provide a more convenient API for the rest of the application. This is particularly evident in custom hooks that abstract away complex data fetching or state management logic.

By combining these architectural principles and patterns, the App achieves a balance between flexibility, maintainability, and performance, providing a solid foundation for future enhancements and scalability.
