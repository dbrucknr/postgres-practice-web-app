import './styles/App.css';
import { QueryInput } from './components/QueryInput';
import { QueryResult } from './components/QueryResult';

const App = () => {
  return (
    <div id='main'>
      <div className='layout'>
        <div className='col'>
          <QueryInput />
        </div>
        <div className='col'>
          <QueryResult />
        </div>
      </div>
    </div>
  );
}

export default App;
