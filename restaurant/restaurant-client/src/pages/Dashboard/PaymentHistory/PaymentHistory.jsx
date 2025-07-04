import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Payment History
      </h2>
      <p className="text-lg text-gray-600 text-center mb-4">
        Total Payments:{" "}
        <span className="font-semibold text-gray-800">{payments?.length}</span>
      </p>

      {/* Table Container */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="table-auto w-full text-left">
          {/* Table Header */}
          <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Price ($)</th>
              <th className="px-6 py-3">Transaction ID</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {payments.map((payment, index) => (
              <tr
                key={payment._id}
                className={`hover:bg-gray-100 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-6 py-3">{index + 1}</td>
                <td className="px-6 py-3">${payment.price}</td>
                <td className="px-6 py-3 text-gray-600">
                  {payment.transactionId}
                </td>
                <td
                  className={`px-6 py-3 ${
                    payment.status === "succeeded"
                      ? "text-green-600 font-semibold"
                      : "text-yellow-600 font-semibold"
                  }`}
                >
                  {payment.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* No Payments Message */}
      {payments.length === 0 && (
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-lg">
            No payment history available. Complete your first payment to see it
            here.
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
