import "./App.css";
import { Component, Fragment } from "react";
import ValidationSample_class from "./ValidationSample_class";
import RefSample from "./ValidationSample_class";
import ScrollBox_class from "./ScrollBox_class";

class App_ref extends Component {
  render() {
    // return <ValidationSample_class></ValidationSample_class>;
    // return <RefSample></RefSample>;
    return (
      <div>
        <ScrollBox_class ref={(ref) => (this.scollBox = ref)}></ScrollBox_class>
        <button onClick={() => this.scollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App_ref;
