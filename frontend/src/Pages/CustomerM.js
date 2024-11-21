
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const CustomerM = () => {
  const CustomerList = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Customer List</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#C12345</td>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const LoyaltyProgram = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Loyalty Program</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="border p-4 rounded">
          <h3>Total Members</h3>
          <p className="text-2xl">1,234</p>
        </div>
        <div className="border p-4 rounded">
          <h3>Points Issued</h3>
          <p className="text-2xl">50,000</p>
        </div>
      </div>
    </div>
  );

  return (
    <Routes>
      <Route path="list" element={<CustomerList />} />
      <Route path="loyalty" element={<LoyaltyProgram />} />
    </Routes>
  );
};

export default CustomerM;
