import Room1 from "../../assets/Room/room-1.png";
import Room2 from "../../assets/Room/room-2.png";
import Room3 from "../../assets/Room/room-3.png";

import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaSwimmingPool,
  FaHotdog,
  FaStopwatch,
  FaCocktail,
  FaRegSnowflake,
} from "react-icons/fa";

export const RoomDetailsData = [
  {
    title: "Deluxe Room",
    img: Room1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",

    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Climate", icon: <FaRegSnowflake /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
  },
  {
    title: "Suit Room",
    img: Room2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",

    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Climate", icon: <FaRegSnowflake /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
  },
  {
    title: "Family Room",
    img: Room3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",

    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Climate", icon: <FaRegSnowflake /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
  },
];
