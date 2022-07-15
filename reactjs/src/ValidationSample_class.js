import { Component } from "react";
import React from "react";
import "./ValidationSample.css";

class ValidationSample_class extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input.focus(); // 콜백함수로 만들면 current 사용 X
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

// createRef를 통한 ref 설정
// class RefSample extends Component {
//   input = React.createRef();

//   handleFocus = () => {
//     this.input.current.focus(); // createRef 사용 시 current 꼭 적기
//   };

//   render() {
//     return (
//       <div>
//         <input ref={this.input} />
//       </div>
//     );
//   }
// }

export default ValidationSample_class;
// export default RefSample;
