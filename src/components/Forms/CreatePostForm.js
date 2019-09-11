import React, { Component } from 'react';

class CreatePostForm extends Component {
  constructor() {
    super();
    this.state = {
      // post: [],
      title: '',
      content: '',
      
    };
  };
  
  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  
  onFormSubmit = (event) => {
    
    event.preventDefault();
    let post = {title: this.state.title, content: this.state.content};
    console.log(post)
    this.props.createPost(post);
   
  };
  
  render() {
    return (
    <>
      <form onSubmit={this.onFormSubmit}>
        <div className="form-group">
          <label htmlFor="title">title</label>
          <input name="title" type="title" value={this.state.title} onChange={this.onInputChange}className="form-control" id="picture" placeholder=""/>
        </div>
        <div className="form-group">
          <label htmlFor="content">content</label>
          <input  name="content" type="content" value={this.state.content} onChange={this.onInputChange}className="form-control" id="pace" placeholder=""/>
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
      
    </>
  
    );
  };
};

export default CreatePostForm;