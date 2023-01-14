import { useEffect, useState } from "react";
import config from "../config";
import { Todo } from "../types/todo";
import httpHelper from "../helpers/httpHelper";

const useGetTodos = (): Todo[] => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const getTodos = async () => {
            const todos = await httpHelper(`${config.baseApi}`);
            setTodos(todos);
        }
        getTodos();
    },[todos])
    return todos;
}

const postTodo = async (description: string) => {
    const id = 0;
    const completed = false;
    const todo: Todo = { id, completed, description }
    const requestData:RequestInit = {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(todo),
    };
    fetch(`${config.baseApi}`, requestData).then(r=>r.text())
    .then(d=>console.log(d))
    .catch(error=>console.log(`Error Adding task ${error}`))
}

const updateTodo = async (todo: Todo) => {
    const requestData:RequestInit = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(todo),
    };
    fetch(`${config.baseApi}`, requestData).then(r=>r.text())
    .then(d=>console.log(d))
    .catch(error=>console.log(`Error Adding task ${error}`))
}

export default useGetTodos;
export { postTodo, updateTodo };