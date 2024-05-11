import Queue from '../lib/queue';
import ArrayQueue from '../lib/implementations/arrayQueue';
import LinkedListQueue from '../lib/implementations/linkedListQueue';
import { describe, bench, beforeAll } from 'vitest';

const size = 100000;
const arrayQueue = new ArrayQueue<number>();
const linkedListQueue = new LinkedListQueue<number>();

const fill = (queue: Queue<number>, size: number) => {
  for (let counter = 0; counter < size; counter++) queue.enqueue(counter);
};

describe('Comparing queue filling performances.', () => {
  bench(`Fill array queue, ${size} items.`, () => {
    fill(arrayQueue, size);
  });

  bench(`Fill linked list queue, ${size} items.`, () => {
    fill(linkedListQueue, size);
  });
});

describe('Comparing queue Empty performances with while instruction.', () => {
  const emptyWhile = (queue: Queue<number>) => {
    while (!queue.isEmpty()) queue.dequeue();
  };

  bench('Empty array queue.', () => emptyWhile(arrayQueue));
  bench('Empty linked list queue.', () => emptyWhile(linkedListQueue));
});

describe('Comparing queue Empty performances with for instruction.', () => {
  const emptyFor = (queue: Queue<number>) => {
    for (let data = queue.dequeue(); data; data = queue.dequeue());
  };

  beforeAll(() => {
    fill(arrayQueue, size);
    fill(linkedListQueue, size);
  });

  bench('Empty array queue.', () => emptyFor(arrayQueue));
  bench('Empty linked list queue.', () => emptyFor(linkedListQueue));
});
