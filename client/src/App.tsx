import React from 'react';
import './styles/global.css';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store/index';

function App() {
  return (
    <div >
    <Provider store={store}>
      <Routes/>
    </Provider>
    </div>
  );
}

export default App;
