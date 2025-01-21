import { useEffect, useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { TodoType } from "./types";

dayjs.locale("ko");
const formattedDate = dayjs().format("YY.MM.DD dd");

function App() {
  // JSON.parse는 빈값을 반환하면 안됨.
  const getInitialTodos = (): TodoType[] => {
    const localData = localStorage.getItem("todos");
    if (localData) {
      return JSON.parse(localData);
    }
    return [];
  };

  const idRef = useRef(0);
  const [todos, setTodos] = useState<TodoType[]>(getInitialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onCreate = (content: string) => {
    const newData = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: formattedDate,
    };
    setTodos([newData, ...todos]);
  };

  const onUpdate = (targetId: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  const onDelete = (targetId: number) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="font-pre min-h-screen w-full bg-slate-100">
      <div className="ml-auto mr-auto min-h-screen w-full max-w-xl bg-white px-5 py-8 shadow-xl">
        <Header />
        <Editor onCreate={onCreate} />
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default App;
