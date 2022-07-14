import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";

function App() {
  const name = "리액트";
  const style = {
    // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };
  return (
    // 1. JSX

    // 1.1 - 요소가 여러 개인 경우 부모 요소 하나에 의해 감싸져 있거나

    // <div>
    //   Hello <b>react</b>
    // </div>

    // Fragment 사용
    // <>도 가능

    // <Fragment>
    //   <h1>리액트 안녕!</h1>
    //   <h2>잘 작동하니</h2>
    // </Fragment>

    // 1.2 - 자바스크립트 표현
    // JSX 내부에서 코드를 {}로 감싸면 됨

    // <>
    //   <h1>{name} 안녕!</h1>
    //   <h2>잘 작동하니?</h2>
    // </>

    // 1.3 - if문 대신 조건부 연산자
    // JSX 내부의 자바스크립트 표현식에서 if문 사용 불가
    // 삼항 연산자 이용

    // <div>
    //   {name === "리액트" ? (
    //     <h1>리액트 입니다.</h1>
    //   ) : (
    //     <h2>리액트가 아닙니다.</h2>
    //   )}
    // </div>

    // AND 연산자(&&)를 사용한 조건부 렌더링

    // <div>{name === "리액트" ? <h1>리액트입니다.</h1> : null}</div>
    // <div>{name === "리액트" && <h1>리액트입니다.</h1>}</div>

    // 1.4 - 인라인 스타일링
    // 리액트에서 DOM 요소에 스타일을 적용할 때는 객체 형태로 넣기
    // <div style={style}>{name}</div>

    // 1.5 - className

    <div className="react">{name}</div>
  );
}

export default App;
