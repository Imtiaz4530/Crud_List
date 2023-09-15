import React, { useState } from 'react'
import shortid from 'shortid';
import CreateTask from './CreateTask';
import ShowTask from './tasks/ShowTask';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
  const [visibility, setVisibility] = useState('all');
  const [editTask, setEditTask] = useState('')
  const [switchEdit, setSwitchEdit] = useState(false);
    const [editText, setEditText] = useState("");
  
    const addNewTask = (text) => {
        const task = {
            text, 
            isCompleted: false,
            createdAt: new Date(),
            id: shortid.generate()
        }
        setTasks([task, ...tasks])
  }

  return (
    <div>
      <h1>Tasks</h1>
      <CreateTask
        addNewTask={addNewTask}
        editTask={editTask}
        setSwitchEdit={setSwitchEdit}
        switchEdit={switchEdit}
        tasks={tasks}
        editText={editText}
        setEditText={setEditText}
      />
      <ShowTask
        tasks={tasks}
        setEditTask={setEditTask}
        setSwitchEdit={setSwitchEdit}
        setEditText={setEditText}
      />
    </div>
  );
}

export default Tasks