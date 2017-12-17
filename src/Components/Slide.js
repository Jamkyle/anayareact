import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class Slide extends Component {

  render(){
    return (
      <ReactCSSTransitionGroup
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
          transitionName={this.props.sens} style={{'textAlign':'left','display':'inline-block', 'width':'200%',}}>
          <div key={this.props.color} className={"rect " + this.props.color } >
            <h1> {this.props.color} </h1>
            {this.props.page}
          </div>

      </ReactCSSTransitionGroup>

    )
  }
}
