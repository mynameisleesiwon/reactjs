import { Component } from "react";
// state
// 컴포넌트 내부에서 바뀔 수 있는 값

// 클래스 형 컴포넌트의 state
// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     // state의 초깃값 설정
//     this.state = {
//       number: 0,
//       fixedNumber: 0,
//     };
//   }
//   render() {
//     const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회
//     return (
//       <div>
//         <h1>{number}</h1>
//         <h2>바뀌지 않는 값: {fixedNumber}</h2>
//         <button
//           // onClick을 통해 버튼이 클릭되었을 때 호출할 함수 지정
//           onClick={() => {
//             // this.setState를 사용해 state에 새로운 값 넣음
//             this.setState({ number: number + 1 });
//           }}
//         >
//           +1
//         </button>
//       </div>
//     );
//   }
// }

// state를 counstructor에서 꺼내기
// class Counter extends Component {
//   state = {
//     number: 0,
//     fixedNumber: 0,
//   };
//   render() {
//     const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회
//     return (
//       <div>
//         <h1>{number}</h1>
//         <h2>바뀌지 않는 값: {fixedNumber}</h2>
//         <button
//           // onClick을 통해 버튼이 클릭되었을 때 호출할 함수 지정
//           onClick={() => {
//             // this.setState를 사용해 state에 새로운 값 넣음
//             // this.setState({ number: number + 1 });

//             this.setState((prevState) => {
//               return {
//                 number: prevState.number + 1,
//               };
//             });
//             // 함수에서 바로 객체 반환
//             // 위 코드와 같은 기능
//             this.setState((prevState) => ({
//               number: prevState.number + 1,
//             }));
//           }}
//         >
//           +1
//         </button>
//       </div>
//     );
//   }
// }

// this.setState가 끝난 후 특정 작업 실행
class Counter_class extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수 지정
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("방금 setState가 호출되었습니다.");
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter_class;
