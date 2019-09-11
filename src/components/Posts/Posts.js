import React from 'react';
import Modal from '../Modals/Modals';
import EditModal from '../Modals/EditModal';

import './Posts.css';

const Posts = (props) => {
   

    const posts = props.posts.map((blog, index) => {
        return (
           
            <div className="card mb-3 post-container" key={index} style={{maxWidth: 740 + `px`}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        {/* <img src={ run.picture } className="card-img run-picture" alt="..."/> */}
                    </div>
                    <div className="col-md-8 ">
                        <div className="card-body">
                            <h5 className="card-title">Blog Info</h5>
                            <p className="card-text">Form</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Title: </strong>{ blog.title }</li>
                                <li className="list-group-item"><strong>Content: </strong>{ blog.content }</li>
                                
                                
                             
                            </ul>
                            <button className="delete-button" onClick={() => props.removePost(blog._id)}>Delete</button>
                            {/* <button onClick={() => props.editPost(blog._id)}>Delete</button> */}
                            <div>
                            {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                            Edit
        </button> */}

                            <button type="button" class="btn btn-primary" onClick={() => props.setPostEdit(blog)}>
                                Edit
                            </button>
                             {
                                 props.isEditing && props.postToEdit === blog._id && (
                                    <form onSubmit={props.editPost}>
                                    <div className="form-group">
                                      <label htmlFor="title">title</label>
                                      <input name="title" type="title" value={props.editData.title} onChange={props.handleEditChange} className="form-control" id="picture" placeholder=""/>
                                    </div>
                                    <div className="form-group">
                                      <label htmlFor="content">content</label>
                                      <input  name="content" type="content" value={props.editData.content} onChange={props.handleEditChange} className="form-control" id="pace" placeholder=""/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Edit</button>
                                  </form>
                                 )
                             }
                            {/* <EditModal editPost={() => props.editPost(blog._id)} /> */}
                            </div>
                            
                            
                            

                            
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="post-text">
            <h1>Write your blogs here....</h1>
        <button type="button" className="btn btn-primary blog-button" data-toggle="modal" data-target="#exampleModal">
            Add Blog
        </button>
        <Modal createPost={props.createPost} />
        

            { posts }
        </div>
    );
}

export default Posts;

