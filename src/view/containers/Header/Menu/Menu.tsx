import './Menu.css';

import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { AppStore } from '../../../store';
import { Tab } from '../../../store/AppStore';
import { Link } from 'react-router-dom';
import * as classnames from 'classnames';
import styled from 'styled-components';
import Icon from 'antd/lib/icon';

const HeaderView = styled.div`
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: auto auto;
  img {
    border-radius: 40%;
    //height: 5vw;
    padding-left: 5rem;
  }
`;

interface Props {
  appStore?: AppStore;
}

export const MENUITEMS: RouterItem[] = [
  {
    key: 'home',
    title: 'Home',
    linkTo: '/'
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
      <HeaderView>
        <img src="https://avatar.tower.im/af6cd470b3294b38990fe932c07c26ff" alt="Logo"/>
        <div className="menu">
          {MENUITEMS.map(item => {
            return (
              <div
                key={item.key}
                className={classnames({
                  menu_item: true,
                  active: appStore.currentTab === item.key
                })}
                onClick={() => (appStore.currentTab = item.key)}
              >
                <Link to={item.linkTo}>{item.title}</Link>
              </div>
            );
          })}
          <Icon type="message" />
        </div>
      </HeaderView>
    );
  }
}

export interface RouterItem {
  key: Tab;
  title: string;
  linkTo: string;
}
