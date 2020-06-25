import React, { Component } from "react";
import { Remarkable } from "remarkable";

export default class Markdown extends Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.md.set({
        breaks: true
    })

    this.state = {
      value: `# iMarker
## A fully functional Markdown editor and previewer
iMarker © 2020 a Product from [Darbaz Ali](https://darbaz.design)
      `,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this)
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleClear() {
    const target = document.getElementById("editor");
    target.value = "";
    target.focus()
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }

  render() {
    return (
      <div className="MarkdownEditor">
          <div id="header">
            <button onClick={this.handleClear} className="btn">Clear</button>
            <a href="/"><h2 id="title" className="header-row">iMarker</h2></a>
          </div>
       

          <div id="sections">
                <textarea
                id="editor"
                onChange={this.handleChange}
                defaultValue={this.state.value}
                />
                <div
                id="preview"
                className="content"
                dangerouslySetInnerHTML={this.getRawMarkup()}
                />
          </div>
        
      </div>
    );
  }
}
