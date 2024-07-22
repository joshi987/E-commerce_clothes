// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function Admin() {
//   const [totalInfo, setTotalInfo] = useState({
//     totalProducts: 100,
//     totalUsers: 50,
//     totalSales: 5000,
//   });

//   const [userOrders, setUserOrders] = useState([]);

//   const generateDummyUserOrders = () => {
//     const dummyOrders = [];
//     for (let i = 1; i <= 10; i++) {
//       const userId = `user${i}`;
//       const orders = [
//         {
//           id: 1,
//           description: `Product ${i}-1`,
//           price: Math.floor(Math.random() * 100) + 1,
//         },
//         {
//           id: 2,
//           description: `Product ${i}-2`,
//           price: Math.floor(Math.random() * 100) + 1,
//         },
//         {
//           id: 3,
//           description: `Product ${i}-3`,
//           price: Math.floor(Math.random() * 100) + 1,
//         },
//       ];
//       dummyOrders.push({ userId, orders });
//     }
//     return dummyOrders;
//   };

//   useEffect(() => {
//     const dummyData = generateDummyUserOrders();
//     setUserOrders(dummyData);
//   }, []);

//   const handleLogout = () => {
//     console.log("Admin logout");
//   };

//   return (
//     <div className="flex">
//       <div className="bg-gray-800 text-white flex flex-col h-screen w-64 overflow-y-auto">
//         <div className="p-4">
//           <h1 className="text-2xl font-bold">Admin Panel</h1>
//           <ul className="mt-4">
//             <li className="mb-2">
//               <Link
//                 to="dummy/createProductForm"
//                 className="block py-2 px-4 rounded hover:bg-gray-700 transition duration-300"
//               >
//                 Add Product
//               </Link>
//             </li>
//             <li className="mb-2">
//               <Link
//                 to="/admin/dummy"
//                 className="block py-2 px-4 rounded hover:bg-gray-700 transition duration-300"
//               >
//                 Show All Products
//               </Link>
//             </li>
//             <li className="mb-2">
//               <button
//                 onClick={handleLogout}
//                 className="block py-2 px-4 rounded bg-red-500 hover:bg-red-700 transition duration-300"
//               >
//                 Admin Logout
//               </button>
//             </li>
//           </ul>
//         </div>
//         <div className="flex-1"></div>
//       </div>

//       <div className="flex-1 p-8">
//         <div className="container mx-auto">
//           <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
//           <div className="grid grid-cols-3 gap-4">
//             <div className="bg-green-500 text-white rounded-lg p-4">
//               <h2 className="text-xl font-semibold">Total Products:</h2>
//               <p>{totalInfo.totalProducts}</p>
//             </div>
//             <div className="bg-yellow-500 text-white rounded-lg p-4">
//               <h2 className="text-xl font-semibold">Total Users:</h2>
//               <p>{totalInfo.totalUsers}</p>
//             </div>
//             <div className="bg-blue-500 text-white rounded-lg p-4">
//               <h2 className="text-xl font-semibold">Total Sales:</h2>
//               <p>{totalInfo.totalSales}</p>
//             </div>

//             <div className="col-span-3">
//               <h2 className="text-2xl font-semibold mt-8 mb-4">User Orders</h2>
//               <table className="table-auto w-full">
//                 <thead>
//                   <tr>
//                     <th className="px-4 py-2">User ID</th>
//                     <th className="px-4 py-2">Description</th>
//                     <th className="px-4 py-2">Price</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {userOrders.map((user) =>
//                     user.orders.map((order) => (
//                       <tr key={`${user.userId}-${order.id}`}>
//                         <td className="border px-4 py-2">{user.userId}</td>
//                         <td className="border px-4 py-2">
//                           {order.description}
//                         </td>
//                         <td className="border px-4 py-2">{order.price}</td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Admin;
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { adminlogout } from "../../../services/authServices";

function Admin() {
  const [totalInfo, setTotalInfo] = useState({
    totalProducts: 100,
    totalUsers: 50,
    totalSales: 5000,
  });
  const navigate = useNavigate();
  const [userOrders, setUserOrders] = useState([]);

  // Generate random user ID function
  const generateRandomUserId = (length) => {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const generateRandomPrice = () => {
    return `₹${Math.floor(Math.random() * 401) + 100}`; // Generate random price between ₹100 and ₹500
  };

  const generateDummyUserOrders = () => {
    const dummyOrders = [];
    const descriptions = [
      "Redhead with freckles",
      "Girl in black dress",
      "Girl with camera",
    ];
    for (let i = 1; i <= 10; i++) {
      const userId = generateRandomUserId(20); // Generate random user ID
      const orders = [
        {
          id: 1,
          description: descriptions[i % 3], // Loop through descriptions
          price: generateRandomPrice(), // Generate random price
        },
        {
          id: 2,
          description: descriptions[(i + 1) % 3], // Loop through descriptions
          price: generateRandomPrice(), // Generate random price
        },
        {
          id: 3,
          description: descriptions[(i + 2) % 3], // Loop through descriptions
          price: generateRandomPrice(), // Generate random price
        },
      ];
      dummyOrders.push({ userId, orders });
    }
    return dummyOrders;
  };

  useEffect(() => {
    const dummyData = generateDummyUserOrders();
    setUserOrders(dummyData);
  }, []);

  const handleLogout = async () => {
    try {
      toast.success("Logged out successfully");
      navigate("/adminlogin");
    } catch (error) {
      toast.error("Failed to log out");
    }
  };

  return (
    <div className="flex">
      <div className="bg-gray-800 text-white flex flex-col h-screen w-64">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <ul className="mt-4">
            <li className="mb-2">
              <Link
                to="dummy/createProductForm"
                className="block py-2 px-4 rounded hover:bg-gray-700 transition duration-300"
              >
                Add Product
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/admin/dummy"
                className="block py-2 px-4 rounded hover:bg-gray-700 transition duration-300"
              >
                Show All Products
              </Link>
            </li>
            <li className="mb-2">
              <button
                onClick={handleLogout}
                className="block py-2 px-4 rounded bg-red-500 hover:bg-red-700 transition duration-300"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
        <div className="flex-1"></div>
      </div>

      <div className="flex-1 p-8">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-500 text-white rounded-lg p-4">
              <h2 className="text-xl font-semibold">Total Products:</h2>
              <p>{totalInfo.totalProducts}</p>
            </div>
            <div className="bg-yellow-500 text-white rounded-lg p-4">
              <h2 className="text-xl font-semibold">Total Users:</h2>
              <p>{totalInfo.totalUsers}</p>
            </div>
            <div className="bg-blue-500 text-white rounded-lg p-4">
              <h2 className="text-xl font-semibold">Total Sales:</h2>
              <p>{totalInfo.totalSales}</p>
            </div>

            <div className="col-span-3">
              <h2 className="text-2xl font-semibold mt-8 mb-4">User Orders</h2>
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">User ID</th>
                    <th className="px-4 py-2">Description</th>
                    <th className="px-4 py-2">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {userOrders.map((user) =>
                    user.orders.map((order, index) => (
                      <tr key={`${user.userId}-${order.id}`}>
                        <td className="border px-4 py-2">{user.userId}</td>
                        <td className="border px-4 py-2">
                          {order.description}
                        </td>
                        <td className="border px-4 py-2">{order.price}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
