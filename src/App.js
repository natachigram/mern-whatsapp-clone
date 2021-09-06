import './App.css';
import Chatarea from './Chatarea';
import Sidebar from './Sidebar';
// import Sidebar from './Sidebar';

function App() {
  return (
    <div className='app'>
      <div className='app__body'>
        <Sidebar/>
        <Chatarea />
      </div>
    </div>
  );
}

export default App;
