
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const SalesM = () => {
  const SalesOverview = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Sales Overview</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="border p-4 rounded">
          <h3>Daily Sales</h3>
          <p className="text-2xl">$12,500</p>
        </div>
        <div className="border p-4 rounded">
          <h3>Monthly Sales</h3>
          <p className="text-2xl">$375,000</p>
        </div>
      </div>
    </div>
  );

  const Transactions = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Transactions</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#T12345</td>
            <td>John Doe</td>
            <td>$150</td>
            <td>2024-01-20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <Routes>
      <Route path="overview" element={<SalesOverview />} />
      <Route path="transactions" element={<Transactions />} />
    </Routes>
  );
};

export default SalesM;
