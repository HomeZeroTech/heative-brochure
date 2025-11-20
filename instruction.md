# AI Agent Instructions: Sales Widget Template

**Role**: You are an expert React Developer and UX Designer.
**Goal**: Build a high-quality, responsive, and interactive sales widget for the Pico platform based on the user's request.

## 1. Technical Context & Constraints

### Environment

-   **Container**: The widget renders inside a `<div id="pico-widget-container"></div>`.
-   **Isolation**: Do NOT assume you control the `<body>` or `<html>`. You are a guest on a host page.
-   **Responsiveness**: The widget MUST be 100% fluid width. It will be placed in containers of varying sizes (mobile to desktop).
    -   **CRITICAL**: Do NOT add outer padding or margins to your main container. The host environment handles spacing. Your widget should fill the available space completely.
-   **Tech Stack**:
    -   **Framework**: React 18.
    -   **Build Tool**: Vite.
    -   **Styling**: Vanilla CSS (imported in JS) or CSS Modules.
    -   **Output**: `npm run build` bundles everything (JS + CSS) into a single file (`docs/widget.js`).

### File Structure

-   `src/widget.jsx`: **ENTRY POINT**. This mounts the React app to the container.
-   `src/App.jsx`: **MAIN COMPONENT**. Start building your UI here.
-   `src/widget.css`: Global styles.
-   `test.html`: **TEST HARNESS**. Use this to preview the widget locally.
-   `docs/widget.js`: **OUTPUT**. The final build artifact.

**Note**: You are free to create additional components (e.g., `src/components/Calculator.jsx`) and files as needed. The build system will bundle them all.

## 2. Development Workflow

### Step 1: Analyze & Plan

-   Understand the user's feature request.
-   Plan your component structure.

### Step 2: Implement

-   **Modify `src/App.jsx`**:
    -   Build your main UI here.
    -   Break down complex logic into smaller components if needed.
-   **Modify `src/widget.css`**:
    -   Write clean, scoped CSS.
    -   Use specific class names (e.g., `.pico-widget-card`) to avoid conflicts with the host page.
    -   **Design**: Use modern, premium aesthetics (shadows, rounded corners, smooth transitions) unless requested otherwise.

### Step 3: Verify

-   **Run Local Server**:
    -   Command: `npm run start`
    -   URL: `http://localhost:5173/test.html`
-   **Check Behavior**:
    -   Does it render correctly in the test harness?
    -   Is it responsive?
    -   Are there console errors?

### Step 4: Build

-   **Command**: `npm run build`
-   This updates `docs/widget.js`.

## 3. API & Data Integration

If the user asks for sending data to the pico server:

-   **Public API**: Use the Pico Public API for standard operations.
-   **Documentation**: [Public API Documentation](https://homezero.notion.site/Public-API-Client-to-Server-2b1a996b351c804d8bc1f3bb70da2172)
-   **Mocking**: If no API key is provided, request the user for one.

## 4. Critical Rules for AI

1.  **React Best Practices**: Use functional components and Hooks (`useState`, `useEffect`).
2.  **NO External UI Libraries**: Do not install heavy UI libraries (MUI, Bootstrap) unless explicitly asked. Keep it lightweight.
3.  **NO HTML Files**: Do not create new `.html` files. The widget is rendered via React.
4.  **Error Handling**: Always add try/catch blocks for network requests and UI error boundaries.
5.  **Aesthetics & Partner Branding**:
    -   **Partner-Specific Design**: Most widgets are for specific partners. You MUST match their branding (colors, border-radius, etc.).
    -   **Missing Guidelines**: If you don't have design guidelines, **ASK the user for the partner's website URL**. Use that website to infer the color palette, border-radius, and general vibe.
    -   **Inheritance**:
        -   **Fonts**: Do NOT import fonts unless explicitly asked. Allow the widget to inherit the font-family from the host website (`font-family: inherit;`).
        -   **Global Styles**: Be aware that the widget will be embedded in a host page. It should blend in but also look distinct enough to be functional.
    -   **Defaults**: If no partner is specified, default to a "Premium/Modern" design with a cohesive palette and consistent spacing (4px/8px/16px grid).
