import Queue from '../queue';
import Node from '../dataStructures/linkedList/node';
import LinkedList from '../dataStructures/linkedList/linkedList';

export default class LinkedListQueue<T = any>
  extends LinkedList<T>
  implements Queue<T>
{
  public enqueue(...datas: T[]): void {
    for (const data of datas) {
      const node = new Node<T>(data);

      if (this.isEmpty()) {
        this.front = node;
        this.rear = node;
      } else if (this.rear) {
        this.rear.next = node;
        this.rear = node;
      }
    }
  }

  public dequeue() {
    let data: T | null = null;

    if (this.front) {
      data = this.front.data;
      this.front = this.front.next;
    }
    return data;
  }

  public isEmpty(): boolean {
    return this.front === null;
  }
}
