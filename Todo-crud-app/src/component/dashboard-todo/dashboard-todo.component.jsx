
import { FormTodo } from '../form-todo/form-todo.component'
import { ItemTodo } from '../item-todo/item-todo.component'

import { useState , useEffect } from 'react'
import { db } from '../../utils/firebase'
import {
    query,
    collection,
    onSnapshot,
    updateDoc,
    doc,
    deleteDoc,
  } from 'firebase/firestore';

import './dashboard-todo.styles.scss'

export const DashboardTodo = () => {
    const [todos , setTodos] = useState([])

    // Read todo from firebase
    useEffect(() => {
      const q = query(collection(db, 'todos'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let todosArr = [];
        querySnapshot.forEach((doc) => {
          todosArr.push({ ...doc.data(), id: doc.id });
        });
        setTodos(todosArr);
      });
      return () => unsubscribe();
    }, []);

    //update todo in firebase
    const toggleComplete = async (todo) => {
        await updateDoc(doc(db , 'todos' , todo.id), {
            completed : !todo.completed
        })
    }

    // delete todo
    const deleteTodo = async (id) => {
        await deleteDoc(doc(db , 'todos' , id))
    }

    return(
        <div className='background'>
            <div className='dashboard-todo-section'>
                <div className='dashboard-todo-container'>
                    <h1 className='dashboard-todo-title'>Todo App</h1>
                    <FormTodo />
                </div>
                <div className='dashboard-todo-content'>
                    <ul className='dashboard-ul'>
                        {todos.map((todo , index) => (
                            <ItemTodo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}