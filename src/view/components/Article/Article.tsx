import * as React from 'react';
import Nav from '../Nav';
import './Article.css';

export default class Article extends React.Component<{}, {}> {
  render() {
    return (
      <div className="article">
        <Nav />
        Article
      </div>
    );
  }
}