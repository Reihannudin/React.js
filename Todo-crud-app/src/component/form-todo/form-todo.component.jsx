import { ReactComponent as AddIcon } from '../../assets/icon/add-icon-36.svg'
import { useState } from 'react'

import { db } from '../../utils/firebase'

import {
    collection,
    addDoc,
  } from 'firebase/firestore';


import './form-todo.styles.scss'

export const FormTodo = () => {

    const [input , setInput] = useState([""])

     //create todo 
     const createTodo = async (e) => {
        e.preventDefault(e);
        if(input === ''){
            alert('Please enter a valid todo');
            return;
        }
        await addDoc(collection(db , 'todos'), {
            text : input,
            completed: false
        })
        setInput('')
    }

    return(
        <div className="form-todo-container">
            <form  className="form-todo" onSubmit={createTodo} >
                <input className='form-input-todo' value={input} onChange={(e) => setInput(e.target.value)} type='text' placeholder='Add Todo'></input>
                <button className='btn-submit-todo'>
                    <AddIcon className='icon-create' />
                </button>
            </form>
        </div>
    )
}