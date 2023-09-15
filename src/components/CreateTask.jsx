import React, { useState } from 'react'

const CreateTask = ({ addNewTask, editTask, switchEdit, setSwitchEdit, tasks, setEditText, editText }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    if (switchEdit) {
      setEditText(e.target.value)
    } else {
      setText(e.target.value);
    }
  }

  const handleEdit = (e) => {
    if (editText) {
      setEditText("");
      setSwitchEdit(false);
      const targetObject = tasks.find((item) => item.id === editTask[0].id);
      if (targetObject) {
        targetObject.text = editText;
      } else {
        console.log(`No object found with this ID`);
      }

    } else {
      alert("Invalid Text");
    }
  }

  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        placeholder="type your tasks"
        value={switchEdit ? editText : text}
      />

      {switchEdit ? (
        <button onClick={handleEdit} >
          Save
        </button>
      ) : (
        <button
          onClick={() => {
            if (text) {
              addNewTask(text);
              setText("");
            } else {
              alert("Invalid Text");
            }
          }}
        >
          Click Here
        </button>
      )}
    </div>
  );
};

export default CreateTask;