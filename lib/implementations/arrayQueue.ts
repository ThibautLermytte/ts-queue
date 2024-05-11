import Queue from '../queue';

export default class ArrayQueue<T> implements Queue<T> {
  private data: Array<T> = [];

  public enqueue(...datas: T[]): void {
    this.data.push(...datas);
  }

  public dequeue(): T | undefined {
    return this.data.shift();
  }

  public isEmpty(): boolean {
    return this.data.length === 0;
  }
}
