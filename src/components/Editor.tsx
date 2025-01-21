const Editor = () => {
  return (
    <div className="mb-10 flex gap-3">
      <input
        className="h-12 flex-1 rounded-lg border border-gray-500 px-4"
        type="text"
        placeholder="새로운 Todo..."
      />
      <button className="rounded-lg border border-indigo-500 bg-indigo-500 px-5 text-white">
        추가
      </button>
    </div>
  );
};
export default Editor;
