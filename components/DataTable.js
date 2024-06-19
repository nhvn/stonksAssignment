import { useEffect, useState } from 'react';
import axios from 'axios';

const DataTable = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Number of items per page
  const itemsPerPage = 10;

  // Fetch data whenever filters or pagination changes
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://665621609f970b3b36c4625e.mockapi.io/users?page=${currentPage}&limit=${itemsPerPage}&search=${searchTerm}`);
      setData(response.data);
    };

    fetchData();
  }, [currentPage, searchTerm]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to page 1 when searching
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-full lg:w-4/5 xl:w-3/5"> {/* Adjusted width to 70% for larger screens */}
        <table className="w-full min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> {/* Left align headers */}
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> {/* Left align headers */}
                Username
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-left">{item.id}</td> {/* Left align data */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-left">{item.username}</td> {/* Left align data */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center justify-center"> {/* Center pagination and search input */}
        {Array.from({ length: Math.ceil(initialData.length / itemsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            className={`px-3 py-1 mx-1 rounded-md ${currentPage === index + 1 ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center"> {/* Center search input */}
        <input
          type="text"
          className="border border-gray-300 px-3 py-1 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Search by username"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default DataTable;
