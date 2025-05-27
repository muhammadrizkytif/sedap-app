import { useState } from "react";
import customerData from "../Data/customersData.json";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

const getLoyaltyDotColor = (loyaltyLevel) => {
  switch (loyaltyLevel?.toLowerCase()) {
    case "gold":
      return "bg-yellow-400";
    case "silver":
      return "bg-gray-400";
    case "bronze":
      return "bg-orange-500";

    default:
      return "bg-gray-300";
  }
};

export default function Customers() {
  const [filters, setFilters] = useState({
    searchTerm: "",
    selectedLoyalty: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Ambil opsi loyalitas unik dari data
  // Pastikan customerData adalah array dan c.Loyalty ada
  const loyaltyOptions =
    customerData && Array.isArray(customerData)
      ? [...new Set(customerData.map((c) => c.Loyalty).filter(Boolean))] // filter(Boolean) untuk menghilangkan undefined/null jika ada
      : [];

  const _searchTerm = filters.searchTerm.toLowerCase();

  const filteredCustomers =
    customerData && Array.isArray(customerData)
      ? customerData.filter((c) => {
          const nameMatch =
            c.CustomerName?.toLowerCase().includes(_searchTerm) ?? false;
          const emailMatch =
            c.Email?.toLowerCase().includes(_searchTerm) ?? false;
          const loyaltyMatch = filters.selectedLoyalty
            ? c.Loyalty === filters.selectedLoyalty
            : true;

          return (nameMatch || emailMatch) && loyaltyMatch;
        })
      : [];

  return (
    <div className="p-6 md:p-8 min-h-screen bg-gray-50">
      <PageHeader title="Customers" breadcrumb={["Dashboard", "Customers"]}>
        <Link
          to="/AddCustomers" // Pastikan rute ini ada di router Anda
          className="inline-flex items-center bg-green-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition ease-in-out duration-150"
        >
          Add Customer
        </Link>
      </PageHeader>

      <div className="mt-6 mb-6 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          name="searchTerm"
          placeholder="Search by name or email..."
          value={filters.searchTerm}
          onChange={handleChange}
          className="flex-grow p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />

        <select
          name="selectedLoyalty"
          value={filters.selectedLoyalty}
          onChange={handleChange}
          className="w-full md:w-auto p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">All Loyalty Levels</option>
          {loyaltyOptions.map((loyalty) => (
            <option key={loyalty} value={loyalty}>
              {loyalty}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Customer ID
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Loyalty
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((c) => (
                  <tr
                    key={c.CustomerID}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">{c.CustomerID}</td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {c.CustomerName}
                    </td>
                    <td className="px-6 py-4">{c.Email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{c.Phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span
                          className={`w-2.5 h-2.5 rounded-full mr-2 ${getLoyaltyDotColor(
                            c.Loyalty
                          )}`}
                          title={c.Loyalty} // Tooltip untuk aksesibilitas
                        ></span>
                        {c.Loyalty}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-10 px-6 text-gray-500"
                  >
                    {" "}
                    {/* Sesuaikan colSpan jika menambah/mengurangi kolom */}
                    No matching customers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
