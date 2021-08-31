import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

const Todo = ({ todos, removeTodo, checkTodo }) => {
    return todos.map((todo) => (

        < div key={todo._id} className={'todo'} >
            <div className={'container'}>
                <div className="input-div">
                    <input className={'input-check'} type="checkbox" onChange={() => { checkTodo(todo._id, !todo.checked, todo.text) }} checked={todo.checked}
                    />
                </div>
                <div className={"text"}>
                    {todo.text}
                </div>
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo._id)}
                    className='delete-icon'
                />
            </div>
            <div className='icons'>

            </div>
        </div >
    ));
};

export default Todo;