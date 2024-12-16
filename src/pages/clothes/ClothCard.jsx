import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router-dom";


import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
{`/clothes/$(cloth._id)`}
const ClothCard  = ({ cloth }) => {
  const dispatch=useDispatch();
  const handleAddToCart=(product)=>{
    dispatch(addToCart(product))
  }
  return (
    <div className="rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4">
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <Link to={`/clothes/${cloth._id}`}>
            <img
              src={`${getImgUrl(cloth?.image)}`}
              alt="Cloth"
              className="w-full h-64 object-cover mb-4"
              
            />
          </Link>
        </div>

        <div>
          <Link to={`/clothes/$(cloth._id)`}>
            <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
              {cloth?.name}
            </h3>
          </Link>
          <p className="text-gray-600 mb-5">{cloth.description.length>80?`${cloth.
            description.slice(0,80)}...`:cloth.description}</p>
          <p className="font-medium mb-5">
          Tk {cloth?.newPrice}<span className="line-through font-normal ml-2">Tk 
              {cloth?.oldPrice}</span>
            
          </p>
          <button 
          onClick={()=>handleAddToCart(cloth)}
          className="btn-primary px-6 space-x-1 flex items-center gap-1">
            <FiShoppingCart />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClothCard;
