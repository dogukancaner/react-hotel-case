import Room1 from "../../assets/Room/room-1.png";
import Room2 from "../../assets/Room/room-2.png";
import Room3 from "../../assets/Room/room-3.png";

import { BsPeople } from "react-icons/bs";

export const RoomData = [
  {
    title: "Deluxe Room",
    img: Room1,
    icons: <BsPeople />,
    size: "2 Kişi",
  },
  {
    title: "Suit Room",
    img: Room2,
    icons: <BsPeople />,
    size: "3 Kişi",
  },
  {
    title: "Family Room",
    img: Room3,
    icons: <BsPeople />,
    size: "4 Kişi",
  },
];
