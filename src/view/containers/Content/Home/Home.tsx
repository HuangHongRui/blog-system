import './Home.css';

import * as React from 'react';
import CategoryMenu from './CategoryMenu';

export default class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div className="home">
        <CategoryMenu />
        <div className="articles">对应的文章</div>
      </div>
    );
  }
}
