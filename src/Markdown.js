import React, { useState } from "react";
import { Remarkable } from "remarkable";

import Editor from "./Editor";
import Previewer from "./Previewer";
import { defautlVal } from "./defautlVal";

export default function Markdown() {
  const md = new Remarkable();
  const [value, setValue] = useState(defautlVal);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleClear() {
    const target = document.getElementById("editor");
    target.value = "";
    target.focus();
  }

  function getRawMarkup() {
    return { __html: md.render(value) };
  }

  return (
    <div className="MarkdownEditor">
      <div id="header">
        <button onClick={handleClear} className="btn">
          Clear
        </button>
        <a href="/">
          <h2 id="title" className="header-row">
            iMarker
          </h2>
        </a>
      </div>

      <div id="sections">
        <Editor handleChange={handleChange} value={value} />

        <Previewer getRawMarkup={getRawMarkup} />
      </div>
    </div>
  );
}
