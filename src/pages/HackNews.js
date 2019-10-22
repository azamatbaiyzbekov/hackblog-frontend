import React, { Component } from 'react';
import axios from 'axios';


const DEFAULT_QUERY = 'Tech';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';

const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}&${PARAM_PAGE}`;


class HackNews extends Component {
constructor(props){
super(props);

this.state = {
  result: null,
  searchTerm: DEFAULT_QUERY,
}
this.setSearchTopStories = this.setSearchTopStories.bind(this);
this.search = this.search.bind(this);
this.onSearchSubmit = this.onSearchSubmit.bind(this);
this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
}

setSearchTopStories(result) {
  const { hits, page } = result;
  const oldHits = page !== 0 ? this.state.result.hits : [];

  const updatedHits = [...oldHits,...hits];

  this.setState({ result: { hits: updatedHits, page}});
}

componentDidMount() {
  const { searchTerm } = this.state;

  this.fetchSearchTopStories(searchTerm);
}

fetchSearchTopStories(searchTerm, page = 0) {
fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`)
    .then(response => response.json())
    .then(result => this.setSearchTopStories(result))
    .catch(error => error);
}

onSearchSubmit(e) {
  const { searchTerm } = this.state;
  this.fetchSearchTopStories(searchTerm);
  e.preventDefault();
  console.log(this.state.result)
}

search(e) {
  this.setState({searchTerm:e.target.value});
}


  render() {
    const { result, searchTerm } = this.state;
    const page = (result && result.page) || 0;

   
    return (
      <div className="page">
      <div className="interactions">
      <Search 
      value={searchTerm}
      onChange={this.search}
      onSubmit={this.onSearchSubmit}
      />

      { result ?  <Table 
      list={result.hits}
      onDel={this.onDel}
      /> 
      : null
      }

     
      </div>
      <button onClick={()=> this.fetchSearchTopStories(searchTerm, page + 1)}>More</button>
      </div>
      
    )}

} 

const Search = ({value, onChange, children, onSubmit}) => 
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} />
      <button type="submit">{children} Search</button>
    </form>



const Table = ({list, onDel}) => {
  return (
    
    <div className="table">
    {list.map(item => {
      return (
      <div className='table-row' key={item.objectID}>
      <span style={{width: '40%'}}><a href={item.url}>{item.title}</a></span>
      <span style={{width: `30%`}}>{item.author}</span>
      <span style={{width: `10%`}}>{item.num_comments}</span>
      <span style={{width: `10%`}}>{item.points}</span>
      <span>
      
      </span>
      </div>
      
      )
    })}
    </div>
  )
}


export default HackNews; 