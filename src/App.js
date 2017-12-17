import React, { Component } from 'react';
import {connect } from 'react-redux'
import Toppage from './Components/Toppage'
import NavVrt from './Components/NavVrt'
import ContentPage from './Components/ContentPage'
import './css/App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = { pages : [], currentPage : 'Home' }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    console.log(this);
    this.setState({ pages : Array.from(document.getElementsByClassName('Pages')) })
  }

  handleScroll(){
    var winHeight = window.innerHeight;
    var body = document.body;
    var html = document.documentElement;
    var docHeight = Math.max( body.scrollHeight, body.offsetHeight,
                   html.clientHeight, html.scrollHeight, html.offsetHeight );
    var currentOffset = window.pageYOffset

    var currentPage = this.state.pages.map(e=>{
      if(currentOffset === e.offsetTop)
        this.props.dispatch({type: 'GET_CURRENT_PAGE', current : e.id})
    })
    // if(currentOffset === this.state.pages[1].offsetTop)
    //   this.props.dispatch({type: 'GET_CURRENT_PAGE', current : this.state.pages[1].id})

  }

render(){
  return(
    <div className='App full'>
      <Toppage color='blue' id='Home' className='Pages'/>
      <NavVrt />
      <ContentPage color='' id='Presentation' className='Pages'/>
    </div>
)
}
}

export default connect(
  state => state,
  dispatch => ({dispatch})
)(App);
