import React,{ useState, useEffect } from 'react';
import Editor from './Editor'

function App() {
  // const [html, setHtml] = useLocalStorage('html', '')
  // const [css, setCss] = useLocalStorage('css', '')
  // const [js, setJs] = useLocalStorage('js', '')
  const [html, setHtml]=useState('')
  const [css, setCss]=useState('')
  const [js, setJs] =useState('')
  return (
    <>
    <div className="pane top-pane">
    <Editor
          language="xml"
          title="HTML"
          value={html}
          onChange={setHtml}
        />
      <Editor
          language="css"
          title="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          title="JS"
          value={js}
          onChange={setJs}
        />
    </div>
    <div className="pane">
    <iframe
    title="output"
    sandbox="allow-scripts"
    frameBorder="0"
    width="100%"
    height="100%"
    />
    </div>
    </>
  )
}

export default App;
