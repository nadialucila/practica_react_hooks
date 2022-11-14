import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { useForm }from '../../hooks/useForm.js';
import './styles.css';

//hacemos un pequeño estado inicial para empezar la todo
const initialState = [{
    id: new Date().getTime(),
    desc: 'aprender react',
    done: false
}]

export const TodoApp = () => {

    //usamos el hook useReducer, el mismo pide un reducer y un estado inicial, luego va a devolver el estado (todos)
    // y una funcion dispatch para manejar las acciones
    const [todos, dispatch] = useReducer(todoReducer, initialState);

    //tremos el custom hook useForm para que maneje el cambio en el input
    //vamos a necesitar una description que es para la tarea, la funcion para manejar el input y un reset para que se borre el input despues
    const [{description}, handleInputChange, reset ] = useForm({
        description: '' //le avisamos al form que va a tener un attr description
    });

    //funcion para manejar el submit del form de las to-dos
    const handleSubmit = (e) => {
        e.preventDefault();

        //validacion para no meter tareas vacias
        if(description.trim().length <= 1) {
            return;
        }

        //maqueta de lo que seria la nueva tarea, tiene como id el tiempo actual, como desc la descripcion que obtenemos del input
        //y un done que arranca en false por defecto
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        //con la action type add indicamos que es una accion para añadir una nueva tarea, y el payload que es el obj
        //va a ser la tarea creada anteriormente
        const action = {
            type: 'add',
            payload: newTodo
        }

        //aca es donde usamos la funcion dispatch y le metemos la action, para que mande la accion al reducer correspondiente
        //y dependiendo el type haga lo que tenga que hacer con el payload
        dispatch(action);
        //uso el reset para limpiar el formulario
        reset();
    }

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
                                    key= {tarea.id}
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
    )
}
