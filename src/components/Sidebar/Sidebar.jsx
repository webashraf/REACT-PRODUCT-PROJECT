import React from "react";

const Sidebar = (props) => {
  //   console.log(props.product);
  const { id, image, description, rating, price, title } = props.product;

  return (
    <div>
      <div className="">
        <h1 className="text-lg text-gray-light p-5">{title}</h1>
      </div>
    </div>
  );
};

export default Sidebar;
