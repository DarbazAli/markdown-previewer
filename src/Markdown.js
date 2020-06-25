import React, { Component } from "react";
import { Remarkable } from "remarkable";
import { defaultText } from "./defaultText";

export default class Markdown extends Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  UNSAFE_componentWillMount() {
    this.setState({ value: defaultText.text });
  }
  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <label htmlFor="editor">Enter some markdown</label>
        <textarea
          id="editor"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div
          id="preview"
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}
