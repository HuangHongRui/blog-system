import './About.css';
import * as React from 'react';

export default class About extends React.Component<{}, {}> {
  render() {
    return (
      <div className="about">
        About
        <div className="avatar">头像</div>
        <div>个人信息相关操作，包括信息查看，更改密码等等</div>
        <div className="info_content">路由切换跳转</div>
      </div>
    );
  }
}
