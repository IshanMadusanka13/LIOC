import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const Dashboard = ({ userRole }) => {
  userRole = "customer"; // Default role for testing
  const navigate = useNavigate();

  const roles = {
    inventory: "Inventory Manager",
    sales: "Sales Manager",
    supplier: "Supplier Manager",
    customer: "Customer Manager",
  };

  const menuItems = {
    inventory: [
      { name: 'Stock Overview', path: 'inventory/stock' },
      { name: 'Orders', path: 'inventory/orders' },
    ],
    sales: [
      { name: 'Sales Overview', path: 'sales/overview' },
      { name: 'Transactions', path: 'sales/transactions' },
    ],
    supplier: [
      { name: 'List', path: 'supplier/list' },
      { name: 'Chain', path: 'supplier/chain' },
    ],
    customer: [
      { name: 'List', path: 'customer/list' },
      { name: 'Loyalty', path: 'customer/loyalty' },
    ],
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-64 bg-blue-800 text-white">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-6">{roles[userRole]}</h2>
          <nav>
            {menuItems[userRole]?.map((item, index) => (
              <div
                key={index}
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 mb-1 cursor-pointer"
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 overflow-hidden">
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
