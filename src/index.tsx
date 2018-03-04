import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './view/containers';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';
import stores from './view/store';

// import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Provider {...stores}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
// registerServiceWorker();
