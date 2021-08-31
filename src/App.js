

import React from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter';
import store from './store';
import './App.css';
import CounterWithoutRedux from './Counter_without_redux';

function App () {
  
  return (
    <div>

      <Provider store={store}>
        <Counter />     
      </Provider>

      <hr/><hr/>

      <CounterWithoutRedux/>

    </div>

  );

}

export default App;