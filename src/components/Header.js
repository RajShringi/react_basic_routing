import { IoLayersOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="p-4 bg-indigo-800 text-white">
      <Link to="/">
        <div className="flex space-x-4 items-center text-2xl">
          <IoLayersOutline />
          <h2>Dashboard</h2>
        </div>
      </Link>
    </div>
  );
}
export default Header;
