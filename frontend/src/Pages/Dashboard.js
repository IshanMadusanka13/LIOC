
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ userRole }) => {
userRole = 'inventory';
  const [activeTab, setActiveTab] = useState('dashboard');

  const roles = {
    inventory: "Inventory Manager",
    sales: "Sales Manager",
    supplier: "Supplier Manager",
    customer: "Customer Manager"
  };

  const menuItems = {
    inventory: [
      { name: 'Stock Management', path: '/inventory/stock' },
      { name: 'Fuel Orders', path: '/inventory/orders' },
      { name: 'Reports', path: '/inventory/reports' }
    ],
    sales: [
      { name: 'Sales Overview', path: '/sales/overview' },
      { name: 'Transactions', path: '/sales/transactions' },
      { name: 'Customer Orders', path: '/sales/orders' }
    ],
    supplier: [
      { name: 'Supplier List', path: '/supplier/list' },
      { name: 'Supply Chain', path: '/supplier/chain' },
      { name: 'Contracts', path: '/supplier/contracts' }
    ],
    customer: [
      { name: 'Customer List', path: '/customer/list' },
      { name: 'Loyalty Program', path: '/customer/loyalty' },
      { name: 'Feedback', path: '/customer/feedback' }
    ]
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-64 bg-blue-800 text-white">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-6">{roles[userRole]}</h2>
          <nav>
            {menuItems[userRole]?.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 mb-1"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 overflow-hidden">
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-600">Total Orders</p>
                  <p className="text-2xl font-bold">1,234</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-600">Revenue</p>
                  <p className="text-2xl font-bold">$45,678</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <p>New order received from Customer #1234</p>
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <p>Stock updated for Premium Fuel</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Overview</h3>
            {/* Add your specific role-based content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
