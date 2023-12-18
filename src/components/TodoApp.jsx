import React, { useState } from 'react';

const TodoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const addTask = () => {
        if (editIndex !== null) {
            // Editing an existing task
            const editedTasks = [...tasks];
            editedTasks[editIndex].text = taskInput;
            setTasks(editedTasks);
            setEditIndex(null);
            setIsEditing(false);
        } else if (taskInput.trim() !== '') {
            // Adding a new task
            setTasks([...tasks, { text: taskInput, completed: false }]);
        }

        setTaskInput('');
    };

    const saveTask = () => {
        if (editIndex !== null) {
            // Save the edited task
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
        setTaskInput(tasks[index].text); // Set input to the current task's text
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
                                <button className='delete_btn ' onClick={() => removeTask(index)}><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 4.978V5.205C18.299 5.32379 19.5927 5.49459 20.878 5.717C20.9751 5.73381 21.0678 5.76957 21.1511 5.82224C21.2343 5.87491 21.3063 5.94345 21.3631 6.02396C21.4198 6.10447 21.4601 6.19536 21.4817 6.29145C21.5033 6.38755 21.5058 6.48695 21.489 6.584C21.4722 6.68105 21.4364 6.77383 21.3838 6.85706C21.3311 6.94029 21.2626 7.01233 21.182 7.06906C21.1015 7.1258 21.0106 7.16612 20.9146 7.18773C20.8185 7.20934 20.7191 7.21181 20.622 7.195L20.413 7.16L19.408 20.23C19.3501 20.9836 19.0098 21.6875 18.4553 22.2011C17.9008 22.7146 17.1728 23 16.417 23H8.58401C7.8282 23 7.10026 22.7146 6.54573 22.2011C5.9912 21.6875 5.65095 20.9836 5.59301 20.23L4.58701 7.16L4.37801 7.195C4.28096 7.21181 4.18155 7.20934 4.08546 7.18773C3.98937 7.16612 3.89847 7.1258 3.81796 7.06906C3.65537 6.95448 3.54495 6.78 3.51101 6.584C3.47706 6.38801 3.52236 6.18655 3.63694 6.02396C3.75153 5.86137 3.92601 5.75095 4.12201 5.717C5.40727 5.49433 6.70099 5.32352 8.00001 5.205V4.978C8.00001 3.414 9.21301 2.078 10.816 2.027C11.9387 1.99107 13.0623 1.99107 14.185 2.027C15.788 2.078 17 3.414 17 4.978ZM10.864 3.526C11.9547 3.49112 13.0463 3.49112 14.137 3.526C14.89 3.55 15.5 4.184 15.5 4.978V5.091C13.5018 4.96965 11.4982 4.96965 9.50001 5.091V4.978C9.50001 4.184 10.109 3.55 10.864 3.526ZM10.509 9.471C10.5052 9.37251 10.482 9.27573 10.4408 9.1862C10.3996 9.09666 10.3412 9.01612 10.2688 8.94916C10.1965 8.88221 10.1117 8.83017 10.0192 8.79599C9.92678 8.76182 9.8285 8.74619 9.73001 8.75C9.63152 8.75381 9.53474 8.77698 9.4452 8.81819C9.35567 8.8594 9.27512 8.91784 9.20817 8.99018C9.14122 9.06251 9.08917 9.14733 9.055 9.23978C9.02083 9.33223 9.0052 9.43051 9.00901 9.529L9.35601 18.529C9.3637 18.7278 9.45004 18.9154 9.59604 19.0505C9.66833 19.1174 9.75309 19.1694 9.84548 19.2035C9.93787 19.2377 10.0361 19.2533 10.1345 19.2495C10.2329 19.2457 10.3296 19.2225 10.4191 19.1814C10.5086 19.1402 10.5891 19.0818 10.656 19.0095C10.7229 18.9372 10.7749 18.8524 10.8091 18.76C10.8432 18.6676 10.8588 18.5694 10.855 18.471L10.509 9.471ZM15.989 9.529C15.9963 9.42862 15.9834 9.32779 15.9509 9.23251C15.9185 9.13724 15.8672 9.04947 15.8001 8.97444C15.733 8.89941 15.6515 8.83866 15.5604 8.79579C15.4694 8.75292 15.3706 8.72882 15.27 8.72493C15.1694 8.72104 15.0691 8.73743 14.975 8.77312C14.8809 8.80882 14.7949 8.86309 14.7222 8.93271C14.6496 9.00233 14.5916 9.08587 14.5519 9.17834C14.5122 9.27082 14.4915 9.37035 14.491 9.471L14.144 18.471C14.1363 18.6699 14.208 18.8637 14.3432 19.0098C14.4784 19.1559 14.6661 19.2423 14.865 19.25C15.0639 19.2577 15.2577 19.1861 15.4038 19.0508C15.5499 18.9156 15.6363 18.7279 15.644 18.529L15.989 9.529Z" fill="#64748B" />
                                </svg>
                                </button>
                                <button className='check_btn ' onClick={() => toggleTaskCompletion(index)}>
                                    {task.completed ? (<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 12.5C2.75 7.115 7.115 2.75 12.5 2.75C17.885 2.75 22.25 7.115 22.25 12.5C22.25 17.885 17.885 22.25 12.5 22.25C7.115 22.25 2.75 17.885 2.75 12.5ZM16.11 10.686C16.17 10.6061 16.2134 10.5149 16.2377 10.4179C16.262 10.321 16.2666 10.2201 16.2514 10.1214C16.2361 10.0226 16.2012 9.92782 16.1489 9.8427C16.0965 9.75757 16.0276 9.68378 15.9463 9.62565C15.8649 9.56753 15.7728 9.52624 15.6753 9.50423C15.5778 9.48221 15.4769 9.47991 15.3785 9.49746C15.2801 9.51501 15.1862 9.55205 15.1023 9.60641C15.0184 9.66077 14.9462 9.73135 14.89 9.814L11.654 14.344L10.03 12.72C9.88783 12.5875 9.69978 12.5154 9.50548 12.5188C9.31118 12.5223 9.12579 12.601 8.98838 12.7384C8.85097 12.8758 8.77225 13.0612 8.76882 13.2555C8.7654 13.4498 8.83752 13.6378 8.97 13.78L11.22 16.03C11.297 16.1069 11.3898 16.1662 11.492 16.2036C11.5942 16.2411 11.7033 16.2559 11.8118 16.2469C11.9202 16.238 12.0255 16.2055 12.1201 16.1519C12.2148 16.0982 12.2967 16.0245 12.36 15.936L16.11 10.686Z" fill="#76C745" />
                                    </svg>
                                    ) : (<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 12.5C2.75 7.115 7.115 2.75 12.5 2.75C17.885 2.75 22.25 7.115 22.25 12.5C22.25 17.885 17.885 22.25 12.5 22.25C7.115 22.25 2.75 17.885 2.75 12.5ZM16.11 10.686C16.17 10.6061 16.2134 10.5149 16.2377 10.4179C16.262 10.321 16.2666 10.2201 16.2514 10.1214C16.2361 10.0226 16.2012 9.92782 16.1489 9.8427C16.0965 9.75757 16.0276 9.68378 15.9463 9.62565C15.8649 9.56753 15.7728 9.52624 15.6753 9.50423C15.5778 9.48221 15.4769 9.47991 15.3785 9.49746C15.2801 9.51501 15.1862 9.55205 15.1023 9.60641C15.0184 9.66077 14.9462 9.73135 14.89 9.814L11.654 14.344L10.03 12.72C9.88783 12.5875 9.69978 12.5154 9.50548 12.5188C9.31118 12.5223 9.12579 12.601 8.98838 12.7384C8.85097 12.8758 8.77225 13.0612 8.76882 13.2555C8.7654 13.4498 8.83752 13.6378 8.97 13.78L11.22 16.03C11.297 16.1069 11.3898 16.1662 11.492 16.2036C11.5942 16.2411 11.7033 16.2559 11.8118 16.2469C11.9202 16.238 12.0255 16.2055 12.1201 16.1519C12.2148 16.0982 12.2967 16.0245 12.36 15.936L16.11 10.686Z" fill="#64748B" />
                                    </svg>
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
