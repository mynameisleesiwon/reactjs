import PropTypes from "prop-types";
import { Component } from "react";

// 컴포넌트 생성
// const MyComponent = () => {
//   return <div>나의 새롭고 멋진 컴포넌트</div>;
// };

// props

// JSX 내부에서 props 렌더링
// const MyComponent = (props) => {
//   return <div>안녕하세요, 제 이름은 {props.name}</div>;
// };

// 태그 사이의 내용을 보여 주는 children
// const MyComponent = (props) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {props.name}
//       <br></br>
//       children 값은 {props.children}
//       입니다.
//     </div>
//   );
// };

// 비구조화 할당 문법을 통해 props 내부 값 추출
// const MyComponent = (props) => {
//   const { name, children } = props;
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}
//       <br></br>
//       children 값은 {children}
//       입니다.
//     </div>
//   );
// };

// 다른 방법
// const MyComponent = ({ name, children, favoriteNumber }) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}
//       <br></br>
//       children 값은 {children}
//       입니다.
//       <br />
//       제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//   );
// };

// 클래스형 컴포넌트에서 props 사용
class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name}
        <br></br>
        children 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

// propTypes를 통한 props 검증
// 컴포넌트의 필수 props를 지정하거나 props의 타입을 지정할 때 사용
MyComponent.propTypes = {
  name: PropTypes.string, // name 값은 무조건 문자열(string) 형태로 전달
  favoriteNumber: PropTypes.number.isRequired, // propTypes를 지정하지 않았을 때 경고 메세지 띄움
};

// props 기본값 설정
MyComponent.defaultProps = {
  name: "기본 이름",
};
export default MyComponent;
