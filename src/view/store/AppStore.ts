import { observable } from 'mobx';

export type Tab = 'home' | 'about' | 'timeline';

export default class AppStore {
  @observable currentTab: Tab = 'home';
}