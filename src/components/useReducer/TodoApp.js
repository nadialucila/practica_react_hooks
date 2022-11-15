import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import './styles.css';
import TodoList from './TodoList';
import { TodoAdd } from './TodoAdd';

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];           //esto tendria que venir de una db en realidad
}

export const TodoApp = () => {

    //usamos el hook useReducer, el mismo pide un reducer y un estado inicial " [] " y el init que me trae los todos, luego va a devolver el estado (todos)
    // y una funcion dispatch para manejar las acciones
    const [todos, dispatch] = useReducer(todoReducer, [], init);

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

    const handleAddTodo = ( newTodo ) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
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
                            handleUpdate={handleUpdate}
                    />
                </div>
                <div className='col'>
                    <TodoAdd
                            handleAddTodo={handleAddTodo}
                     />
                </div>
            </div>
        </div>
    );
}
