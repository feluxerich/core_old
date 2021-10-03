import SyntaxHighlighter from "react-syntax-highlighter";

function CodeHighlighter({ value, language }) {
    return (
        <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>
    )
}

export default CodeHighlighter;