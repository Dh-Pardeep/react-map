import React, { useState } from 'react';
import { DeleteIcon, GrayTrueIcon, GreenTrueIcon } from './Icons';
const TodoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const addTask = () => {
        if (editIndex !== null) {
            const editedTasks = [...tasks];
            editedTasks[editIndex].text = taskInput;
            setTasks(editedTasks);
            setEditIndex(null);
            setIsEditing(false);
        } else if (taskInput.trim() !== '') {
            setTasks([...tasks, { text: taskInput, completed: false }]);
        }

        setTaskInput('');
    };

    const saveTask = () => {
        if (editIndex !== null) {
            const editedTasks = [...tasks];
            editedTasks[editIndex].text = taskInput;
            setTasks(editedTasks);
            setEditIndex(null);
            setIsEditing(false);
            setTaskInput('');
        }
    };

    const cancelEdit = () => {
        setEditIndex(null);
        setIsEditing(false);
        setTaskInput('');
    };

    const removeTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const toggleTaskCompletion = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const editTask = (index) => {
        setTaskInput(tasks[index].text);
        setEditIndex(index);
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        setTaskInput(e.target.value);
    };

    return (
        <div className='container d-flex align-items-center justify-content-center'>
            <div className='border_full_box mt-5'>
                <h1 className='todos text-center'>Todos</h1>
                <div className='input_full_border d-flex justify-content-between'>
                    <input
                        className='input_border ps-2'
                        type="text"
                        value={taskInput}
                        onChange={handleInputChange}
                        disabled={isEditing}
                    />
                    <button className='task_btn' onClick={addTask}>
                        Add
                    </button>
                </div>
                <ul className='mt-3 map_width ps-0'>
                    {tasks.map((task, index) => (
                        <li
                            className='d-flex justify-content-between map_border px-3 py-2'
                            key={index}
                            style={{
                                textDecoration: task.completed ? 'line-through' : 'none',
                            }}
                        >
                            <div
                                style={{
                                    opacity: task.completed ? 0.3 : 1,
                                    width: '40%',
                                    overflow: 'hidden',
                                }}
                            >
                                {isEditing && editIndex === index ? (
                                    <input
                                        className='edit_change_class'
                                        type="text"
                                        value={taskInput}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    task.text
                                )}
                            </div>
                            <div>
                                <button className='delete_btn ' onClick={() => removeTask(index)}>
                                    <DeleteIcon />
                                </button>
                                <button className='check_btn ' onClick={() => toggleTaskCompletion(index)}>
                                    {task.completed ? (
                                        <GreenTrueIcon />
                                    ) : (
                                        <GrayTrueIcon />
                                    )}
                                </button>
                                <button
                                    className='edit_btn'
                                    onClick={isEditing && editIndex === index ? saveTask : () => editTask(index)}
                                    disabled={task.completed}
                                    style={{
                                        opacity: task.completed ? 0.3 : 1,
                                    }}
                                >
                                    {isEditing && editIndex === index ? 'Save' : 'Edit'}
                                </button>
                                {isEditing && editIndex === index && (
                                    <button
                                        className='edit_btn'
                                        onClick={cancelEdit}
                                        disabled={task.completed}
                                        style={{
                                            opacity: task.completed ? 0.3 : 1,
                                        }}
                                    >
                                        Cancel
                                    </button>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoApp;
