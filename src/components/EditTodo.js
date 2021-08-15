import React, { Fragment, useState } from 'react'

function EditTodo({ todo }) {
    const [description, setDescription] = useState([todo.description])


    const updateDescription = async (e) => {
        e.preventDefault();
        try {

            const body = { description }
            const request = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(body)
            });
            // console.log(request);
            window.location = '/';
        }
        catch(err)
        {
            console.log(err.message);
        }
    }
    




    return (
        <Fragment>
           
                <button type="button" 
                className="btn btn-info bi bi-pencil-sq uare mx-1" 
                data-toggle="modal" 
                data-target={`#id${todo.todo_id}`}>
                Edit
                </button>


            <div className="modal" id={`id${todo.todo_id}`} onClick={ () => setDescription(todo.description) }>
                <div className="modal-dialog">
                    <div className="modal-content">

                    
                    <div className="modal-header">
                        <h4 className="modal-title">Edit Todo</h4>
                        <button type="button" className="close" data-dismiss="modal"
                        onClick={ () => setDescription(description) }
                        >&times;</button>
                    </div>

                    
                    <div className="modal-body">
                       <input type="text" className="form-control" value={ description } onChange={ e => setDescription(e.target.value) } />
                    </div>

                    
                    <div className="modal-footer d-flex flex-row">
                        <button type="button"
                         className="btn btn-info mr-auto"
                         data-dismiss="modal"
                         onClick = {e => updateDescription(e)}
                         >Update Todo</button>

                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={ () => setDescription(description) }>Close</button>
                    </div>

                    </div>
                </div>
                </div>
        </Fragment>
    )
}

export default EditTodo
