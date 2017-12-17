import React, { Component } from 'react';
import logo from '../anaya.svg';


class Toppage extends Component {
  constructor(props) {
     super(props);
     this.state = { x: 0, y: 0, rx: 0, ry:0 };

   }

   _onMouseMove(e) {
       this.setState({ x: e.screenX, y: e.screenY });
       let pageX = window.innerWidth;
       let pageY = window.innerHeight;
       let rotateY = (pageX/2-this.state.y)/pageY*15;
       let rotateX = -(pageX/2-this.state.x)/pageX*15;
       this.setState({ rx : rotateX, ry : rotateY })
     }

  render() {
    return (
      <div id={this.props.id}className={"App full "+ this.props.color+ ' '+this.props.className} onMouseMove={this._onMouseMove.bind(this)}>
        <div style={{'margin':'auto', 'transform' : 'translateX(0%) translateY(-0%) scale(1) perspective( 1960px ) rotateY('+this.state.rx+'deg) rotateX('+this.state.ry+'deg)' }}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
          <h1 className="App-title" >Welcome to Anaya</h1>
        <p className="App-intro">
         Invoque moi ,et je te répondrai, je t’annoncerai de grandes choses, des choses cachées que tu ne connais pas .
Jeremie 33. 3
        </p>
      </div>
    );
  }
}


export default Toppage
