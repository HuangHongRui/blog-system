import './Menu.css';

import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { AppStore } from '../../../store';
import { Tab } from '../../../store/AppStore';
import * as classnames from 'classnames';

interface Props {
  appStore?: AppStore;
}

export const MENUITEMS: RouterItem[] = [
  {
    key: 'home',
    title: 'Home',
    linkTo: '/home'
  },
  {
    key: 'timeline',
    title: 'TimeLine',
    linkTo: '/timeline'
  },
  {
    key: 'about',
    title: 'About',
    linkTo: '/about'
  }
];

@inject('appStore')
@observer
export default class Header extends React.Component<Props, {}> {
  render() {
    const appStore = this.props.appStore as AppStore;

    return (
      <div className="menu">
        {MENUITEMS.map(item => {
          return (
            <div
              key={item.key}
              className={classnames({
                menu_item: true,
                active: appStore.currentTab === item.key
              })}
              onClick={() => {
                appStore.currentTab = item.key;
              }}
            >
              {item.title}
            </div>
          );
        })}
      </div>
    );
  }
}

export interface RouterItem {
  key: Tab;
  title: string;
  linkTo: string;
}
