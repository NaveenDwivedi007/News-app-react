import { Provider } from 'react-redux';
import './App.css';
import NewsArea from './component/NewsArea';
import Sidebar from './component/SideBar';
import { store } from './redux/store';

function App() {
  
  
  return (
    <Provider store={store}>
      <div className='main'>
        <Sidebar/>
        <span>
        <NewsArea />
        </span>
      </div>
      </Provider>
  );
}

export default App;
