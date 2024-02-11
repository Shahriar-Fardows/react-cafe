import PropTypes from "prop-types";
import FoodCardBg from "../../assets/foodCardBg.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
  const {
    foodName,
    foodImage,
    description,
    foodCategory,
    availableQuantity,
    price,
    _id,
  } = food;
  return (
    <div className="bg-white p-5 shadow group flex flex-col">
      <div
        style={{
          backgroundImage: `linear-gradient(
            rgba(255, 255, 255, 0.8), 
            rgba(255, 255, 255, 0.8)
          ),url(${FoodCardBg})`,
        }}
        className="bg-contain bg-[-40px_-40px] bg-no-repeat"
      >
        <img
          className="h-72 object-contain group-hover:scale-110 transition mx-auto"
          src={foodImage}
          alt=""
        />
      </div>
      <span className="text-right font-ptserif text-primaryColor1 font-semibold">
        {foodCategory}
      </span>
      <h3 className="text-2xl font-ptserif mb-3 text-primaryColor2 font-bold">
        {foodName}
      </h3>
      <p className="text-sm line-clamp-2 leading-6">{description}</p>
      <span className="pt-3 mt-auto mb-3 font-ptserif">
        Available quantity:{" "}
        <span className="text-xl text-primaryColor1 font-semibold">
          {availableQuantity}
        </span>
      </span>
      <div className="flex justify-between items-center">
        <span className="text-primaryColor1 text-lg">
          Price:
          <br />
          <span className="text-xl font-bold">{price}</span>$
        </span>
        <Link
          to={`/food/${_id}`}
          className="bg-primaryColor2 text-white group-hover:bg-primaryColor1 transition shadow-md flex items-center gap-2 px-4 py-3 rounded"
        >
          <MdOutlineShoppingCart className="text-xl" />
          <span className="text-sm">See Details</span>
        </Link>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  food: PropTypes.object,
};

export default FoodCard;
