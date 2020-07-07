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

// Add Tab support for editor

function insertAtCursor(myField, myValue) {
  //IE support
  if (document.selection) {
    myField.focus();
    sel = document.selection.createRange();
    sel.text = myValue;
  }
  //MOZILLA and others
  else if (myField.selectionStart || myField.selectionStart == "0") {
    var startPos = myField.selectionStart;
    var endPos = myField.selectionEnd;
    myField.value =
      myField.value.substring(0, startPos) +
      myValue +
      myField.value.substring(endPos, myField.value.length);
    myField.selectionStart = startPos + myValue.length;
    myField.selectionEnd = startPos + myValue.length;
  } else {
    myField.value += myValue;
  }
}

function addTabSupport(elementID, tabString) {
  // Get textarea element
  var myInput = document.getElementById(elementID);

  // At keydown: Add tab character at cursor location
  function keyHandler(e) {
    var TABKEY = 9;
    if (e.keyCode == TABKEY) {
      insertAtCursor(myInput, tabString);
      if (e.preventDefault) {
        e.preventDefault();
      }
      return false;
    }
  }

  // Add keydown listener
  if (myInput.addEventListener) {
    myInput.addEventListener("keydown", keyHandler, false);
  } else if (myInput.attachEvent) {
    myInput.attachEvent("onkeydown", this.keyHandler); /* damn IE hack */
  }
}

// easily add tab support to any textarea you like
addTabSupport("editor", "\t");
