import { Component } from "react";

// onChange 이벤트 설정
// class EventPractice extends Component {
//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           onChange={(e) => {
//             console.log(e);
//           }}
//         />
//       </div>
//     );
//   }
// }

// state에 input 값 담기
// class EventPractice extends Component {
//   state = {
//     message: "",
//   };
//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           onChange={(e) => {
//             this.setState({
//               message: e.target.value,
//             });
//           }}
//         />
//         <button
//           onClick={(e) => {
//             alert(this.state.message);
//             this.setState({
//               message: "",
//             });
//           }}
//         >
//           확인
//         </button>
//       </div>
//     );
//   }
// }

// 임의 메서드 만들기
// class EventPractice extends Component {
//   state = {
//     message: "",
//   };

//   handleChange = (e) => {
//     this.setState({
//       message: e.target.value,
//     });
//   };

//   handleClick = () => {
//     alert(this.state.message);
//     this.setState({
//       message: "",
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// input 여러 개 다루기
class EventPractice extends Component {
  state = {
    username: "",
    message: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value, // 객체 안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용
    });
  };

  handleClick = () => {
    alert(this.state.username + ": " + this.state.message);
    this.setState({
      username: "",
      message: "",
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}
export default EventPractice;
