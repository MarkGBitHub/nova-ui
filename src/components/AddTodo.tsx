import React, { SyntheticEvent,  useState } from "react";
import { postTodo } from "../hooks/todoHooks";

const AddTodo = () => {
  const [description, setDescription]=useState('');

  const changeHandler =(e:React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault();
    setDescription(e.target.value);
  }

  const clickHandler = (e:SyntheticEvent<HTMLButtonElement>) =>{
    e.preventDefault();
    postTodo(description);
    setDescription('');
  }
  return (
    <div className="row">
      <div className="col">
        <input className="form-control" 
            name="description"
            value={description}
            onChange={changeHandler}
            placeholder="Enter new task" />
      </div>
      <div className="col-auto">
        <button onClick={clickHandler} disabled={!description}
            className="btn btn-primary btn-wide">Add</button>
      </div>
    </div>
  );
};

export default AddTodo;