import { element } from "./view/html-util.js";

export class App {
  mount() {
    const formElement = document.querySelector("#js-form");
    const inputElement = document.querySelector("#js-form-input");
    const containerElement = document.querySelector("#js-todo-list");
    const todoItemCountElement = document.querySelector("#js-todo-count");

    let todoItemCount = 0;

    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      // 追加する Todo アイテムの要素を作成する
      const todoItemElement = element`<li>${inputElement.value}</li>`;
      // Todo アイテムを container に追加する
      containerElement.appendChild(todoItemElement);
      // Todo アイテムを +1 し、表示されているテキストを更新する
      todoItemCount += 1;
      todoItemCountElement.textContent = `Todoアイテム数: ${todoItemCount}`;
      // 入力欄を空文字にしてリセットする
      inputElement.value = "";
    });
  }
}
