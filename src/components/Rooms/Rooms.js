import React from "react";
import { RoomData } from "../../data/Room/Room";

const Rooms = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-2 items-center justify-center pb-4">
        <h1 className=" font-bold text-4xl ">Odalarımız</h1>
        <p className="font-bold text-xl">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className=" grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0  ">
        {RoomData.map((room, index) => (
          <div key={index}>
            <div>
              <img src={room.img} alt="" />
            </div>
            <div className="bg-white shadow-xl max-w-[300px] mx-auto h-[60px] -translate-y-1/2 p-2 flex items-center justify-between font-medium   ">
              <div className="text-[18px]">
                <p>{room.title}</p>
              </div>
              <div className="flex justify-center items-center gap-2 text-[16px]">
                <p>{room.icons}</p>
                <p>{room.size}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
