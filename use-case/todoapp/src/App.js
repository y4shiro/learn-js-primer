import { TodoListModel } from "./model/TodoListModel.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
import { element, render } from "./view/html-util.js";

export class App {
  constructor() {
    this.todoListModel = new TodoListModel();
  }
  mount() {
    const formElement = document.querySelector("#js-form");
    const inputElement = document.querySelector("#js-form-input");
    const containerElement = document.querySelector("#js-todo-list");
    const todoItemCountElement = document.querySelector("#js-todo-count");

    // TodoListModel の状態が更新されたら表示を更新する
    this.todoListModel.onChange(() => {
      // Todo リストをまとめる List 要素
      const todoListElement = element`<ul />`;
      const todoItems = this.todoListModel.getTodoItems();
      // それぞれの TodoItem 要素を TodoListElement 以下へ追加する
      todoItems.forEach(item => {
        // 完了済みならchecked属性をつけ、未完了ならchecked属性を外す
        const todoItemElement = item.completed
          ? element`<li><input type="checkbox" class="checkbox" checked><s>${item.title}</s></li>`
          : element`<li><input type="checkbox" class="checkbox">${item.title}</li>`;
        // チェックボックスがトグルしたときのイベントにリスナー関数を登録
        const inputCheckboxElement = todoItemElement.querySelector(".checkbox");
        inputCheckboxElement.addEventListener("change", () => {
          // 指定したTodoアイテムの完了状態を反転させる
          this.todoListModel.updateTodo({
            id: item.id,
            completed: !item.completed
          });
        });
        todoListElement.appendChild(todoItemElement);
      });
      // containerElement の中身を todoListElement で上書きする
      render(todoListElement, containerElement);
      // アイテム数の表示を更新
      todoItemCountElement.textContent = `Todoアイテム数: ${this.todoListModel.getTotalCount()}`;
    });
    // フォームを送信したら、新しい TodoItemModel を追加する
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      // 新しい TodoItem を TodoList へ追加する
      this.todoListModel.addTodo(new TodoItemModel({
        title: inputElement.value,
        completed: false
      }));
      inputElement.value = "";
    });
  }
}
