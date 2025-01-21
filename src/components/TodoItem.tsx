import { TodoType } from "../types";

interface Props {
  onUpdate: (targetId: number) => void;
}

const TodoItem = ({
  id,
  isDone,
  content,
  date,
  onUpdate,
}: TodoType & Props) => {
  const onChangeCheckbox: React.ChangeEventHandler<HTMLInputElement> = () => {
    onUpdate(id);
  };

  return (
    <li className="flex items-center border-b border-gray-300 py-3">
      <input
        type="checkbox"
        id={`todo${id}`}
        checked={isDone}
        className="mr-3 h-4 w-4"
        onChange={onChangeCheckbox}
      />
      <label htmlFor={`todo${id}`} className="mr-3 flex flex-1 items-center">
        <div className="content line1 flex-1 pr-3 text-sm">{content}</div>
        <div className="date ml-auto text-sm text-gray-400">
          {date.toString()}
        </div>
      </label>
      <button className="ml-auto rounded-lg bg-slate-300 px-3 py-1 text-xs text-gray-700">
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
