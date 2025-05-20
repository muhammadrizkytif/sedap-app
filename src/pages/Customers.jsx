import { useState } from "react";
import customerData from "../Data/customersData.json"; // Assuming path is correct
import PageHeader from "../components/PageHeader"; // Assuming path is correct
import { Link } from "react-router-dom";

export default function Customers() {
    const [filters, setFilters] = useState({
        searchTerm: "",
        selectedLoyalty: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const loyaltyOptions = [...new Set(customerData.map(c => c.Loyalty))];
    const _searchTerm = filters.searchTerm.toLowerCase();

    const filteredCustomers = customerData.filter((c) => {
        const nameMatch = c.CustomerName?.toLowerCase().includes(_searchTerm) ?? false;
        const emailMatch = c.Email?.toLowerCase().includes(_searchTerm) ?? false;
        const loyaltyMatch = filters.selectedLoyalty ? c.Loyalty === filters.selectedLoyalty : true;

        return (nameMatch || emailMatch) && loyaltyMatch;
    });

    return (
        <div className="p-6 md:p-8 min-h-screen bg-gray-50"> {/* Added background color */}

            {/* Page Header - Comes first logically */}
            <PageHeader title="Customers" breadcrumb={["Dashboard", "Customers"]}>
                {/* Link styled as a button */}
                <Link
                    to="/AddCustomers" 
                    className="inline-flex items-center bg-hijau text-white px-5 py-2.5 rounded-lg text-sm font-medium shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition ease-in-out duration-150" // Adjusted padding, size, added focus styles
                >
                    Add Customer
                </Link>
            </PageHeader>

            {/* Filters Section */}
            <div className="mt-6 mb-6 flex flex-col md:flex-row gap-4"> {/* Use flexbox for filter layout, add gap */}
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

            {/* Table Container - Added shadow, border, rounded corners and background */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                 {/* Responsive table wrapper */}
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-700"> {/* Adjusted base text size/color */}
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100"> {/* Lighter header, uppercase */}
                            <tr>
                                {/* Adjusted padding, font weight */}
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">Customer ID</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">Name</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">Email</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">Phone</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">Loyalty</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Conditional rendering if there are customers */}
                            {filteredCustomers.length > 0 ? (
                                filteredCustomers.map((c) => (
                                    <tr key={c.CustomerID} className="bg-white border-b hover:bg-gray-50">
                                        {/* Adjusted padding */}
                                        <td className="px-6 py-4">{c.CustomerID}</td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{c.CustomerName}</td>
                                        <td className="px-6 py-4">{c.Email}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{c.Phone}</td>
                                        <td className="px-6 py-4">{c.Loyalty}</td>
                                    </tr>
                                ))
                            ) : (
                                // Row shown when no customers match filters
                                <tr>
                                    <td colSpan="5" className="text-center py-10 px-6 text-gray-500">
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