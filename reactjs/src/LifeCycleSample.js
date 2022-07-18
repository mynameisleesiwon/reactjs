import { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  // 컴포넌트가 마운트 될때와 업데이트 될때 호출
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  // props 또는 state를 변경했을 때 호출 , true || false를 반환
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다. -> false면 render()함수 실행 X
    return nextState.number % 10 !== 4;
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  render() {
    console.log("render");

    const style = {
      color: this.props.color,
    };
    return (
      <div>
        {/* 없는 props인 missing -> 에러 발생 */}
        {this.props.missing.value}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }

  // 컴포넌트를 만들고 첫 렌더링을 다 마친 후 실행
  componentDidMount() {
    console.log("componentDidMount");
  }

  // render에서 만들어진 결과물이 브라우저에 실제 반영되기 직전에 호출
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  // 리렌더링을 완료한 후 실행
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  // 컴포넌트를 DOM에서 제거할 때 호출됨
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트되기 직전 색상: ", snapshot);
    }
  }
}

export default LifeCycleSample;
