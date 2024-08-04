import React from "react";

const ContentHistoryTransaction = () => {
  return (
    <div>
      <div className="overflow-x-auto py-4 md:py-10">
        <table className="w-full text-xl font-inter text-black">
          <thead className=" ">
            <tr className="text-[10px] md:text-[18px] lg:text-2xl font-bold bg-gray bg-opacity-10">
              <th
                scope="col"
                className="px-3 md:px-6 py-3 text-left rounded-s-lg"
              >
                Customer
              </th>
              <th className="px-3 md:px-6 py-3 ">Method</th>
              <th className="px-3 md:px-6 py-3 ">Time</th>
              <th className="px-3 md:px-6 py-3 rounded-e-lg">Amount</th>
            </tr>
          </thead>
          <tbody className="font-inter font-medium text-black text-[10px] md:text-[14px] lg:text-[20px] ">
            {[...Array(9)].map((_, index) => (
              <tr key={index} className="border-b">
                <td className="px-3 md:px-6 py-6 flex items-center">
                  Difa Rindang Utari
                </td>
                <td className="px-3 md:px-6 py-6">Transfer Bank</td>
                <td className="px-3 md:px-6 py-6">06 July 2024</td>
                <td className="px-3 md:px-6 py-6">Rp 100.000</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContentHistoryTransaction;
