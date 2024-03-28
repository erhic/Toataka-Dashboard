const Table = () => {
  return (
    <>
      <div className="m-4 mt-6 bg white">
        <p className=" py-2 text-slate-gray font-semibold">Recent Orders</p>
        <table className="rounded-lg divide-y divide-gray-200  overflow-x-auto border  bg-gray-100">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Order ID
              </th>
              <th
                scope="col"
                className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Client Name
              </th>
              <th
                scope="col"
                className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Service
              </th>

              <th
                scope="col"
                className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-2 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      <p>Jane Cooper</p>
                    </div>
                    <div className="text-sm text-gray-500">
                      <p>jane.c@a.com</p>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-2 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Regional </div>
                <div className="text-sm text-gray-500">Optimization</div>
              </td>
              <td className="px-2 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Pickup
                </span>
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                Active
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                jane.cooper@example.com
              </td>
              <td className="px-2 py-4 whitespace-nowrap  text-sm font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                  Edit
                </a>
                <a href="#" className="ml-2 text-red-600 hover:text-red-900">
                  Delete
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      <p>Jane Cooper</p>
                    </div>
                    <div className="text-sm text-gray-500">
                      <p>jane.c@a.com</p>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-2 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Regional </div>
                <div className="text-sm text-gray-500">Optimization</div>
              </td>
              <td className="px-2 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Rental
                </span>
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                Inactive
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                jane.cooper@example.com
              </td>
              <td className="px-2 py-4 whitespace-nowrap  text-sm font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                  Edit
                </a>
                <a href="#" className="ml-2 text-red-600 hover:text-red-900">
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
