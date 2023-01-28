import { useState } from "react";

const childrens = [
  {
    id: 1,
    name: "1 Çocuk",
  },
  {
    id: 2,
    name: "2 Çocuk",
  },
  {
    id: 3,
    name: "3 Çocuk",
  },
  {
    id: 4,
    name: "4 Çocuk",
  },
];
const ChildrenDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [child, setChild] = useState(childrens[0].name);
  const selectChild = (childName) => {
    setChild(childName);
    setIsOpen(false);
  };
  return (
    <div className="relative">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-black   focus:outline-none font-medium rounded-lg text-lg px-4 py-2.5 text-center inline-flex items-center "
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {child}
        <svg
          className="w-4 h-4 ml-6"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        id="dropdown"
        className={`z-10 hidden bg-gray-500 divide-y absolute divide-gray-800 rounded-lg shadow w-44 ${
          isOpen ? "!block" : ""
        }`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {childrens.map((item, index) => (
            <li key={index}>
              <div
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                onClick={() => selectChild(item.name)}
              >
                {item.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChildrenDropdown;
