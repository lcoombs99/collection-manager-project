# Technical Requirements & Functionality
Follow these minimum specifications to complete your project. You can go beyond these requirements, but your project must meet all core criteria:

## Minimum Requirements
### 1. User Input: 
- [ ] Include a text input or text area field with a submit button that allows users to add a new item to their collection.
### 2. Dynamic List Rendering: 
- [ ] Display submitted items dynamically on the page (using a list, grid, or column/row layout).
### 3. Item Deletion: 
- [ ] Allow the user to delete an item from the collection by clicking on it.
_*Note: Implementing this functionality may require a bit of independent research and problem-solving, but it uses core principles you already know and is fully within your abilities._
### 4. Form Validation & Error Handling: 
- [ ] Prevent empty submissions. If a user tries to submit a blank field, 
  - [ ] block the submission and 
  - [ ] display a clear visual error message or visual indicator notifying them of the issue.
### 5. Presentation & Styling: 
- [ ] Style the application to look presentable, clean, and user-friendly using CSS, styled-components, or CSS Modules.
### 6. Custom Innovation Feature (Student Choice):
- [ ] Add one unique feature not listed above to enhance the application's functionality (i.e., an item counter, a search/filter bar, a favorite/star toggle, or local storage persistence).
- [ ] Identification Requirement: You must clearly mark this feature on the UI so it can be easily identified during live grading. Place a distinct label or badge with text such as "NEW", "Custom Feature", or "Extra Feature" directly next to or above your custom addition.

# Deliverable: Architecture Refactoring

1. DOM Cleanup with Fragments:
   - [x] Audit all JSX component templates across your application. Eliminate unnecessary wrapper <div> elements and replace them with React Fragments (<>...</> or <React.Fragment>) to streamline the rendered DOM tree.
2. Portal Injection:
   - [x] Construct and inject a React Portal using ReactDOM.createPortal to render a floating component (such as a modal dialog, confirmation overlay, floating badge, or notification banner) into an external HTML root target (i.e., portal-root in index.html). Note: Even if a portal is not strictly necessary for your specific project's layout, you must integrate one for technical demonstration.
3. Consolidated State with useReducer:
   - [ ] Identify at least two state variables originally managed via independent useState hooks and consolidate them into a single useReducer hook. You must define a reducer function that handles dispatched action objects to manage these state transitions predictably.
4. Side Effect Implementation with useEffect:
   - [ ] Integrate at least one useEffect Hook to handle a dedicated side effect. Examples include persisting reducer state to localStorage, setting up timers, reacting to specific state changes, or fetching data on mount. Be sure to configure dependency arrays correctly to prevent infinite re-renders.
