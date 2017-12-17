import React, { Component } from 'react';
import {connect} from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../css/slidingBar.css'

class NavVrt extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const { currentPage } = this.props
    console.log(currentPage);
    return (
      <div className='NavVrt'>
        { currentPage.currentPage }
      </div>
    )
  }
}

export default connect(
  state => ({currentPage : state.currentPage}),
  dispatch => ({
    go : (e) => { dispatch({type : 'CHANGE_PAGE', page : e }) }
  })
)(NavVrt)
