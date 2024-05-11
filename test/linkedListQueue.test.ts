import { describe, test, expect } from 'vitest';
import LinkedListQueue from '../lib/implementations/linkedListQueue';

const queue = new LinkedListQueue<number>();

describe('Linked list queue', () => {
  test('isEmpty', () => {
    expect(queue.isEmpty()).toBeTruthy();
  });
  test('enqueue', () => {
    queue.enqueue(0);
    queue.enqueue(1);
    expect(queue.isEmpty()).toBeFalsy();
  });
  test('dequeue', () => {
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBeTruthy();
  });
});
