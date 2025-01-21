import { TodoType } from "../types";
import TodoItem from "./TodoItem";

interface Props {
  todos: TodoType[];
  onUpdate: (targetId: number) => void;
  onDelete: (targetId: number) => void;
}

const List = ({ todos, onUpdate, onDelete }: Props) => {
  return (
    <>
      <div>
        <h3 className="mb-5 text-2xl font-bold">Todo List 📝</h3>
        <input
          type="text"
          className="mb-3 block w-full border-b border-gray-500 px-2 leading-10"
          placeholder="검색어를 입력해주세요."
        />
      </div>
      <ul className="rounded-md bg-slate-100 px-5 py-5">
        {todos.map((todo) => {
          return (
            <TodoItem
              onUpdate={onUpdate}
              onDelete={onDelete}
              key={todo.id}
              {...todo}
            ></TodoItem>
          );
        })}
      </ul>
    </>
  );
};
export default List;
