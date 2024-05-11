import Node from './node';

export default class LinkedList<T = any> {
  protected front: Node<T> | null = null;
  protected rear: Node<T> | null = null;
}
