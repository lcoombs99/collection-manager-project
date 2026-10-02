# Deliverable: Architecture Refactoring

1. DOM Cleanup with Fragments:
   - [x] Audit all JSX component templates across your application. Eliminate unnecessary wrapper <div> elements and replace them with React Fragments (<>...</> or <React.Fragment>) to streamline the rendered DOM tree.
2. Portal Injection:
   - [x] Construct and inject a React Portal using ReactDOM.createPortal to render a floating component (such as a modal dialog, confirmation overlay, floating badge, or notification banner) into an external HTML root target (i.e., portal-root in index.html). Note: Even if a portal is not strictly necessary for your specific project's layout, you must integrate one for technical demonstration.
3. Consolidated State with useReducer:
   - [ ] Identify at least two state variables originally managed via independent useState hooks and consolidate them into a single useReducer hook. You must define a reducer function that handles dispatched action objects to manage these state transitions predictably.
4. Side Effect Implementation with useEffect:
   - [ ] Integrate at least one useEffect Hook to handle a dedicated side effect. Examples include persisting reducer state to localStorage, setting up timers, reacting to specific state changes, or fetching data on mount. Be sure to configure dependency arrays correctly to prevent infinite re-renders.
