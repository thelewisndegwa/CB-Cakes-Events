# CB Cakes & Events

Portfolio site for CB Cakes & Events, a cake and events studio in Mombasa.

## Develop

```bash
npm install
node .\node_modules\vite\bin\vite.js
```

The project folder name contains `&`. On Windows, `npm run` can fail because of that character, so start Vite with `node` directly.

## Build

```bash
node .\node_modules\typescript\bin\tsc --noEmit
node .\node_modules\vite\bin\vite.js build
```

Photographs live in `public/images`. Replace or add files there, then update the entries in `src/data/site.ts`.
