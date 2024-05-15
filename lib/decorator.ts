import Queue from './queue';

export default class QueueDecorator<DataType> implements Queue<DataType> {
  constructor(protected queue: Queue<DataType>) {}

  public enqueue(...datas: DataType[]): void {
    this.queue.enqueue(...datas);
  }

  public dequeue(): DataType | null | undefined {
    return this.queue.dequeue();
  }

  public isEmpty(): boolean {
    return this.queue.isEmpty();
  }
}
