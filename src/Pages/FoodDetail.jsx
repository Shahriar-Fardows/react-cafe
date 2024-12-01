import { Link, useLoaderData } from "react-router-dom";
import SubHeading from "../Components/Shared/SubHeading";
import { AwesomeButton } from "react-awesome-button";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import axios from "axios";
import FoodCard from "../Components/Shared/FoodCard";

const FoodDetail = () => {
  const [relevantFood, setRelevantFood] = useState([]);

  const {
    _id,
    foodName,
    availableQuantity,
    description,
    foodCategory,
    foodImage,
    foodOrigin,
    price,
    addedBy,
  } = useLoaderData();

  useEffect(() => {
    axios
      .post(`/food/category/${foodCategory}`, { currentFood: _id })
      .then((res) => {
        setRelevantFood(res.data);
      });
  }, [foodCategory, _id]);

  return (
    <div>
      <Helmet>
        <title>React Cafe | Food</title>
      </Helmet>
      <SubHeading title="Food Detail Page" page="Food Detail" />
      <div className="section flex justify-between my-20 gap-10">
        <div className="flex-1 bg-white shadow-lg mr-10 py-10 self-start">
          <img className="w-3/4 mx-auto" src={foodImage} alt="" />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-semibold text-primaryColor1">
            {foodName}
          </h1>
          <p className="my-5 text-2xl font-ptserif">
            Price:{" "}
            <span className="text-primaryColor1 font-semibold text-3xl">
              {price}
            </span>
          </p>

          <p className="text-primaryColor2 text-lg">
            Available:{" "}
            <span className="text-primaryColor1 font-semibold">
              {availableQuantity}
            </span>
          </p>
          <p className="text-primaryColor2 text-lg">
            Category:{" "}
            <span className="text-primaryColor1 font-semibold">
              {foodCategory}
            </span>
          </p>
          <p className="text-primaryColor2 text-lg">
            Made by:{" "}
            <span className="text-primaryColor1 font-semibold">{addedBy}</span>
          </p>
          <p className="text-primaryColor2 text-lg">
            Origin:{" "}
            <span className="text-primaryColor1 font-semibold">
              {foodOrigin}
            </span>
          </p>
          <div className="my-8 font-ptserif leading-7">
            <h2 className="text-lg border-b border-primaryColor2 mb-4 font-medium">
              Description
            </h2>
            <p>{description}</p>
          </div>
          <Link to={`/purchase/${_id}`}>
            <AwesomeButton className="primary-btn !text-lg" type="primary">
              Order Now
            </AwesomeButton>
          </Link>
        </div>
      </div>
      {relevantFood?.length && (
        <div className="section">
          <h1 className="text-5xl font-lobster font-semibold text-primaryColor1 text-center">
            Relevant Food
          </h1>
          <div className="my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {relevantFood?.map((food, idx) => (
              <FoodCard key={idx} food={food} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodDetail;
