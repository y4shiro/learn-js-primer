// ユニークな ID を管理する変数
let todoIdx = 0;

export class TodoItemModel {
  /**
   * @param {string} title Todo アイテムのタイトル
   * @param {boolean} completed Todo アイテムが完了済みなら true、そうでなければ false
   */
  constructor({ title, completed }) {
    // id は自動的に連番となりそれぞれのインスタンスごとに異なるものとする
    this.id = todoIdx++;
    this.title = title;
    this.completed = completed;
  }
}
