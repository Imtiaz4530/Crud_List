import React, { } from 'react'

const ShowTask = ({ tasks, setEditTask, setSwitchEdit, setEditText }) => {
  const handleClick = (id) => {
    const findTask = tasks.filter((i) => i.id === id);
    setEditTask(findTask);
    setSwitchEdit(true);
    setEditText(findTask[0].text)
  };

  const handleDelete = (id) => {
    const indexToRemove = tasks.findIndex((item) => item.id === id);
    tasks.splice(indexToRemove, 1);
  }

  return (
    <div>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <div key={task.id} className="listContainer">
              <li className="listItem">{task.text}</li>
              <button onClick={() => handleClick(task.id)}>Edit</button>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          ))}
        </ul>
      ) : (
        <p>No task found.</p>
      )}
    </div>
  );
};

export default ShowTask