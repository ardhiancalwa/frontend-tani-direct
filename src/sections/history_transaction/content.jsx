import React from "react";

const ContentHistoryTransaction = ({ transaksi }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Menambahkan 1 karena getMonth() mengembalikan bulan dari 0-11
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  return (
    <div className="mt-14 md:mt-24 lg:mt-20 ">
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
            {transaksi.map((transaksi) => (
              <tr className="border-b" key={transaksi.no_transaksi}>
                <td className="px-3 md:px-6 py-6 flex items-center">
                  {transaksi.nama_pembeli}
                </td>
                <td className="px-3 md:px-6 py-6">
                  {transaksi.metode_pembayaran}
                </td>
                <td className="px-3 md:px-6 py-6">
                  {formatDate(transaksi.tanggal_transaksi)}
                </td>
                <td className="px-3 md:px-6 py-6">Rp {(transaksi.total_harga).toLocaleString('id-ID')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContentHistoryTransaction;
