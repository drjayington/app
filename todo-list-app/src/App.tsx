import './App.scss';
import TodoList from './components/todo-list/todo-list';
import NewTaskList from './components/new-task/new-task';
import errorImg from './error.png';
import useGetData from './effects/useGetData';
import useSetData from './effects/useSetData';
import IUpsertData from './interfaces/IUpsertData';
import IData from './interfaces/IData';

interface ICombinedData {
  upsertData: IUpsertData, 
  upsertIsLoading: boolean, 
  upsertError: boolean, 
  data: IData[], 
  isLoading: boolean, 
  error: boolean
}

const combine = ({upsertData, upsertIsLoading, upsertError, data, isLoading, error}:ICombinedData) => {
  const loading = isLoading && upsertIsLoading;
  const errored = upsertError && error;
  let combinedData: IData[] = [];
  let pendingData: IData[] = [];
  let completeData: IData[] = [];

  if(!loading && !errored) {

    combinedData = data
    const shouldCombineData = upsertData && !upsertData.inProgress && upsertData.id !== "" && data;
    if(shouldCombineData) {
      const index = combinedData.findIndex(datum => datum.id === upsertData.id);
      if(index === -1){
        combinedData.push({ id: upsertData.id, description: upsertData.description, isComplete: upsertData.isComplete });
      } else {
        combinedData[index] = { id: upsertData.id, description: upsertData.description, isComplete: upsertData.isComplete } 
      }
    } 
    
    pendingData = combinedData.filter(datum => !datum.isComplete );
    completeData = combinedData.filter(datum => datum.isComplete );
  }

  return {loading, errored, pendingData, completeData}
}

function App() {
  const { upsertData, upsertIsLoading, upsertError, setUpsertData } = useSetData('http://localhost:8080/list/');
  const { data, isLoading, error } = useGetData('http://localhost:8080/list');  
  const {loading, errored, pendingData, completeData} = combine({upsertData, upsertIsLoading, upsertError, data, isLoading, error})

  return (
    <div className="app">
      <h1> Todo List</h1>
      { errored &&  <div className='error'>failed to get todo list data, please moan at a developer<img src={errorImg} alt="error"/></div>} 
      { !errored &&  
        <div className='app-inner'>
          <NewTaskList loading={loading} update={setUpsertData} />
          <div className='todo'>
            <TodoList loading={loading} title="Pending" data={pendingData} update={setUpsertData} buttonText="Set Complete"/>
            <TodoList loading={loading} title="Complete" data={completeData} update={setUpsertData} buttonText="Set Pending"/>      
          </div>
        </div>
      }
    </div>
  );
}

export default App;
