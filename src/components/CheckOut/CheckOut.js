import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsFillCalendarDateFill } from "react-icons/bs";

const CheckOut = () => {
  const [endDate, setEndDate] = useState(false);
  return (
    <div className="relative flex items-center justify-end h-full ">
      <div className="absolute z-10 pr-8">
        <div>
          <BsFillCalendarDateFill className="text-black text-lg " />
        </div>
      </div>
      <DatePicker
        className=" w-full h-full"
        selected={endDate}
        placeholderText="Check Out"
        onChange={(date) => setEndDate(date)}
      ></DatePicker>
    </div>
  );
};

export default CheckOut;
