import { NavLink } from "react-router-dom";
import "./AnimatedBtnStyle.css"

const AnimatedButton = () => {
  return (
    <div className="text-box">
      <NavLink to="/your-route" className="btn btn-white btn-animated">
        Ko‘rish
      </NavLink>
    </div>
  );
};

export default AnimatedButton;
