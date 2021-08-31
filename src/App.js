import './App.css';
import NewsArea from './component/NewsArea';
import Sidebar from './component/SideBar';

function App() {
  return (
    <div className='main'>
    <Sidebar/>
    <NewsArea/>
    </div>
  );
}

export default App;
