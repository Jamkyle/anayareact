import React, { Component } from 'react';
import {connect} from 'react-redux'
import Slide from './Slide'
import Media from '../ContentPage/Media'
import NavBarHrz from './NavBarHrz'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ContentPage extends Component {

  constructor(props){
    super(props);

    this.state = { content : this.props.slidePage.page, sens: this.props.slidePage.sens} //index nav
  }

  render(){
    const {slidePage, color, id} = this.props
    const content = ['red','blue','green']
    var show =  content[slidePage.page] //recupere state depuis nav
  return (
    <div id={id} className={'App full' + color + ' '+ this.props.className}>
      <div className='App-title'> Presentation </div>
      <NavBarHrz listMenu={content}/>
      {/*<nav>
        <a href='javascript: void(0)' onClick={()=> this.changeBlock(0)} >link 1</a>
        <a href='javascript: void(0)' onClick={()=> this.changeBlock(1)}>link 2</a>
        <a href='javascript: void(0)' onClick={ ()=> this.changeBlock(2)}>link 3</a>
      </nav>*/}

      <Slide color={show} page={<Media /> /*on concat le composant voulu*/} sens={slidePage.sens}/>
    </div>
  )}
}

export default connect(
  state => ({ slidePage : state.slidePage}),
  dispatch => ({

 })
)(ContentPage)
