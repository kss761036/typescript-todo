import { useState } from "react";
import { TodoType } from "../types";
import TodoItem from "./TodoItem";

interface Props {
  todos: TodoType[];
  onUpdate: (targetId: number) => void;
  onDelete: (targetId: number) => void;
}

const List = ({ todos, onUpdate, onDelete }: Props) => {
  const [search, setSearch] = useState("");

  const onChangeSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => todo.content.includes(search));
  };

  const filteredTodos = getFilteredData();

  return (
    <>
      <div>
        <h3 className="mb-5 text-2xl font-bold">Todo List 📝</h3>
        <input
          type="text"
          className="mb-3 block w-full border-b border-gray-500 px-2 leading-10"
          placeholder="검색어를 입력해주세요."
          value={search}
          onChange={onChangeSearch}
        />
      </div>
      <ul className="rounded-md bg-slate-100 px-5 py-5">
        {filteredTodos.length === 0 ? (
          <li className="text-center">Todo가 없습니다.</li>
        ) : (
          filteredTodos.map((todo) => {
            return (
              <TodoItem
                onUpdate={onUpdate}
                onDelete={onDelete}
                key={todo.id}
                {...todo}
              ></TodoItem>
            );
          })
        )}
      </ul>
    </>
  );
};
export default List;
