import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { util } from 'react-lightning-design-system';

import todoApp from './reducers';
import App from './components/App';

util.setAssetRoot('./styles/assets');

const store = createStore(todoApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
