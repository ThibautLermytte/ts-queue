import Node from './node';

export default class LinkedList<Link = Node> {
  protected front: Link | null = null;
  protected rear: Link | null = null;
}
