import { Helmet } from "react-helmet-async";
import SubHeading from "../Components/Shared/SubHeading";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { AwesomeButton } from "react-awesome-button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddFoodItem = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { displayName, email } = user;

  const mutation = useMutation({
    mutationFn: (newFood) => axios.post("/add-food", newFood),
    onSuccess: (data) => {
      if (data.data.insertedId) {
        toast.success("Food added successfully");
        navigate("/");
      }
    },
    onError: (err) => {
      toast.error(`An error has happened, ${err.message}`);
    },
  });

  const handleFoodAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const foodCategory = form.foodCategory.value;
    const availableQuantity = parseInt(form.availableQuantity.value);
    const price = parseFloat(form.price.value);
    const foodOrigin = form.foodOrigin.value;
    const description = form.description.value;
    const foodInfo = {
      foodName,
      foodImage,
      foodCategory,
      availableQuantity,
      price,
      foodOrigin,
      description,
      addedBy: email,
      count: 0,
    };

    mutation.mutate(foodInfo);
  };

  return (
    <>
      <Helmet>
        <title>React Cafe | Add Food</title>
      </Helmet>
      <SubHeading title="Add Food Page" page="purchase" />
      <div className="section my-20">
        <form className="grid grid-cols-2 gap-5" onSubmit={handleFoodAdd}>
          <input
            className="p-3 rounded shadow"
            type="text"
            name="foodName"
            placeholder="Enter Food Name"
            required
          />
          <input
            className="p-3 rounded shadow"
            type="text"
            name="foodImage"
            placeholder="Enter Food Image"
            required
          />
          <input
            className="p-3 rounded shadow"
            type="text"
            name="foodCategory"
            placeholder="Enter Food Category"
            required
          />
          <input
            className="p-3 rounded shadow"
            type="text"
            name="availableQuantity"
            placeholder="Enter Quantity"
            required
          />
          <input
            className="p-3 rounded shadow"
            type="text"
            name="price"
            placeholder="Enter Price"
            required
          />
          <input
            className="p-3 rounded shadow"
            type="text"
            defaultValue={displayName}
            readOnly
          />
          <input
            className="p-3 rounded shadow"
            type="email"
            defaultValue={email}
            readOnly
          />
          <input
            className="p-3 rounded shadow"
            type="text"
            name="foodOrigin"
            placeholder="Enter Origin of Food"
            required
          />
          <textarea
            className="p-3 rounded shadow col-span-2 resize-none"
            name="description"
            rows="5"
            placeholder="Enter Description"
            required
          ></textarea>
          <div className="col-span-2 text-center mt-7">
            <AwesomeButton className="primary-btn !text-lg" type="primary">
              Add Food
            </AwesomeButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddFoodItem;
