import axios from "axios";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../providers/AuthProvider";

const UpdateFood = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { _id, foodName, foodImage, availableQuantity, addedBy } =
    useLoaderData();

  const handleUpdateForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const availableQuantity = form.availableQuantity.value;

    axios
      .patch("/update-food", {
        _id,
        foodName,
        foodImage,
        availableQuantity,
      })
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          toast.success("Food info updated successfully");
          navigate("/added-food-items");
        }
      });
  };

  if (user.email !== addedBy) {
    return (
      <h2 className="mt-20 text-center text-4xl font-lobster text-primaryColor1 font-semibold">
        This is not your added food
      </h2>
    );
  }

  return (
    <div className="my-20 section font-ptserif">
      <Helmet>
        <title>React Cafe | Update Food</title>
      </Helmet>
      <h1 className="text-5xl font-semibold font-lobster text-center">
        Update Food Info
      </h1>
      <form
        onSubmit={handleUpdateForm}
        className="bg-white mx-auto mt-10 max-w-xl p-10"
      >
        <input
          className="w-full p-3 mb-3 border shadow"
          type="text"
          name="foodName"
          defaultValue={foodName}
        />
        <input
          className="w-full p-3 mb-3 border shadow"
          type="text"
          name="foodImage"
          defaultValue={foodImage}
        />
        <input
          className="w-full p-3 mb-3 border shadow"
          type="text"
          name="availableQuantity"
          defaultValue={availableQuantity}
        />
        <input
          className="w-full bg-primaryColor1 py-3 text-white font-bold cursor-pointer"
          type="submit"
          value="Update"
        />
      </form>
    </div>
  );
};

export default UpdateFood;
