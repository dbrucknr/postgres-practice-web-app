import './styles/App.css';
import { QueryEditor } from './components/QueryEditor';
import { QueryResult } from './components/QueryResult';

const App = () => {
  return (
    <div id='main'>
      <div className='layout'>
        <div className='col'>
          <QueryEditor />
        </div>
        <div className='col'>
          <QueryResult />
        </div>
      </div>
    </div>
  );
}

export default App;
