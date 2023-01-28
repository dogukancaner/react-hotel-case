import React from "react";

import AdultsDropDown from "../AdultsDropdown/AdultsDropdown";
import ChildrenDropDown from "../ChildrenDropdown/ChildrenDropdown";
import CheckOut from "../CheckOut/CheckOut";
import CheckIn from "../CheckIn/CheckIn";

const BookForm = () => {
  return (
    <div className="container mx-auto p-4 mt-6 mb-6">
      <div className="flex flex-col items-center justify-center lg:flex-row  gap-6 border border-gray-600 rounded-lg  p-6">
        <div className="flex-1  ">
          <CheckIn />
        </div>
        <div className="flex-1 ">
          <CheckOut />
        </div>
        <div className="flex-1  ">
          <AdultsDropDown />
        </div>
        <div className="flex-1 ">
          <ChildrenDropDown />
        </div>
        <div className="text-center ">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Rezervasyon Ara
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
