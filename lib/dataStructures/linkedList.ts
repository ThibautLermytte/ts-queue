export class Node<DataType> {
  public next: Node<DataType> | null = null;

  constructor(public data: DataType) {}
}

export default class LinkedList<DataType> {
  protected front: Node<DataType> | null = null;
  protected rear: Node<DataType> | null = null;
}
