import './Footer.css';

import * as React from 'react';

export default class Footer extends React.Component<{}, {}> {
  render() {
    return (
      <div className="footer">
        <div className="designer">
          <a href="https://github.com/SpontaLeo" target="_blank">
            TaoTao
          </a>
          <a href="https://github.com/HuangHongRui" target="_blank">
            RuiRui
          </a>
        </div>
      </div>
    );
  }
}
