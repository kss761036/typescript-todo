const TodoItem = () => {
  return (
    <li className="flex items-center border-b border-gray-300 py-3">
      <input type="checkbox" name="" id="" className="mr-3 h-4 w-4" />
      <label htmlFor="" className="mr-3 flex flex-1 items-center">
        <div className="content line1 flex-1 pr-3 text-sm">투두 내용</div>
        <div className="date ml-auto text-sm text-gray-400">2025.01.21</div>
      </label>
      <button className="ml-auto rounded-lg bg-slate-300 px-3 py-1 text-xs text-gray-700">
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
