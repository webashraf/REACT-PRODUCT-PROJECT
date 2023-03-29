import React from "react";

const Product = (props) => {
  const handleBtn = props.handleBtn;
  const { id, image, description, rating, price, title } = props.products;
  return (
    <div>
      <div className="card w-auto bg-base-100 shadow-xl">
        <figure>
          <img className="h-[100px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body h-[450px] py-5">
          <h2 className="card-title">{title}</h2>
          <p>{description.slice(0, 100)}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleBtn(props.products)}
              className="btn btn-primary"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
