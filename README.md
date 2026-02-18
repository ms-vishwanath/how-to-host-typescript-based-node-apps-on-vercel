# 🚀 Deploy a TypeScript Express API on Vercel

Welcome! This guide will walk you through **deploying an Express.js API, written in TypeScript**, on [Vercel](https://vercel.com) with ease and style.  
Skip the hassle, skip Heroku's limits—let's do this the modern way!  
<br>

---

## 🛠️ Prerequisites

- **Node.js** installed
- Familiarity with `yarn` or `npm`
- GitHub or Bitbucket account

---

## 1. 🏗️ Create an Express + TypeScript Boilerplate

**Project setup**

```shell
npm init -y
```

**Install dependencies**
```shell
yarn add express
yarn add -D typescript @types/node @types/express nodemon ts-node
```

**Initialize TypeScript config**
```shell
npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true
```

**Minimal `tsconfig.json`:**
```json
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "target": "es6",
    "noImplicitAny": true,
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "build",
    "baseUrl": ".",
    "paths": {
      "*": ["node_modules/*", "src/types/*"]
    }
  },
  "include": ["./src/**/*"]
}
```

**Add to `package.json` scripts:**
```json
"scripts": {
  "dev": "nodemon --exec ts-node src/index.ts",
  "build": "tsc",
  "start": "node build/index.js"
}
```

**Sample Express server (`src/index.ts`):**
```typescript
import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (_req: Request, res: Response) => res.send('Express Typescript on Vercel'));
app.get('/ping', (_req: Request, res: Response) => res.send('pong 🏓'));

// Only start the server locally
if (process.env.VERCEL !== '1') {
  app.listen(port, () => console.log(`Server is listening on ${port}`));
}

export default app;
```

**Start your server locally:**
```shell
yarn dev
# or
npm run dev
```
Visit [http://localhost:8080](http://localhost:8080) to see it in action!

---

## 2. 📥 Initialize Git

- Create a `.gitignore` file containing:
  ```
  node_modules
  .env
  ```
- Initialize git:
  ```shell
  git init
  ```
- Push your repository to GitHub/Bitbucket.

---

## 3. ⚡ Deploy to Vercel

1. Visit [vercel.com](https://vercel.com) and log in via your version control platform.
2. Click “Add new project”, then select your repository and hit deploy.

<details>
<summary>Getting an error like "Vercel Error"? 😟</summary>

Don’t worry! Just add a Vercel config file in the next step! 👍

</details>

---

## 4. 🛠️ Add a Vercel Configuration

Create a `vercel.json` in your project root:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "build/index.js",
      "use": "@vercel/node",
      "config": { "includeFiles": ["build/**"] }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "build/index.js"
    }
  ]
}
```

> **Note:**  
> Ensure the `outDir` in `tsconfig.json` matches where you compile your TypeScript (here: `build`). Update both files if you use a different folder.

---

## 5. 🏷️ [Optional] Automate Builds with Pre-Commit Hooks

Vercel needs built JavaScript—let’s ensure you never forget:

```shell
yarn add -D pre-commit rimraf
```

**Add scripts to `package.json`:**
```json
"scripts": {
  "build": "rimraf build && tsc",
  "ts.check": "tsc --project tsconfig.json",
  "add-build": "git add build"
}
```
**Add pre-commit config:**
```json
"pre-commit": [
  "ts.check",
  "build",
  "add-build"
]
```
Now, on every commit, TypeScript checks, JS builds, and the `build` folder is automatically staged.

---

## 6. 🌐 Redeploy & Verify

1. Commit, then push to GitHub:
   ```shell
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
2. Vercel auto-deploys your code.
3. Go to your Vercel deployment URL. You should see:

    > **Express Typescript on Vercel**

4. Check the `/ping` endpoint for a bonus “pong 🏓”!

---

## 🎉 That's it!

You’ve now got a fast, reliable, and elegant TypeScript-powered Node API running on Vercel—no Heroku drama, no long setup!  
Questions or requests for future guides? Drop a comment!  
**GitHub repo:** [Express Typescript Code](#)

<br>

---
**Happy Coding! 🚀**