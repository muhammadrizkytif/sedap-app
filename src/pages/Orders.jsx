import React, { useState, useEffect } from "react";
import ordersData from "../Data/ordersData.json";

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};

const getStatusBadgeClasses = (status) => {
  const baseClasses =
    "px-3 py-1 text-xs font-medium rounded-full capitalize inline-block min-w-[80px] text-center";
  switch (status.toLowerCase()) {
    case "pending":
      return `${baseClasses} bg-yellow-100 text-yellow-700`;
    case "shipped":
      return `${baseClasses} bg-blue-100 text-blue-700`;
    case "delivered":
      return `${baseClasses} bg-green-100 text-green-700`;
    case "cancelled":
      return `${baseClasses} bg-red-100 text-red-700`;
    default:
      return `${baseClasses} bg-gray-100 text-gray-700`;
  }
};

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setOrders(ordersData);
      setIsLoading(false);
    }, 500);
  }, []);

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setSelectedOrder(null);
  };

  if (isLoading) {
    return (
      <div className="p-5 text-center text-lg text-gray-600">
        Loading orders...
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="p-5 text-center text-lg text-gray-600">
        No orders found.
      </div>
    );
  }

  return (
    <div className="p-5 bg-gray-50 min-h-screen">
      {" "}
      {/* Ganti bg-gray-50 jika berbeda dengan background utama Anda */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Manajemen Order
      </h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Nama Pelanggan
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Tanggal Order
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Total
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                  {order.id}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                  {order.customerName}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                  {new Date(order.orderDate).toLocaleDateString("id-ID")}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                  {formatCurrency(order.totalAmount)}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={getStatusBadgeClasses(order.status)}>
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">
                  <button
                    onClick={() => handleViewDetails(order)}
                    className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded hover:bg-blue-600 transition-colors duration-150"
                  >
                    Detail
                  </button>
                  {/* Tambahkan tombol aksi lain jika perlu */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal untuk detail order */}
      {selectedOrder && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
          onClick={closeModal} // Klik di backdrop untuk menutup
        >
          <div
            className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Mencegah penutupan modal saat klik di dalam konten modal
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Detail Order: {selectedOrder.id}
            </h2>

            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>ID Order:</strong> {selectedOrder.id}
              </p>
              <p>
                <strong>Nama Pelanggan:</strong> {selectedOrder.customerName}
              </p>
              <p>
                <strong>Tanggal Order:</strong>{" "}
                {new Date(selectedOrder.orderDate).toLocaleDateString("id-ID")}
              </p>
              <p>
                <strong>Total Pembayaran:</strong>{" "}
                {formatCurrency(selectedOrder.totalAmount)}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span className={getStatusBadgeClasses(selectedOrder.status)}>
                  {selectedOrder.status}
                </span>
              </p>

              <h3 className="text-md font-semibold text-gray-800 pt-2">
                Item Order:
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {selectedOrder.items.map((item, index) => (
                  <li key={index}>
                    {item.name} - {item.quantity} x {formatCurrency(item.price)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-500 text-white text-sm font-medium rounded hover:bg-gray-600 transition-colors duration-150"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrdersPage;
