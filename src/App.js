import logo from './logo.svg';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className='container'>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
