import IData from '../../interfaces/IData';
import IUpsertData from '../../interfaces/IUpsertData';
import './todo-list.scss';

interface todoListProps {
    loading: boolean,
    title: string,    
    data?: IData[],
    buttonText: string,
    update(
      upsertData: IUpsertData
    ): void
}

function TodoList({loading, title, data, buttonText, update }: todoListProps ) {

  return (
    <div className="card">
      <h2>{title}</h2>
      { loading ? <div>
                    <div className="loading"></div>
                    <div className="loading"></div>
                    <div className="loading"></div>
                  </div>
       : null 
      } 
      { !loading ? <ul>            
            { data?.map((datum: IData) => <li key={datum.id}>
                <button 
                  className="setCompleteBtn" 
                  onClick={() => {
                    update({ id: datum.id, description: datum.description, isComplete: !datum.isComplete, inProgress: true})
                  }}
                >
                  {buttonText}
                </button>
                {datum.description} 
              </li>
            )}
          </ul> 
        : null 
      }
    </div>
  );
}

export default TodoList;