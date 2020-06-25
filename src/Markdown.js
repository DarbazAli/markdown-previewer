import React, { Component } from "react";
import { Remarkable } from "remarkable";
// import { defaultText } from "./defaultText";

export default class Markdown extends Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.md.set({
        breaks: true
    })

    this.state = {
      value: `# Hello World! 
## Enjoi your note taking
iMarker © 2020 a Product from [Darbaz Ali](https://darbaz.design)
      `,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this)
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleClear(e) {
    const target = document.getElementById("editor");
      
      this.setState({ value: ''} )
      target.value= this.state.value;
  }

  UNSAFE_componentWillMount() {
    // this.setState({ value: defaultText.text });
  }
  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }

  render() {
    return (
      <div className="MarkdownEditor">
          <div id="header">
            <button onClick={this.handleClear} className="btn">Clear</button>
            <h2 id="title" className="header-row">iMarker</h2>
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
