import './styles/App.css';
import { QueryEditor } from './components/QueryEditor';
import { QueryResult } from './components/QueryResult';
import { QueryToolbar } from './components/QueryToolbar';
const App = () => {
  return (
    <div id='main'>
      <QueryToolbar />
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
