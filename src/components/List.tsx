import TodoItem from "./TodoItem";

const List = () => {
  return (
    <>
      <div>
        <h3 className="mb-5 text-2xl">Todo List🌲</h3>
        <input
          type="text"
          className="mb-3 block w-full border-b border-gray-500 px-2 leading-10"
          placeholder="검색어를 입력해주세요."
        />
      </div>
      <ul className="rounded-md bg-slate-100 px-5 py-5">
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
      </ul>
    </>
  );
};
export default List;
