import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{ // React는 자동적으로 class component의 render method를 실행
  state = { // state는 object, component의 변할 수 있는 data공간
    count: 0
  };
  add = () => {
    //this.setState({count: this.state.count +1});
    this.setState(current => ({count: current.count +1})); // setState를 호출 할때마다 다시 render동작
  };
  minus = () => {
    this.setState(current => ({count: current.count -1}));
  };
  render (){
    return(
    <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}

export default App;
