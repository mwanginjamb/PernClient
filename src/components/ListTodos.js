import React, { Fragment, useEffect, useState } from 'react'
import EditTodo from './EditTodo';



function ListTodos() {

    // Maintain todos in a state

    const [todos, setTodos] = useState([])

    useEffect( () => {
        getTodos()
    },[] );  // Add an empty array as arg 2 to prevent "use effect" from making multiple requests




    const getTodos = async () => {
        try{
            const response =  await fetch("http://localhost:5000/todos");
            const data =  await response.json();
            // console.log(data);
            setTodos(data) // Mutate our todos state
        } catch(err) {
            console.log(err.message);
        }
    };

    // Delete todo

    const onDelete = async (id) => {

        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "Delete"
            });

            console.log(deleteTodo)

            // reset state

            setTodos(todos.filter( todo => todo.todo_id !== id));

        } catch (err) {
            console.log(err.message);
        }
        
    }

    


    return (
        <Fragment>
            <table className="table mt-5 text-center">
                 <thead>
                    <tr>
                        <th>#</th>
                        <th>Todo</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                 </thead>
                 <tbody>
                    {todos.map( (todo, index) => (
                        <tr key={todo.todo_id} >
                            <td>{ index +1 }</td>
                            <td>{todo.description}</td>
                            <td>
                                <EditTodo todo={ todo }/>
                            </td>
                            <td><button className="btn btn-danger" onClick={() => onDelete(todo.todo_id)}><i className="bi bi-x-square mx-1"></i>Delete</button></td>
                        </tr>
                    ) )}
                 </tbody>
            </table>
        </Fragment>
    )
}

export default ListTodos
