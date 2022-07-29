import '../styles/App.css';
import Editor from "@monaco-editor/react";

export const QueryEditor = () => {
    const handleChange = (value: string | undefined) => {
        console.log("handleChange", value)
    }
    return (
        <div id="base-query">  
            <Editor
                defaultLanguage="sql"
                defaultValue="SELECT * FROM example;"
                theme="vs-dark"
                options={
                    {
                        wordWrap: 'on',
                        minimap: {
                            enabled: false
                        },
                        showUnused: false,
                        folding: false,
                        lineNumbersMinChars: 3,
                        fontSize: 20,
                        scrollBeyondLastLine: false,
                        automaticLayout: true
                    }
                }
                onChange={handleChange}
                loading={"SQL-Editor..."}
            />
        </div>
    )
}