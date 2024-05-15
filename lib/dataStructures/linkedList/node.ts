export default class Node<T = any> {
  public next: Node<T> | null = null;

  constructor(public data: T) {}
}
