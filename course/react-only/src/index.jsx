import React from "react";
import ReactDOM from "react-dom";
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';

const App = () => {
  // タスクリストを格納する

  // 追加前のタスクを格納する

  // ページマウント時にモックAPIからデータを取得

  return (
    <div style={{ width: '700px', margin: '0 auto'}}>
      {/* ヘッダー */}
      <h1>Tutorial Works</h1>
      <h2>React Todo List</h2>

      {/* 一覧表示 */}
      <TaskList />

      {/* タスク追加、削除 */}
      <TaskForm />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
