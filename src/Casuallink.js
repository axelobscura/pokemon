import React, {Component} from 'react';

class Casuallink extends Component{
  constructor(props){
    super(props);
    this.state = {num: 1};
    this.genRandom = this.genRandom.bind(this);
  }
  genRandom(){
    let rand = Math.floor(Math.random() * 10) + 1;
    this.setState({num: rand});
  }
  render(){
    return(
      <div className="App">
        <h2>CLICKER</h2>
        <h3>Number is: { this.state.num }</h3>
        {this.state.num === 7 ? <h2>YOU WIN!</h2> : <button onClick={this.genRandom}>RANDOM NUMBER</button>}
      </div>
    )
  }
}

export default Casuallink;