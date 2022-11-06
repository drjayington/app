import './new-task.scss';
import { useState } from "react";
import IUpsertData from '../../interfaces/IUpsertData';
import { v4 as uuid } from 'uuid';

interface newTaskListProps {
    loading: boolean,
    update(
      upsertData: IUpsertData
    ): void
}

function NewTaskList({loading, update}: newTaskListProps ) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="card">
      { loading ? <div className='description'>
                      <p>Enter a new task</p>
                      <div className="loading"/>
                  </div> : null 
      } 
      { !loading ? <div className='newTask'>
          <div className='description'>
            <p>Enter a new task</p>   
            <input 
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <button 
            disabled={inputValue.trim() === ""}
            onClick={() => {
              update({ id: uuid(), description: inputValue, isComplete: false, inProgress: true})
              setInputValue("");
            }}
          > 
            create new task
          </button>
       </div> : null }
    </div>
  );
}

export default NewTaskList;
