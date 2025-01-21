const Header = () => {
  const date = new Date();
  return (
    <div className="mb-5">
      <h3 className="text-xl font-bold">오늘은 📅</h3>
      <h2 className="mt-3 text-4xl font-bold text-indigo-400">
        {date.toDateString()}
      </h2>
    </div>
  );
};
export default Header;
