import React from "react";
import { render } from "react-dom";
import Markdown from "./Markdown";

const App = () => {
  return (
    <div>
      <Markdown />
    </div>
  );
};

render(<App />, document.getElementById("root"));
