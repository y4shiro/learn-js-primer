// const
const bookTitle = "JavaScript Primer";

// 複数の定数を定義したり出来る
const title = "title",
      category = "cat";

// 上記は下記と同じ
// const title = "title";
// const category = "cat";

// let
let let_title = "title";

// 変数の内容を再代入できる
let_title = "update title";

// 初期値を指定しない宣言も可能
let null_init;
console.log(null_init); // undefined という値になる
null_init = "add title";
console.log(null_init); // "add title" という値になる

// let で宣言した変数は何度でも代入できる
let count = 0;
count = 1;
count = 2;
count = 3;

// var
// let と違い、同じ名前の変数を再定義できてしまう
let x = 0;
let x = 1; // Syntax Error
var y = 0;
var y = 1;

// 変数名
// 下記は使用可能
var $;
var _title;
var jquery;
var TITLE;
var es2015;
var 日本語の変数名; // 利用できるが非推奨
// 下記は NG
var 1st; // 数字から始まっている
var 123; // 数字のみで構成されている
var var; // 変数宣言の予約語
var if;  // if 文の予約語

// const で宣言した場合でも、オブジェクトは変更可能
// 下記は再代入不可
const TEN_NUMBER = 10;
// 下記は値を変更できる
const object = {
  key: "value"
};
object.key = "changed value";

