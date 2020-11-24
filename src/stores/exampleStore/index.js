import { observable, action, makeObservable } from "mobx";

class ExampleStore {
  likesCount = 12;

  constructor(likesCount) {
    makeObservable(this, {
      likesCount: observable,
      updateCount: action,
    });
    this.likesCount = likesCount;
  }

  updateCount() {
    this.likesCount++;
  }
}
