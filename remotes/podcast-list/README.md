# Podcast List Remote App

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
