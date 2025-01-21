import { useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");
const formattedDate = dayjs().format("YY.MM.DD dd");

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: formattedDate,
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: formattedDate,
  },
  {
    id: 2,
    isDone: false,
    content: "고양이 놀아주기",
    date: formattedDate,
  },
];

function App() {
  const idRef = useRef(3);
  const [todos, setTodos] = useState(mockData);

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

  return (
    <div className="min-h-screen w-full bg-slate-100">
      <div className="ml-auto mr-auto min-h-screen w-full max-w-xl bg-white px-5 py-8 shadow-xl">
        <Header />
        <Editor onCreate={onCreate} />
        <List todos={todos} onUpdate={onUpdate} />
      </div>
    </div>
  );
}

export default App;
