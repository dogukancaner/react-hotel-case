import React from "react";
import DateForm from "../../components/DateForm/DateForm";
import Rooms from "../../components/Rooms/Rooms";
import RoomDetails from "../../components/RoomDetails/RoomDetails";
import Slider from "../../components/Slider/Slider";
const Home = () => {
  return (
    <div>
      <Slider />
      <DateForm />
      <Rooms />
      <RoomDetails />
    </div>
  );
};

export default Home;
