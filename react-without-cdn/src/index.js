import React from "react";
// ReactDOM.render is no longer supported in React 18. Use createRoot instead.
// Until you switch to the new API, your app will behave as if it’s running React 17.
// import { render } from "react-dom";

// Use this instead...
import { createRoot } from 'react-dom/client';

const reactFeatures = (
    <nav>
        <h1 className="header">Hello React!</h1>
        <ul>
            <li>React Composable</li>
            <li>React Declarative</li>
            <li>React JSX</li>
        </ul>
    </nav>
);

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(reactFeatures);