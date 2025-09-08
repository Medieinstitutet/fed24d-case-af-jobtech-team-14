## 1️⃣ Branch Naming Convention

| Prefix       | Purpose                                   | Example                           |
|-------------|-------------------------------------------|-----------------------------------|
| `feature/`  | New feature or user story                 | `feature/123-login-form`          |
| `bugfix/`   | Bug fix                                   | `bugfix/456-navbar-layout`        |
| `hotfix/`   | Urgent fix on main branch                  | `hotfix/789-crash-on-startup`    |
| `chore/`    | Maintenance, dependencies, tooling        | `chore/update-dependencies`       |
| `refactor/` | Code cleanup/refactoring                   | `refactor/auth-service`           |
| `test/`     | Adding or updating tests                   | `test/login-specs`                |

**Tips:**
- Use **lowercase and hyphens**.  
- Include **issue/task numbers** if available.  
- Keep branch names short but descriptive.  

---

## 2️⃣ Commit Message Convention

Use **Conventional Commits** style:

**Types:**

| Type       | Purpose                                   | Example                                     |
|------------|------------------------------------------|---------------------------------------------|
| `feat`     | New feature                               | `feat(auth): add login with Google`        |
| `fix`      | Bug fix                                   | `fix(navbar): correct mobile layout`       |
| `docs`     | Documentation                             | `docs(readme): update installation steps` |
| `style`    | Formatting, no code changes               | `style(button): fix indentation`           |
| `refactor` | Code refactoring                          | `refactor(api): simplify fetch logic`      |
| `test`     | Adding or updating tests                  | `test(auth): add login unit tests`         |
| `chore`    | Build tools, dependencies, non-functional | `chore(deps): update react version`        |

**Rules:**
- Use **imperative mood** (e.g., `Add login form`).  
- Keep **summary ≤50 characters**.  
- Optional body explains **why** the change is made.  
- Footer can reference issues: `Closes #123`.  

---

## 3️⃣ Pull Request Naming

**Format:**

**Examples:**
- `Feat: Add login with Google (#123)`  
- `Fix: Correct navbar layout (#456)`


## File Structuring Rules (React + TypeScript)

---

## 4️⃣ Inside `src/`
- `assets/` → Images, fonts, global assets
- `components/` → Reusable UI components
-  `styled/` → Styled component definitions for encapsulated, component-scoped styling
- `pages/` → Page-level components (route views)
- `hooks/` → Custom React hooks
- `utils/` → Helper functions and utilities
- `variables/` → constants, config values, enums, breakpoints, colors, etc. (e.g., `export const API_BASE_URL = 'https://api.example.com';`)
- `services/` → API calls and external integrations
- `contexts/` → React Context providers and related logic
- `models/` → TypeScript interfaces and types
- `styles/` → Global styles and themes
- `main.tsx` → Application entry point
- `App.tsx` → Root app component

---

## 5️⃣ File Naming
- **Components:** `ComponentName.tsx`
- **Hooks:** `useHookName.ts`
- **Utilities:** `function-name.ts`
- **Services:** `service-name.ts`
- **Contexts:** `ContextNameContext.tsx`
- **Models:** `model-name.ts`
- **Styles:** `component-name.css` (or `.scss`)

---
