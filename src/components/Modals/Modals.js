import React, {Component} from 'react';
import CreatePostForm from '../Forms/CreatePostForm';

class Modal extends Component {
    render () {
        return (
           
<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog" role="document">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel">Add Blog</h5>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
    <CreatePostForm  createPost={this.props.createPost}/>

    </div>
    
  </div>
</div>
</div>
        )
    }
}

export default Modal;