import { FaMapMarkedAlt } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

function LogoTitle() {
  return (
    <div className="w-full h-max flex items-center justify-center">
      <div className="w-full h-auto flex items-center justify-between gap-5 p-5">
        <div className="w-auto h-auto">
          <FaMapMarkedAlt className="text-4xl text-orange-200" />
        </div>
        <div>
          <p className="text-xl font-bold text-[#ffffff]">AzWayFinder</p>
        </div>
        <div>
          <FaCircleInfo className="text-sm text-slate-50 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default LogoTitle;
