import React from 'react'
import PropTypes from 'prop-types';
import { TodoListItem } from './TodoListItem';

const TodoList = ({todos, handleDelete, handleUpdate}) => {
  return (
    <ul className='list-group'>
        {
            todos.map( (tarea) => {
                return <TodoListItem
                            key={tarea.id}
                            tarea={tarea}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate} />
            })
        }
    </ul>
  )
}

TodoList.propTypes = {
    todos: PropTypes.array
}

export default TodoList;
