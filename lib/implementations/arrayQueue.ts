import Queue from '../queue';

export default class ArrayQueue<DataType> implements Queue<DataType> {
  private data: Array<DataType> = [];

  public enqueue(...datas: DataType[]): void {
    this.data.push(...datas);
  }

  public dequeue(): DataType | undefined {
    return this.data.shift();
  }

  public isEmpty(): boolean {
    return this.data.length === 0;
  }
}
