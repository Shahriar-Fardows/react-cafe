import FoodCard from "../Shared/FoodCard";
import useTopFood from "../../hooks/useTopFood";
import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import Loader from "../Shared/Loader";

const TopFood = () => {
  const { isPending, error, data } = useTopFood();
  if (isPending) {
    return <Loader />;
  }
  if (error) {
    return <div>There has been an error!</div>;
  }
  return (
    <div className="section">
      <div className="text-center">
        <h3 className="font-ptserif text-xl text-primaryColor1 font-bold">
          Top Food
        </h3>
        <h2 className="font-lobster text-4xl md:text-5xl mt-2">
          Our Best-selling Food
        </h2>
      </div>
      <div className="my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {data?.data?.map((food, idx) => (
          <FoodCard key={idx} food={food} />
        ))}
      </div>
      <Link className="block text-center" to="/all-food-items">
        <AwesomeButton className="primary-btn !text-lg" type="primary">
          All Food Item
        </AwesomeButton>
      </Link>
    </div>
  );
};

export default TopFood;
