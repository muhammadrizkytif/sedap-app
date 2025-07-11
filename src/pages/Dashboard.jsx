import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  return (
    <div id="dashboard-container">
      <PageHeader
        title="Customer Management"
        breadcrumb={["Dashboard", "Customers", "List"]}
      >
        <div className="space-x-2">
          <button className="bg-hijau text-white px-4 py-2 rounded-lg">
            Add Customer
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Export
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Cancel
          </button>
        </div>
      </PageHeader>
      <div
        id="dashboard-grid"
        className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div
          id="dashboard-orders"
          className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4 "
        >
          <div id="orders-icon" className="bg-hijau rounded-full p-4">
            <FaShoppingCart />
          </div>
          <div id="orders-info" className="flex flex-col">
            <span id="orders-count" className="text-2xl font-bold">
              45
            </span>
            <span id="orders-text" className="text-gray-400">
              Total Orders
            </span>
          </div>
        </div>

        <div
          id="dashboard-delivered"
          className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4"
        >
          <div id="delivered-icon" className="bg-biru rounded-full p-4">
            <FaTruck />
          </div>
          <div id="delivered-info" className="flex flex-col">
            <span id="delivered-count" className="text-2xl font-bold">
              175
            </span>
            <span id="delivered-text" className="text-gray-400">
              Total Delivered
            </span>
          </div>
        </div>

        <div
          id="dashboard-canceled"
          className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4"
        >
          <div id="canceled-icon" className="bg-merah rounded-full p-4">
            <FaBan />
          </div>
          <div id="canceled-info" className="flex flex-col">
            <span id="canceled-count" className="text-2xl font-bold">
              40
            </span>
            <span id="canceled-text" className="text-gray-400">
              Total Canceled
            </span>
          </div>
        </div>

        <div
          id="dashboard-revenue"
          className="	
                flex items-center space-x-5 bg-white rounded-lg shadow-md p-4"
        >
          <div id="revenue-icon" className="bg-kuning rounded-full p-4">
            <FaDollarSign />
          </div>
          <div id="revenue-info" className="flex flex-col">
            <span id="revenue-amount" className="text-2xl font-bold">
              Rp.12.583.000
            </span>
            <span id="revenue-text" className="text-gray-400">
              Total Revenue
            </span>
          </div>
        </div>
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          open modal
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        <div class="dropdown dropdown-start">
          <div tabindex="0" role="button" class="btn m-1">
            Click ⬇️
          </div>
          <ul
            tabindex="0"
            class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
