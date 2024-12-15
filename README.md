# Project README

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Install Dependencies

Install the required dependencies using npm:

```bash
npm ci
```

### 2. Set Up the Database

Create a PostgreSQL database and configure the environment variables. You need to set up an `.env` file in the root directory of the project with the following variables:

```env
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
HASH_SALT=your_hash_salt
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

- Replace `your_database_url`, `your_jwt_secret`, and `your_hash_salt` with appropriate values for your setup.

### 3. Project Structure

The project is organized into the following directories:

- **app**: Main application logic and pages.
- **components**: Reusable React components.
- **configs**: Configuration files for the application.
- **constants**: Static values and keys used throughout the application.
- **exceptions**: Custom error handling classes.
- **guards**: Logic for protecting routes or components.
- **icons**: Custom or third-party icons used in the UI.
- **interfaces**: TypeScript interfaces and types.
- **layouts**: Layout components for consistent page structure.
- **locales**: Localization files for internationalization.
- **middlewares**: Middleware functions for processing requests/responses.
- **providers**: Context providers for managing global state.
- **regestries**: Dynamic module or component registries.
- **services**: Business logic and API service files.
- **templates**: Predefined page or UI templates.
- **theme**: Theme configuration and styling.
- **types**: TypeScript type definitions.
- **validations**: Input validation schemas and logic.

### 4. Run the Project

Once dependencies are installed and the `.env` file is configured, start the development server:

```bash
npm run dev
```

Access the application at [http://localhost:3000](http://localhost:3000).
