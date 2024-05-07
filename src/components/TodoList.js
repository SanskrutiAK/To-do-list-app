import React, { useState } from "react"
import TodoItem from "./TodoItem";

function TodoList(){
    const [tasks, setTask] = useState([
        {
            id: 1,
            text: 'Doctor Appointment',
            completed: true
        },
        {
            id: 2,
            text: 'Meeting at School',
            completed: false
        }
    ]);
    const [text, setText] = useState('');
    function addTask(text) {
        const newtask = {
            id: Date.now(),
            text,
            completed: false
        };
        setTask([...tasks, newtask]);
        setText('');
    }

    function deleteTask(id) {
        setTask(tasks.filter(tasks => tasks.id !== id));
    }

    function toggleCompleted(id) {
        setTask(tasks.map(task =>{
            if(task.id === id)
                return {...task, completed: !task.completed}
            else
                return task;
        }));
    }

    return (
        <div className="todo-list">
        {tasks.map(task => (
        <TodoItem
        key={task.id} 
        task={task}
        deleteTask={deleteTask}
        toggleCompleted={toggleCompleted} 
        />
        ))}

       <input
        value={text}
        onChange={e => setText(e.target.value)} 
        />
       <button onClick={() => addTask(text)}>SUBMIT</button>
        </div>
        );
}

export default TodoList