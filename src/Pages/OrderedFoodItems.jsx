import { Helmet } from "react-helmet-async";
import SubHeading from "../Components/Shared/SubHeading";
import { Table } from "keep-react";
import Loader from "../Components/Shared/Loader";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

const OrderedFoodItems = () => {
  const [orderedFoods, setOrderedFoods] = useState([]);
  const [foodsLoaded, setFoodLoaded] = useState(true);
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      axios.post("/ordered-food-items", { email: user.email }).then((data) => {
        setOrderedFoods(data.data);
        setFoodLoaded(false);
      });
    }
  }, [user]);

  const handleDeleteFood = (id) => {
    axios
      .delete(`/delete-food/${id}`)
      .then((data) => {
        if (data.data.deletedCount > 0) {
          const remaining = orderedFoods.filter((food) => food._id !== id);
          setOrderedFoods(remaining);
          toast.success("The food is deleted successfully");
        }
      })
      .catch((err) => {
        toast.error(`An error has happened, ${err.message}`);
      });
  };

  if (loading || foodsLoaded) {
    return <Loader />;
  }
  return (
    <div>
      <Helmet>
        <title>FH Cafe | My Ordered Foods</title>
      </Helmet>
      <SubHeading title="My Ordered Food Items" page="Ordered Items" />
      <div className="section my-20">
        {orderedFoods.length ? (
          <Table className="font-ptserif">
            <Table.Head>
              <Table.HeadCell>Image</Table.HeadCell>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>Quantity</Table.HeadCell>
              <Table.HeadCell>Owner</Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-gray-25 divide-y">
              {orderedFoods.map((food) => (
                <Table.Row key={food._id} className="bg-white">
                  <Table.Cell>
                    <img
                      className="h-28 w-auto mx-auto"
                      src={food.foodImage}
                      alt={`Image of ${food.foodName}`}
                    />
                  </Table.Cell>
                  <Table.Cell className="text-2xl font-semibold">
                    {food.foodName}
                  </Table.Cell>
                  <Table.Cell className="text-2xl">{food.price}</Table.Cell>
                  <Table.Cell className="text-2xl">{food.quantity}</Table.Cell>
                  <Table.Cell className="text-lg">{food.owner}</Table.Cell>
                  <Table.Cell>
                    <button
                      onClick={() => handleDeleteFood(food._id)}
                      className="bg-primaryColor p-3"
                    >
                      <RxCross2 className="text-3xl text-primaryColor1" />
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        ) : (
          <h2 className="text-center text-4xl font-lobster text-primaryColor1 font-semibold">
            You did not order any food
          </h2>
        )}
      </div>
    </div>
  );
};

export default OrderedFoodItems;
