import React from 'react';
import './CategoryMenu.css';
import { Select } from 'antd';
import 'antd/dist/antd.css';

class CategoryMenu extends React.Component<{}, {}> {
  render() {
    const Option = Select.Option;
    return (
      <div className="category">
        <Select
          defaultValue="日志"
          style={{ width: 120 }}
          onChange={(e) => e}
        >
          <Option value="日志">日志</Option>
          <Option value="摘要">摘要</Option>
          <Option value="心得">心得</Option>
          <Option value="随笔">随笔</Option>
        </Select>
      </div>
    );
  }
}
export default CategoryMenu;
