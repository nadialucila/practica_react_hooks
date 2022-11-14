import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer';
import './styles.css';

const initialState = [{
    id: new Date().getTime(),
    desc: 'aprender react',
    done: false
}]

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div>
            <h1> Todo-App ( {todos.length} ) </h1>
            <hr/>
            <div className='row'>
                <div className='col-7'>
                    <ul className='list-group'>
                        {
                            todos.map( (tarea) => (
                                <li
                                    key={tarea.id}
                                    className='list-group-item'
                                    >
                                    <p className='text-center'> { tarea.desc } </p>
                                    <button className='btn btn-danger'> x </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='col'>
                    <h4> Agregar To-Do: </h4>
                    <hr/>
                    <form>
                        <input
                            type='text'
                            name='description'
                            placeholder='Tengo que ...'
                            autoComplete='off'
                            className='form-control'
                        />
                        <button
                            className='btn btn-success mt-1 btn-block'
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
