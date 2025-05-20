import { CgUserList } from "react-icons/cg"; 
import { AiOutlineUser } from "react-icons/ai"; 
import { MdDashboard } from "react-icons/md";
import { AiFillShopping } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
// 4. Import icon yang lebih sesuai untuk error
import { FiAlertTriangle } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function MenuList() {
  // Fungsi untuk menentukan kelas CSS NavLink (sudah bagus!)
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2 transition-colors duration-150 ease-in-out
        ${
          isActive
            ? "text-hijau bg-green-200 font-extrabold" // Pastikan 'hijau' terdefinisi di config tailwind atau ganti dg warna standar
            : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`;

  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        {/* Menu Utama */}
        <li>
          <NavLink id="menu-dashboard" to="/" className={menuClass}>
            {/* 3. Gunakan className untuk icon */}
            <MdDashboard className="mr-2 text-xl flex-shrink-0" />
            <span className="truncate">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-orders" to="/orders" className={menuClass}>
            <AiFillShopping className="mr-2 text-xl flex-shrink-0" />
            <span className="truncate">Orders</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-customers" to="/customers" className={menuClass}>
            <BiUserCircle className="mr-2 text-xl flex-shrink-0" />
            <span className="truncate">Customers</span>
          </NavLink>
        </li>
        <li>
        <NavLink id="menu-userlist" to="UserList" className={menuClass}>
            <CgUserList  className="mr-2 text-xl flex-shrink-0"/>
            <span className="truncate">List User</span>
          </NavLink>
        </li>

        {/* Pemisah Opsional */}
        <li className="pt-4 pb-2">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4">Error Pages</span>
        </li>

        {/* Menu Error */}
        <li>
          <NavLink id="menu-400" to="/error/400" className={menuClass}>
            <FiAlertTriangle className="mr-2 text-xl flex-shrink-0" />
            <span className="truncate">Error 400</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-401" to="/error/401" className={menuClass}>
            <FiAlertTriangle className="mr-2 text-xl flex-shrink-0" />
            <span className="truncate">Error 401</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-403" to="/error/403" className={menuClass}>
            <FiAlertTriangle className="mr-2 text-xl flex-shrink-0" />
            <span className="truncate">Error 403</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}