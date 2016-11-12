export default class Timer {
  constructor() {
    this.startTime = 0;
    this.endTime = 0;
  }

  start() {
    this.startTime = window.performance.now();
  }

  stop() {
    this.endTime = window.performance.now();
  }

  getElapsed() {
    return this.endTime - this.startTime;
  }
}
