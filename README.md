# How to Host TypeScript-Based Node Apps on Vercel

A minimal Express.js application written in TypeScript, structured for deployment on Vercel. Serves as a reference implementation for running Node.js server applications with TypeScript on Vercel's serverless and edge runtimes.

---

## Overview

This project demonstrates a production-ready setup for building and deploying a TypeScript Node.js application to Vercel. It uses Express for HTTP handling, TypeScript for type safety and maintainability, and standard npm scripts for local development and build. The codebase is kept minimal so you can extend it with your own routes, middleware, and environment configuration.

---

## Prerequisites

- Node.js 18.x or later (LTS recommended)
- npm 9.x or later (or equivalent package manager)
- A Vercel account (for deployment)

---

## Project Structure

```
.
├── src/
│   └── index.ts      # Application entry point and route definitions
├── package.json
├── tsconfig.json
└── README.md
```

---

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server with hot reload (uses `nodemon` and `ts-node`):

```bash
npm run dev
```

The server listens on `http://localhost:8080` by default. Set the `PORT` environment variable to override.

---

## Build and Run (Production-like)

Compile TypeScript:

```bash
npm run build
```

Start the compiled application:

```bash
npm start
```

Ensure `tsconfig.json` `outDir` matches the path used by the start script (e.g. `dist`). If they differ, update one so the built output is where `npm start` expects it.

---

## Deployment to Vercel

1. Install the Vercel CLI and log in (if needed):

   ```bash
   npm i -g vercel
   vercel login
   ```

2. From the project root, run:

   ```bash
   vercel
   ```

3. Follow the prompts to link the project (or create a new one) and deploy.

For production deployments:

```bash
vercel --prod
```

Configure environment variables (e.g. `PORT`, app-specific secrets) in the Vercel project dashboard under Settings > Environment Variables. Ensure your Vercel project is set up to use Node.js and that the build command and output directory match your `package.json` scripts and `tsconfig.json` (e.g. build command: `npm run build`, output directory as required by your framework or static assets if any).

---

## Available Scripts

| Script   | Description                                              |
| -------- | -------------------------------------------------------- |
| `dev`    | Start development server with hot reload                 |
| `build`  | Compile TypeScript (output per `tsconfig.json`)          |
| `start`  | Run the compiled application (default: `dist/index.js`)  |
| `test`   | Placeholder; add your test runner and commands here      |

---

## API Endpoints

| Method | Path   | Description                    |
| ------ | ------ | ------------------------------ |
| GET    | `/`    | Root response                  |
| GET    | `/ping`| Health check; responds `pong`  |

---

## License

ISC.
# how-to-host-typescript-based-node-apps-on-vercel
