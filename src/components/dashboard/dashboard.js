import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo, logout } from '../../store/MainSlice';

function Dashboard(props) {
    const dispatch = useDispatch();
    const todosList = useSelector(state => state.todos)
    console.log("todosList", todosList);
    const [todo, setTodo] = useState({
        title: "",
        description: "",
        time: ""
    })
    const addTodotoList = () => {
        todo.time = new Date()
        if (todo.index >= 0) {
            console.log(todo);
            dispatch(editTodo(todo))
        }
        else {
            dispatch(addTodo(todo));
        }
        setTodo({
            title: "",
            description: "",
            time: ""
        })
    }
    return (
        <div className='w-100'>
            <nav className="navbar  bg-body-tertiary  w-100">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Todos</a>
                    <button className='btn btn-warning' onClick={()=> dispatch(logout())}> logout</button>
                </div>
            </nav>
            <div className='text-start m-5'>
                <h1 className='text-primary'>Dashboard</h1>
                <h3>Todos List </h3>
                <div className='mb-5'>
                    <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal"> Add todo</button>
                </div>
            </div>

            <div className='ms-5 row'>
                {
                    todosList.length ?
                        todosList.map((todo, index) => {
                            return (
                                <div className="card col-md-3 col-sm-1 mb-3 me-3">
                                    <div className="card-body text-start">
                                        <div className='d-flex'> <b>Title - </b><p className="card-title">{todo.title}</p></div>
                                        <div className='d-flex'> <b>Description -  </b><p className="card-text">{todo.description}</p> </div>
                                        <div className='d-flex'> <b>Time -  </b><p className="card-text">{todo.time.toISOString().replace("T", " ").replace("Z", "")}</p></div>
                                        <div className='mt-3 d-flex justify-content-between'>
                                            <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setTodo({ ...todo, index })}>Edit</a>
                                            <a href="#" className="btn btn-danger" onClick={() => dispatch(deleteTodo(index))}>Delete</a>
                                        </div>

                                    </div>
                                </div>
                            )
                        })

                        :
                        <span className='text-danger'> No Todos found please add</span>
                }

            </div>

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Todo</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="mb-3 ">
                                <label htmlFor="title" className="col-sm-12 col-form-label">
                                    Titile
                                </label>
                                <div className="col-sm-12">
                                    <input
                                        id='title'
                                        placeholder='Enter title'
                                        className="form-control"
                                        required
                                        value={todo.title}
                                        onChange={(e) => { setTodo({ ...todo, title: e.target.value }) }}
                                    />
                                </div>

                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-12 col-form-label" htmlFor="description">
                                    Description
                                </label>
                                <div className="col-sm-12">
                                    <textarea
                                        id='description'
                                        className="form-control"
                                        placeholder='Enter description'
                                        required
                                        value={todo.description}
                                        onChange={(e) => { setTodo({ ...todo, description: e.target.value }) }}
                                    />
                                </div>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setTodo({ time: "", title: "", description: "" })}>Cancel</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={addTodotoList}>{todo.index != null ? "Edit" : "Add"}</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    );
}

export default Dashboard;