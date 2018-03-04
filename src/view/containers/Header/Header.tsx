import './Header.css';

import * as React from 'react';
import Menu from './Menu';

export default class Header extends React.Component<{}, {}> {
  render() {
    return (
      <div className="header">
        <Menu />
      </div>
    );
  }
}