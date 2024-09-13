import React from "react";

const ReferralCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md ">
      <h2 className="text-xl font-bold mb-2">Your Referral Stats</h2>
      <p className="text-gray-700">
        Referral Code: <span className="font-semibold">REF1234</span>
      </p>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600">Total Referrals</p>
          <p className="text-lg font-bold">50</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600">Total Sales</p>
          <p className="text-lg font-bold">$500</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600">Total Earnings</p>
          <p className="text-lg font-bold">$100</p>
        </div>
      </div>
    </div>
  );
};

export default ReferralCard;
