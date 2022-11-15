import React from 'react'

export const TodoListItem = ({tarea, handleDelete, handleUpdate}) => {
  return (
    <li className='list-group-item' >
        <p className={`${ tarea.done && 'complete'}`}
            onClick={ () => handleUpdate(tarea.id) }
        >
            { tarea.desc }
        </p>
        <button
            className='btn btn-sm btn-danger'
            onClick={ () => handleDelete(tarea.id) }
        >
            x
        </button>
    </li>
  );
}
