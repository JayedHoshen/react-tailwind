import React from "react";

const Link = ({ route }) => {
  return (
    <li className="lg:mr-6 px-5 py-1 hover:bg-gray-600">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
