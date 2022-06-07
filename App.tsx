import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

import MyStack from './src/screens/MyStack';

const App = () => {
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
};

export default App;
