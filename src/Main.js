import React, { useState } from "react";

const Main = () => {
  const [name, setName] = useState("");
  const [tasklist, setTasklist] = useState([]);

  const addtask=()=>{
    

    setTasklist([...tasklist, name])

  }
  const tasklistcontent = tasklist.map((task, index)=>{ 
    return(
        <div>
            <p>{task}</p>
            <i className="fa fa-trash" aria-hidden="true" onClick={()=>deletetask(index)}></i>

        </div>
    )
  })
  const deletetask=(index)=>{
    var duparray =[...tasklist]
    duparray.splice(index, 1)
    setTasklist(duparray)

  }



  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
          <h1>React Todo List</h1>
          <input
            type="text"
            placeholder="Add Todo"
            className="form-control"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
          />
          <button className="btn btn-primary" onClick={addtask}>ADD</button>
          <br />
          {tasklistcontent}
        </div>
      </div>
    </div>
  );
};

export default Main;
