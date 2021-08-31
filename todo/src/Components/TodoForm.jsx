import React, { useState, useEffect } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            text: input
        });
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            <input className={'input-text'}
                placeholder='Add a todo'
                value={input}
                onChange={handleChange}
                name='text'
            />
            <button onClick={handleSubmit} className='todo-button'>
                Add todo
            </button>
        </form>
    );
}

export default TodoForm;