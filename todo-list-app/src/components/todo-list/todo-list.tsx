import './todo-list.scss';

interface Data
{ 
  id: string,
  description: string,
  isComplete: boolean
}

interface todoListProps {
    loading: boolean,
    title: string,
    data?: Data[]
}

function TodoList({loading, title, data }: todoListProps ) {

  return (
    <div className="todoList">
      { loading ? <div> loading todo list </div> : null } 
      { !loading ? <div> todo </div> : null }
    </div>
  );
}

export default TodoList;
