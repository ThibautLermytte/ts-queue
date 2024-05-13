import Queue from '../lib/queue';
import QueueDecorator from '../lib/decorator';

interface Observer<T> {
  update(...datas: T[]): void;
}

class QueueObserver<T> extends QueueDecorator<T> implements Observer<T> {
  constructor(queue: Queue<T>) {
    super(queue);
  }

  public update(...datas: T[]): void {
    this.enqueue(...datas);
  }
}
