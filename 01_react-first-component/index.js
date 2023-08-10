function FirstComponent() {
    return (
        <div>
            <h1>Features of React:</h1>
            <ul>
                <li>JSX (JavaScript Syntax Extension)</li>
                <li>Virtual DOM</li>
                <li>One-way data binding</li>
                <li>Performance</li>
                <li>Components</li>
            </ul>
        </div>
    );
}

ReactDOM.render(
    <div>
        <FirstComponent />
    </div>,
    document.getElementById('app')
);