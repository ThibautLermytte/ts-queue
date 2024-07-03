import { describe, test, expect } from 'vitest';
import ArrayQueue from '../lib/implementations/arrayQueue';
import QueueDecorator from '../lib/decorator';
import Queue from '../lib/queue';

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

const observer = new QueueObserver<number>(new ArrayQueue());

describe('Queue decorator: observer pattern', () => {
  test('update', () => {
    observer.update(1);
    expect(observer.isEmpty()).toBeFalsy();
    const data = observer.dequeue();
    expect(observer.isEmpty()).toBeTruthy();
    expect(data).toEqual(1);
  });
});
