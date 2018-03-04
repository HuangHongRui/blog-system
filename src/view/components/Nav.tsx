import * as React from 'react';
import 'antd';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

class Nav extends React.PureComponent<NavTypes> {
  constructor(props: NavTypes) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
        <Row>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
        </Row>
        <Row>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>
      </div>
    );
  }
}
interface NavTypes {}
export default Nav;
