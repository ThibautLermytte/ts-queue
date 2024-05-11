export default interface Queue<T> {
  enqueue(...datas: T[]): void;
  dequeue(): T | null | undefined;
  isEmpty(): boolean;
}
