import { observable } from 'mobx';

export default class TestStore {
  @observable test: string = 'Hello World';
}
