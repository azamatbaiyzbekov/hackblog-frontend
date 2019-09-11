import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../constants';
import './News.css';



class News extends Component {
  state = {
    hackerNews: [],
  };


 

  componentDidMount() {
    axios.get(`https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-11&sortBy=publishedAt&apiKey=1010fa308cf641519d26d46d577e64b2`)
    .then(res=> {
    console.log(res.data)
      this.setState({hackerNews: res.data})
      // console.log(this.state)
    })
    .catch(err=>console.log(err))
  }

  render() {

    
       return (
         <div key="stories">
           <h4 key="title">{this.state.hackerNews}</h4>
         </div>
       )
     
     
    
  };
};

export default News; 