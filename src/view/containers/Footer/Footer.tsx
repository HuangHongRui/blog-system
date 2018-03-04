import React from 'react';
import './Footer.css';

export default class Footer extends React.Component<{}, {}> {
  render() {
    return (
      <div className="footer">
        <div>
          @2017.
        </div>
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
