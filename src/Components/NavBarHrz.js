import React, { Component } from 'react';
import {connect} from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../css/slidingBar.css'
class NavBarHrz extends Component{
  constructor(props){
    super(props)
    this.state = { width : 0, margin: 0}
  }

  componentDidMount(){
    this.setState({width:this.refs.navBar.firstChild.offsetWidth})
  }

  onHover(e){
    if(e.target.tagName === 'A')
      this.setState({ width : e.target.parentElement.offsetWidth, margin : e.target.parentElement.offsetLeft - this.refs.navBar.offsetLeft })
    else if (e.target.tagName === 'LI') {
      this.setState({ width : e.target.offsetWidth, margin : e.target.offsetLeft - this.refs.navBar.offsetLeft })

    }
  }



  render(){
    const { go, listMenu, slidePage } = this.props
    const doList = listMenu.map((e, i)=>{
      return <li key={i} onClick={ () => go(i) }><a href='javascript: void(0)'  className={ i == slidePage.page ? 'active' : null }>{e}</a></li>
    })
    return (
      <nav>
        <ul ref='navBar' onMouseOver={ this.onHover.bind(this) }>
          {doList}
        <hr id='slidingLine' style={{ 'width': this.state.width, 'marginLeft' : this.state.margin }} />
        </ul>
      </nav>
    )
  }
}

export default connect(
  state => ({slidePage : state.slidePage}),
  dispatch => ({
    go : (e) => { dispatch({type : 'CHANGE_PAGE', page : e }) }
  })
)(NavBarHrz)
