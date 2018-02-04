import './App.css';

import * as React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Home, TimeLine, About } from '../Content';
import { Route } from 'react-router-dom';

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="content_container">
          <Route exact={true} path={'/'} component={Home} />
          <Route path={'/timeline'} component={TimeLine} />
          <Route path={'/about'} component={About} />
        </section>
        <Footer />
      </div>
    );
  }
}
