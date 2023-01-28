import React from "react";
import { RoomDetailsData } from "../../data/RoomDetails/RoomDetails";

const RoomDetails = () => {
  return (
    <div className="container mx-auto flex flex-col  gap-4 mb-6 ">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className=" font-bold text-4xl ">Odalarımızı Keşfedin</h1>
        <p className="font-bold text-xl">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8  ">
        {RoomDetailsData.map((roomdetail, index) => (
          <div className="flex flex-col  items-center  bg-white border border-gray-200 rounded-lg shadow  md:max-w-xl hover:bg-gray-100">
            <div key={index}>
              <img
                className="object-cover w-full rounded-t-lg h-96  md:w-full md:rounded-none md:rounded-l-lg "
                src={roomdetail.img}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 ">
                {roomdetail.title}
              </h5>
              <p className=" mb-3 font-normal text-gray-700 ">
                {roomdetail.description}
              </p>
              <div className="flex flex-wrap gap-4  border-t border-gray-400 mt-4 pt-4">
                {roomdetail.facilities.map((icon, index) => (
                  <div className="flex items-center justify-center gap-4 ">
                    <div>{icon.icon}</div>
                    <div>{icon.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomDetails;
