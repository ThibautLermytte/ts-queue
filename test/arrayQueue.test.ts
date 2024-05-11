import { describe, test, expect } from 'vitest';
import ArrayQueue from '../src/arrayQueue';

const queue = new ArrayQueue<number>();

describe('Array queue', () => {
  test('isEmpty', () => {
    expect(queue.isEmpty()).toBeTruthy();
  });
  test('enqueue', () => {
    queue.enqueue(0);
    expect(queue.isEmpty()).toBeFalsy();
  });
  test('dequeue', () => {
    queue.dequeue();
    expect(queue.isEmpty()).toBeTruthy();
  });
});
