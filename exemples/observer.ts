import Queue from '../lib/queue';
import QueueDecorator from '../lib/decorator';

export interface Observer<T> {
  update(...datas: T[]): void;
}

export default class QueueObserver<T>
  extends QueueDecorator<T>
  implements Observer<T>
{
  constructor(queue: Queue<T>) {
    super(queue);
  }

  public update(...datas: T[]): void {
    this.enqueue(...datas);
  }
}
