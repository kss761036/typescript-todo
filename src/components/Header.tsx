import dayjs from "dayjs";
import "dayjs/locale/ko";

const Header = () => {
  dayjs.locale("ko");
  const formattedDate = dayjs().format("YYYY-MM-DD (dddd)");
  return (
    <div className="mb-5">
      <h3 className="text-xl font-bold">오늘은..</h3>
      <h2 className="mt-3 text-3xl font-bold text-indigo-400">
        {formattedDate}
      </h2>
    </div>
  );
};
export default Header;
