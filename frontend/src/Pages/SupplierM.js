import React from 'react';
import { Routes, Route } from 'react-router-dom';

const SupplierM = () => {
  const SupplierList = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Supplier List</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Company</th>
            <th>Contact</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#S12345</td>
            <td>Fuel Corp</td>
            <td>supplier@fuelcorp.com</td>
            <td>Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const SupplyChain = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Supply Chain</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="border p-4 rounded">
          <h3>Active Orders</h3>
          <p className="text-2xl">15</p>
        </div>
        <div className="border p-4 rounded">
          <h3>Pending Deliveries</h3>
          <p className="text-2xl">8</p>
        </div>
      </div>
    </div>
  );

  return (
    <Routes>
      <Route path="list" element={<SupplierList />} />
      <Route path="chain" element={<SupplyChain />} />
    </Routes>
  );
};

export default SupplierM;
