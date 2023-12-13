import { Provider } from 'react-redux'

import store from '@/store'

import './App.css';
import Todo from './pages/Todo'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo />
      </div>
    </Provider>
  );
}

export default App;



