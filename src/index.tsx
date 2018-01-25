import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'mobx-react';
import stores from './store';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
// registerServiceWorker();
