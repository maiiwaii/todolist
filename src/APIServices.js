import config from "./config";
import axios from "axios";
import qs from "qs";

const getToDo = async () => {
  const get = await axios.get(`${config.server}/todo.php`).then((response) => {
    console.log("Todo", response);
    return response;
  });
  return get;
};

const updateStatusToDo = async (id, status) => {
  console.log(id, status);
  const put = await axios(`${config.server}/updateStatusToDo.php`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: qs.stringify({
      todo_id: id,
      status: status === false ? 1 : 0,
    }),
  }).then((response) => {
    console.log("Todo", response);
    return response;
  });
  return put;
};

const updateToDo = async (id, title) => {
  console.log(id, title);
  const put = await axios(`${config.server}/updateToDo.php`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: qs.stringify({
      todo_id: id,
      title: title,
    }),
  }).then((response) => {
    console.log("Todo", response);
    return response;
  });
  return put;
};

const createToDo = async (userID, title, status) => {
  console.log(userID, title, status);
  const post = await axios(`${config.server}/addToDo.php`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: qs.stringify({
      user_id: userID,
      title: title,
      status: status,
    }),
  }).then((response) => {
    console.log("Todo", response);
    return response;
  });
  return post;
};

const deleteToDo = async (todo_id) => {
  console.log(todo_id);
  const deleteTodo = await axios(`${config.server}/deleteTodo.php`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: qs.stringify({
      todo_id: todo_id,
    }),
  }).then((response) => {
    console.log("Todo", response);
    return response;
  });
  return deleteTodo;
};

export const APIServices = {
  getToDo,
  updateToDo,
  createToDo,
  deleteToDo,
  updateStatusToDo,
};
