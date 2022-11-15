import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { useForm }from '../../hooks/useForm.js';
import './styles.css';
import TodoList from './TodoList';

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];           //esto tendria que venir de una db en realidad
}

export const TodoApp = () => {

    //usamos el hook useReducer, el mismo pide un reducer y un estado inicial " [] " y el init que me trae los todos, luego va a devolver el estado (todos)
    // y una funcion dispatch para manejar las acciones
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    //tremos el custom hook useForm para que maneje el cambio en el input
    //vamos a necesitar una description que es para la tarea, la funcion para manejar el input y un reset para que se borre el input despues
    const [{description}, handleInputChange, reset ] = useForm({
        description: ''               //le avisamos al form que va a tener un attr description
    });

    useEffect( () => {
        localStorage.setItem( 'todos', JSON.stringify(todos) );
    }, [ todos ] );

    const handleDelete = (todoId) => {
        dispatch( {
            type: 'delete',
            payload: todoId
        });
    }

    const handleUpdate = (todoId) => {
        dispatch({
            type: 'update',
            payload: todoId
        });
    }

    //funcion para manejar el submit del form de las to-dos
    const handleSubmit = (e) => {

        e.preventDefault();

        if(description.trim().length <= 1) return;

        dispatch({
            type: 'add',
            payload: {                          //objeto de nueva tarea en el payload.
                id: new Date().getTime(),
                desc: description,             //la descripcion viene del input
                done: false
            }
        });

        reset();
    }

    return (
        <div>
            <h1> Lista de tareas ( {todos.length} ) </h1>
            <hr/>
            <div className='row'>
                <div className='col-7'>
                    <TodoList 
                            todos={todos}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}/>
                </div>
                <div className='col'>
                    <h4> Agregar tarea: </h4>
                    <hr/>
                    <form onSubmit={ handleSubmit }>
                        <input
                            type='text'
                            name='description'
                            placeholder='Tengo que ...'
                            value={description}
                            autoComplete='off'
                            className='form-control'
                            onChange={ handleInputChange }
                            />
                        <button
                            type='submit'
                            className='btn btn-success mt-1 btn-block'
                            >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
