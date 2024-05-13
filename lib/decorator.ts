import Queue from './queue';

export default class QueueDecorator<T> implements Queue<T> {
  constructor(protected queue: Queue<T>) {}

  public enqueue(...datas: T[]): void {
    this.queue.enqueue(...datas);
  }

  public dequeue(): T | null | undefined {
    return this.queue.dequeue();
  }

  public isEmpty(): boolean {
    return this.queue.isEmpty();
  }
}
