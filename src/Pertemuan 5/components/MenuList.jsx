// MenuList.jsx
import { MdDashboard } from "react-icons/md";
import { AiFillShopping } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

export default function MenuList() {
    return (
        <div id="sidebar-menu" className="mt-10">
            <ul id="menu-list" className="space-y-3">
                <li>
                    <div id="menu-1" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                        <MdDashboard className="mr-4 text-xl"/>Dashboard
                    </div>
                </li>
                <li>
                    <div id="menu-2" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                        <AiFillShopping className="mr-4 text-xl"/>Orders
                    </div>
                </li>
                <li>
                    <div id="menu-3" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                        <BiUserCircle className="mr-4 text-xl" />Customers
                    </div>
                </li>
            </ul>
        </div>
    );
}