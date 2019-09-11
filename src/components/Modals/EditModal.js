import React, {Component} from 'react';
import CreateEditForm from '../Forms/CreateEditForm';

class EditModal extends Component {
    render () {
        return (
           
<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog" role="document">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel">Edit</h5>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
     <CreateEditForm editPost={this.props.editPost}/> 

    </div>
    
  </div>
</div>
</div>
        )
    }
}

export default EditModal;