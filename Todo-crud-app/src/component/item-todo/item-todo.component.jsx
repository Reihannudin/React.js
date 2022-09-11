
import React  from 'react'
import './item-todo.style.scss'

import { ReactComponent as DeleteIcon} from '../../assets/icon/remove_FILL0_wght400_GRAD0_opsz48.svg'
// create props todo
export const ItemTodo = ({todo , toggleComplete, deleteTodo}) => {

    return(
        <li className='item-todo-container'>
            <div className='item-todo-row'>
                <input className='item-todo-checkbox'  onChange={() => toggleComplete(todo)} checked={todo.completed ? 'checked' : ''} type='checkbox' />
                <p className='item-todo-text'>{todo.text}</p>
                <button className='delete-todo-btn' onClick={() => deleteTodo(todo.id)}>{<DeleteIcon className='delete-icon' />}</button>
            </div>
        </li>
    )
}