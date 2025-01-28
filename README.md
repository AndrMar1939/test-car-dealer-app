## Overview
This project is built using **Next.js 14** with the following features and tools:
- **Tailwind CSS** for styling, including Prettier plugins for code formatting.
- **App Router** for improved routing structure.
- **TypeScript** for type safety.

## Getting Started
First, clone the repository:
```bash
git clone https://github.com/AndrMar1939/test-car-dealer-app.git
```

Install the necessary modules using **npm**:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

The .env.local file is included in the repository. While including this file in the repository is generally a bad practice, in this case, it does not contain sensitive data and is included per task requirements.

On the real project you should create a new .env.local file based on the provided env.local.example

## Key Features

**Caching**: The home page data is cached for 1 hour to improve performance.
**Incremental Static Regeneration (ISR)**: The results page uses ISR to ensure efficient rendering and dynamic updates.
**Husky Pre-Commit Hook**: Automatically checks files before committing to maintain code quality.
**Prettier and ESLint Config with Tailwind Plugins**: Ensures consistent and formatted code with support for Tailwind-specific rules.

## Directory Structure
The project follows the **feature list methodology** for organizing files and directories, ensuring scalability and maintainability.
