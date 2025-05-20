import { useState } from "react";
import productData from "./products.json";

export default function ProductListSearchFilter() {
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredProducts = productData.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(_searchTerm) ||
      product.description.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? product.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  const allTags = [
    ...new Set(productData.flatMap((product) => product.tags)),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-500 py-8 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">
          Explore Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="relative">
            <input
              type="text"
              name="searchTerm"
              placeholder="Search product..."
              className="w-full p-3 pl-10 rounded-md border border-gray-900 focus:ring focus:ring-blue-200 focus:border-blue-300 transition-shadow duration-200"
              onChange={handleChange}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>

          <select
            name="selectedTag"
            className="w-full p-3 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-300 appearance-none bg-white pr-8 hover:border-blue-400 transition-shadow duration-200"
            onChange={handleChange}
          >
            <option value="">All Tags</option>
            {allTags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  {item.description}
                </p>
                <p className="text-gray-500 text-sm mb-1">
                  Brand: {item.brand}
                </p>
                <p className="text-green-600 text-sm font-medium mb-3">
                  Price: ${item.price}
                </p>
                <div>
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}