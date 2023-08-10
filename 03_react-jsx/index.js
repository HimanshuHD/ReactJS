// Declarative Code
// JSX -> JavaScript XML -> HTML within Jacascript
// const elm = <h1 class="header">This is JSX</h1>;
const reactFeatures = (
    <nav>
        <h1 class="header">Hello React!</h1>
        <ul>
            <li>React Composable</li>
            <li>React Declarative</li>
            <li>React JSX</li>
        </ul>
    </nav>
);
ReactDOM.render(
    reactFeatures,
    document.getElementById('app')
);