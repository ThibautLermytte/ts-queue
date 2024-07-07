export class Node<DataType> {
  public next: Node<DataType> | null = null;

  constructor(public data: DataType) {}
}

export default class LinkedList<DataType> {
  public front: Node<DataType> | null = null;
  public rear: Node<DataType> | null = null;
}
