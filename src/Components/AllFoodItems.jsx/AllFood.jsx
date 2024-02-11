import FoodCard from "../Shared/FoodCard";
import PropTypes from "prop-types";

const AllFood = ({ foodItems }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {foodItems.map((food) => (
        <FoodCard key={food._id} food={food} />
      ))}
    </div>
  );
};

AllFood.propTypes = {
  foodItems: PropTypes.array,
};

export default AllFood;
