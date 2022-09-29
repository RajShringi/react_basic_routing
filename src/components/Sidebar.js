import {
  IoHomeOutline,
  IoPeopleOutline,
  IoBookOutline,
  IoHelp,
  IoNewspaperOutline,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";
function Sidebar() {
  return (
    <nav className="bg-gray-100 text-zinc-700 p-2 basis-[20%]">
      <ul>
        <NavLink activeClassName="bg-gray-200 block" exact to="/">
          <li className="flex items-center space-x-4 text-lg p-4 cursor-pointer hover:bg-gray-50">
            <IoHomeOutline />
            <p>Home</p>
          </li>
        </NavLink>

        <NavLink activeClassName="bg-gray-200 block" to="/articles">
          <li className="flex items-center space-x-4 text-lg p-4 cursor-pointer hover:bg-gray-50">
            <IoNewspaperOutline />
            <p>Articles</p>
          </li>
        </NavLink>

        <NavLink activeClassName="bg-gray-200 block" to="/people">
          <li className="flex items-center space-x-4 text-lg p-4 cursor-pointer hover:bg-gray-50">
            <IoPeopleOutline />
            <p>Peoples</p>
          </li>
        </NavLink>

        <NavLink activeClassName="bg-gray-200 block" to="/books">
          <li className="flex items-center space-x-4 text-lg p-4 cursor-pointer hover:bg-gray-50">
            <IoBookOutline />
            <p>Books</p>
          </li>
        </NavLink>

        <NavLink activeClassName="bg-gray-200 block" to="/help">
          <li className="flex items-center space-x-4 text-lg p-4 cursor-pointer hover:bg-gray-50">
            <IoHelp />
            <p>Help & Support</p>
          </li>
        </NavLink>
      </ul>
      <div className="w-[20%] fixed top-0 bottom-0 left-0 -z-10 bg-gray-100"></div>
    </nav>
  );
}
export default Sidebar;
