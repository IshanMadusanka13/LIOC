
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const InventoryM = () => {
  const StockManagement = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Stock Management</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="border p-4 rounded">
          <h3 className="font-semibold">Petrol 92</h3>
          <p className="text-2xl">25,000 L</p>
        </div>
        <div className="border p-4 rounded">
          <h3 className="font-semibold">Petrol 95</h3>
          <p className="text-2xl">15,000 L</p>
        </div>
        <div className="border p-4 rounded">
          <h3 className="font-semibold">Diesel</h3>
          <p className="text-2xl">40,000 L</p>
        </div>
      </div>
    </div>
  );

  const FuelOrders = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Fuel Orders</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Fuel Type</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#12345</td>
            <td>Petrol 92</td>
            <td>5000 L</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <Routes>
      <Route path="stock" element={<StockManagement />} />
      <Route path="orders" element={<FuelOrders />} />
    </Routes>
  );
};

export default InventoryM;
