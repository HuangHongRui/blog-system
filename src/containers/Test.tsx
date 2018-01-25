import * as React from 'react';
import { TestStore } from '../store';
import { inject, observer } from 'mobx-react';

interface Props {
  testStore?: TestStore;
}

@inject('testStore')
@observer
export default class Test extends React.Component<Props, {}> {
  render() {
    const testStore = this.props.testStore as TestStore;

    return (
      <div className="test">
        <span>{testStore.test}</span>
      </div>
    );
  }
}