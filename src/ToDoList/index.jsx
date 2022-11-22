import React, { useState, useEffect } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { APIServices } from "../APIServices";

import AddTaskForm from "./AddTaskForm";
import ToDo from "./ToDo";
import UpdateForm from "./UpdateForm";

const ToDoList = () => {
  const [test, setTest] = useState([]);
  //toDo const test = [{ todo_id: "", title: "", status: false }];
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");
  const [toDo, setToDo] = useState([]);

  const getToDo = async () => {
    const toDoList = await APIServices.getToDo();
    console.log(toDoList);
    setToDo(() => {
      return toDoList.data.result.map((e) => {
        return {
          todo_id: e.todo_id,
          title: e.title,
          status: e.status === "0" ? false : true,
        };
      });
    });
  };

  // console.log(toDo.length);

  const addTask = async () => {
    // console.log(userID, title, status);
    if (newTask) {
      await APIServices.createToDo(1, newTask, "0");
      getToDo();
      setNewTask("");
    }
  };

  const changeStatusTask = async (id, status) => {
    const response = await APIServices.updateStatusToDo(id, status);
    if (response.data === false) {
    } else {
      getToDo();
    }
  };

  const deleteTask = async (id) => {
    console.log(id);
    const deleteTask = await APIServices.deleteToDo(id);

    console.log(deleteTask);
    getToDo();
  };

  const cancelUpdate = () => {
    setUpdateData("");
  };

  const changeTaskInput = (e) => {
    let newEntry = {
      todo_id: updateData.todo_id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  const updateTaskButton = async (id, title) => {
    console.log(id, title);
    const updateTask = await APIServices.updateToDo(
      updateData.todo_id,
      updateData.title
    );
    console.log(updateTask);
    getToDo();
    setUpdateData("");
  };

  useEffect(() => {
    getToDo();
  }, []);

  return (
    <div className="container index">
      <br />
      <br />
      <h2>ToDoList</h2>
      <br />
      <br />

      {/* <button onClick={getToDo}>get</button> */}

      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          updateTask={updateTaskButton}
          cancelUpdate={cancelUpdate}
          changeTask={changeTaskInput}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {toDo.length ? " " : "No Task..."}

      <ToDo
        toDo={toDo}
        markDone={changeStatusTask}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default ToDoList;
