export default class Node<T = unknown> {
  public data!: T;
  public next: Node<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}
