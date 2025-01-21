import { useRef, useState } from "react";

interface Props {
  onCreate: (content: string) => void;
}

const Editor = ({ onCreate }: Props) => {
  const [value, setValue] = useState("");
  const valueRef = useRef<HTMLInputElement>(null);

  const onSubmit = () => {
    if (value === "") {
      valueRef.current?.focus();
      return;
    }
    onCreate(value);
    setValue("");
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const onChangeContent: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="mb-10 flex gap-3">
      <input
        className="h-12 flex-1 rounded-lg border border-gray-500 px-4"
        type="text"
        placeholder="새로운 Todo..."
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        ref={valueRef}
      />
      <button
        onClick={onSubmit}
        className="rounded-lg border border-indigo-500 bg-indigo-500 px-5 text-white"
      >
        추가
      </button>
    </div>
  );
};
export default Editor;
