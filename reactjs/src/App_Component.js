import logo from "./logo.svg";
import "./App.css";
import { Component, Fragment } from "react";
import MyComponent from "./Mycomponent";
import Counter_class from "./Counter_class";
import Say_function from "./Say_function";

// function App() {
//   const name = "리액트";
//   return <div className="react">{name}</div>;
// }

// 1. 클래스형 컴포넌트

// class App extends Component {
//   // render() 필수
//   render() {
//     const name = "react";
//     return <div className="react">{name}</div>;
//   }
// }

// 2. props

// 2.1 - 컴포넌트를 사용할 때 props 값 지정
// const App = () => {
//   return <MyComponent name="React"></MyComponent>;
// };

// 2.2 - 태그 사이의 내용을 보여주는 children
const App = () => {
  // return <MyComponent>리액트</MyComponent>;
  // return <Counter_class></Counter_class>;
  return <Say_function></Say_function>;
};

export default App;
