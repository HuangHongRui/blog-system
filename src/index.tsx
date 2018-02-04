import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './view/containers/App';
import { Provider } from 'mobx-react';
import stores from './view/store';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
// registerServiceWorker();
