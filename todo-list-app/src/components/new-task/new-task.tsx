import './new-task.scss';

interface newTaskListProps {
    loading: boolean,
    data?: { 
      id: string,
      description: string,
      iSComplete: boolean
    },
    update?(
      id: string,
      description: string,
      iScomplete: boolean
    ): void
}

function NewTaskList({loading, data, update}: newTaskListProps ) {

  return (
    <div className="newTaskList">
      { loading ? <div> loading new task </div> : null } 
      { !loading ? <div> todo </div> : null }
    </div>
  );
}

export default NewTaskList;
