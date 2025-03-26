import { NavLink } from "react-router-dom";
import "./AnimatedBtnStyle.css";

const AnimatedButton = () => {
  return (
    <div className="text-box ml-[640px] mt-10">
      <NavLink className="btn btn-white btn-animated">Ko‘rish</NavLink>
    </div>
  );
};

export default AnimatedButton;
