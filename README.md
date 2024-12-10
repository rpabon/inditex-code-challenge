# Podcaster App

Developed by Ricardo Pabón

## How to Run

1. Install Dependencies: `npm run install:all`
2. Build the Apps: `npm run build`
3. Start the Servers: `npm run serve`
4. Run Tests: `npm run test`

**Important**: Always build the apps (step 2) before starting the servers (step 3).

## Architecture

The Podcaster App is built using a microfrontend architecture, leveraging Webpack Module Federation. This approach allows for a more scalable and maintainable application structure by breaking down the app into smaller, more manageable pieces.

### Microfrontend Structure

The application consists of one host app and three remote apps. Each remote app can be developed, run, and tested independently from the host, allowing for greater flexibility and parallel development workflows.

1. **Host App**: The main application shell that orchestrates the loading and integration of the remote apps.

2. **Remote Apps**:
   - **Podcast List**: Handles the display and management of the podcast list.
   - **Podcast Episode List**: Manages the list of episodes for a selected podcast.
   - **Podcast Episode Details**: Displays detailed information about a selected episode.

Each remote app is a self-contained module that can function independently, with its own build process, dependencies, and testing suite. This independence allows teams to work on different parts of the application simultaneously without interfering with each other's work. When integrated into the host app, these remotes come together to form the complete Podcaster application.

- **_Podcaster App_**
  - **Host App**
    - State Management
    - Routing
    - PodcastDetailSidebar
  - **Remote: Podcast List**
    - PodcastGrid
    - PodcastCard
    - SearchBar
  - **Remote: Podcast Episode List**
    - EpisodeList
    - EpisodeListItem
  - **Remote: Podcast Episode Details**
    - EpisodeInfo
    - AudioPlayer

### Webpack Module Federation

We use Webpack Module Federation to enable the microfrontend architecture. This allows each app to be developed and deployed independently while still functioning as part of a cohesive whole.

Key benefits of this approach include:

- **Independent Development**: Each team can work on their respective apps without interfering with others.
- **Separate Deployment**: Apps can be deployed independently, reducing the risk of system-wide failures.
- **Runtime Integration**: Modules are loaded and integrated at runtime, allowing for dynamic composition of the application.
- **Shared Dependencies**: Common libraries can be shared across apps, reducing bundle sizes and improving load times.

### Communication Between Apps

The apps share information and maintain a consistent state through:

- **React Context-based Store**: A centralized state management solution using React Context API is implemented in the host app. This store is consumed by all remote apps, allowing them to access and update shared data efficiently.

- **URL Parameters**: For routing and passing basic information between different views or components. This approach is particularly useful for maintaining the application state across page reloads or when sharing links.

### Limitations

While the microfrontend architecture provides numerous benefits, there are some limitations in the current implementation:

1. **Production Build Remote Discovery**: In the production build of the host app, there is an issue with discovering and loading the remote apps. This contrasts with the development environment, where remote apps are successfully located and integrated.

   - In development: Remote apps are correctly found and loaded.
   - In production: The host app fails to locate and integrate the remote apps.

   This limitation is primarily due to time constraints, which prevented a thorough exploration and implementation of a robust solution for production environments. Potential solutions might include:

   - Implementing a dynamic remote loading strategy that works in both development and production.
   - Setting up a more sophisticated build pipeline that correctly bundles and deploys all microfrontends together.
   - Exploring server-side rendering or static site generation techniques that can pre-render the integrated application.

2. **Testing Complexity**: While individual remotes can be tested in isolation, integration testing of the entire application becomes more complex and was not fully addressed in the current implementation.
