import { observable, action, computed, makeObservable } from "mobx";

class Store {
  user = null;

  constructor(user) {
    makeObservable(this, {
      user: observable,
      setUser: action,
      userInfo: computed,
    });
    this.user = user;
  }

  get userInfo() {
    console.log(this.user + " task number: X");
    return this.user + " task number: X";
  }

  setUser(name) {
    this.user = name;
  }
}

export default new Store();
