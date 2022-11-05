import './App.scss';
import TodoList from './components/todo-list/todo-list';
import NewTaskList from './components/new-task/new-task';
import errorImg from './error.png';
import useGetData from './effects/useGetData';
//import useSetData from './effects/useSetData';

function App() {

  /*
  const { data, isLoading, error  } = useSetData({
     url: 'http://localhost:8080/list/1',
     description: "get a lem sip and rest",
     isComplete: true,
  });*/
  const { data, isLoading, error  } = useGetData('http://localhost:8080/list');

  return (
    <div className="app">
      { error &&  <div> failed to get todo list data, please moan at the developer <img src={errorImg} alt="error" /></div>} 
      { !error && <>
          <TodoList loading={isLoading} title="" data={undefined} /> 
          <NewTaskList loading={isLoading} data={undefined} update={undefined} />
        </>
      }
    </div>
  );
}

export default App;
