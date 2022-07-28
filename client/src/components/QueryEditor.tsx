import '../styles/App.css';
import Editor from "@monaco-editor/react";

export const QueryEditor = () => {
    return (
        <div id="base-query">  
            <Editor
                defaultLanguage="sql"
                defaultValue="SELECT * FROM example;"
                theme="vs-dark"
            />
        </div>
    )
}