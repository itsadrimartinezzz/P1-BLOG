# Project Guidelines

## Code Style
- Use kebab-case for HTML IDs and CSS classes
- Use camelCase for JavaScript variables and functions
- Include Spanish comments for university project consistency
- Plain ES6 modules without bundlers or frameworks

## Architecture
- Single entry point: `js/app.js` handles routing based on `window.location.pathname`
- Three-tier structure: API layer (`js/api/`), modules (`js/modules/`), utils (`js/utils/`)
- Data flow: API → Filter → Render, with updates triggered by user inputs
- Minimal state management: pagination in module scope, filters read directly from DOM

## Build and Test
- No build process required - static frontend
- Run with HTTP server to enable ES6 modules: `python -m http.server 8000` or `npx http-server`
- No automated tests - manual testing only

## Conventions
- Direct navigation via `window.location.href` (no router library)
- Real-time filtering on every keystroke (consider debouncing for performance)
- Event delegation for dynamic content
- Placeholder files for future features (createApi.js, form.js, etc.)

See [README.md](README.md) for project description and objectives.</content>
<parameter name="filePath">c:\Users\Elvir\OneDrive\Desktop\Sistemas y tecnologías web\P1-BLOG\.github\copilot-instructions.md