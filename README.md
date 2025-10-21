# Bolt Portfolio

React + TypeScript single-page application scaffolded with Vite.

## Prerequisites
- Node.js 20+ (npm 10 ships with Node 20)
- Docker (optional, for containerized workflow)

## Local Development
1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`
3. Open the printed URL (defaults to `http://localhost:5173`)

## Quality Checks
- Run the linter: `npm run lint`
- Run the type checker: `npm run typecheck`
- Produce a production build: `npm run build`

## Docker Workflow
All container assets live in `docker/`.

### Build and Run (Docker CLI)
```bash
docker build -f docker/Dockerfile -t bolt-portfolio .
docker run --rm -p 3000:80 bolt-portfolio
```
The app is available at `http://localhost:3000`.

### Build and Run (Docker Compose)
```bash
docker compose -f docker/docker-compose.yml up --build
```
Stop the stack with `docker compose -f docker/docker-compose.yml down`.

### Hot Reload in Docker
```bash
docker compose -f docker/docker-compose.yml up dev
```
This starts a Vite dev server on `http://localhost:5173` with your local source mounted into the container, so code changes reflect immediately. Stop it with `docker compose -f docker/docker-compose.yml down`.

### Configuration Notes
- `docker/Dockerfile` uses a multi-stage build: the app is built with Node 20 and served by Nginx.
- `docker/nginx/default.conf` enables client-side routing by falling back to `index.html`.
- `docker/docker-compose.yml` provides both a production-like Nginx service (port 3000) and a hot-reload dev service (port 5173). Adjust port mappings if needed.
