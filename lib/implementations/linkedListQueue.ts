import Queue from '../queue';
import LinkedList, { Node } from '../dataStructures/linkedList';

export default class LinkedListQueue<DataType>
  extends LinkedList<DataType>
  implements Queue<DataType>
{
  public enqueue(...datas: DataType[]): void {
    for (const data of datas) {
      const node = new Node<DataType>(data);

      if (this.isEmpty()) {
        this.front = node;
        this.rear = node;
      } else if (this.rear) {
        this.rear.next = node;
        this.rear = node;
      }
    }
  }

  public dequeue(): DataType | null | undefined {
    let data: DataType | null = null;

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
