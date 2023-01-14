import React from "react";
import { Todo } from "../types/todo";
import useGetTodos, { updateTodo } from "../hooks/todoHooks";


type status = {
  status: string;
};

const changeHandler = (todo: Todo) => {
  updateTodo(todo);
};

const TodoList = ({ status }: status) => {
  const todos: Todo[] = useGetTodos();
  const completed = status.toLowerCase() === "completed" ? true : false;

  return (
    <div className="card m-2">
      <div className="card-header text-center">
        <h6>{status}</h6>
      </div>
      {todos?.filter((s) => s.completed === completed).length > 0 && (
        <table className="table table-bordered table-sm">
          <thead className="text-center">
            <tr>
              <td></td>
              <td className="td-sm">Done</td>
            </tr>
          </thead>
          <tbody>
            {todos
              .filter((todo) => todo.completed === completed)
              .map((todo) => (
                <tr key={todo.id}>
                  <td className="ps-3">{todo.description}</td>
                  <td className="text-center">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => changeHandler(todo)}
                    />
                    {todo.completed}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TodoList;