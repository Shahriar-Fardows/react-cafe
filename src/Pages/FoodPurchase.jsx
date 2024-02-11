import { useLoaderData, useNavigate } from "react-router-dom";
import SubHeading from "../Components/Shared/SubHeading";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { AwesomeButton } from "react-awesome-button";
import moment from "moment";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const FoodPurchase = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { displayName, email } = user;
  const { _id, foodName, price, availableQuantity, addedBy, foodImage } =
    useLoaderData();

  const mutation = useMutation({
    mutationFn: (purchaseData) => axios.post("/purchase", purchaseData),
    onError: (error) => {
      toast.error(`An error has happened", ${error}`);
    },
    onSuccess: (data) => {
      if (data.data.success) {
        toast.success("Your food has been successfully added!");
        navigate("/");
      } else {
        toast.error("Your can't purchase your own added food.");
      }
    },
  });

  const handlePurchaseForm = (e) => {
    e.preventDefault();
    const form = e.target;

    const quantity = parseInt(form.quantity.value);
    const purchaseDate = form.purchaseDate.value;

    const purchaseInfo = {
      _id,
      foodName,
      foodImage,
      price,
      quantity,
      purchaseDate,
      name: displayName,
      email,
      owner: addedBy,
    };

    if (availableQuantity === 0) {
      toast.error("This food is not available");
      return;
    }

    if (quantity > availableQuantity) {
      console.log(quantity, availableQuantity);
      toast.error(`You can't order more than ${availableQuantity} piece`);
      return;
    }

    mutation.mutate(purchaseInfo);
  };

  return (
    <>
      <Helmet>
        <title>FH Cafe | Checkout</title>
      </Helmet>
      <SubHeading title="Food Purchase Page" page="purchase" />
      <div className="section my-20">
        <form className="grid grid-cols-2 gap-5" onSubmit={handlePurchaseForm}>
          <input
            className="p-3 rounded shadow"
            type="text"
            name="foodName"
            defaultValue={foodName}
          />
          <input
            className="p-3 rounded shadow"
            type="text"
            name="price"
            defaultValue={price}
          />
          <input
            className="p-3 rounded shadow"
            type="text"
            name="quantity"
            placeholder="Enter quantity"
            required
          />
          <input
            className="p-3 rounded shadow"
            type="text"
            name="purchaseDate"
            defaultValue={moment().format("Do MMM, YYYY")}
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
          <div className="col-span-2 text-center mt-7">
            <AwesomeButton className="primary-btn !text-lg" type="primary">
              Confirm Purchase
            </AwesomeButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default FoodPurchase;
