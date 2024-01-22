import { useState } from "react";
import { marked } from "marked";
import "./App.css";

function App() {
  const welcomeText = ` # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_** 
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)  
  `

  const [editorText, setEditorText] = useState(welcomeText);

  const handleEditorText = (event) => {
    setEditorText(event.target.value);
  };

  function getMarkdownText() {
    var rawMarkup = marked.parse(editorText);
    return { __html: rawMarkup };
  }

  return (
    <div className="parent-wrapper">
      <div className="wrapper">

        <div className="section-title">
          <p><i class="fa-brands fa-free-code-camp"></i> Editor</p>
        </div>

        <textarea
          id="editor"
          value={editorText}
          onChange={handleEditorText}
        ></textarea>

      </div>

      <div className="wrapper">

        <div className="section-title">
          <p><i class="fa-brands fa-free-code-camp"></i> Previewer</p>
        </div>

        <div id="preview" dangerouslySetInnerHTML={getMarkdownText()}>
        </div>

      </div>
    </div>
  );
}

export default App;
