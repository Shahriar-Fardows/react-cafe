import { Helmet } from "react-helmet-async";
import SubHeading from "../Components/Shared/SubHeading";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Loader from "../Components/Shared/Loader";
import axios from "axios";
import { Table } from "keep-react";
import { Link } from "react-router-dom";

const AddedFoodItems = () => {
  const [addedFoods, setAddedFoods] = useState([]);
  const [foodsLoaded, setFoodLoaded] = useState(true);
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    axios.post("/added-food-items", { email: user?.email }).then((data) => {
      setAddedFoods(data.data);
      setFoodLoaded(false);
    });
  }, [user]);

  if (loading || foodsLoaded) {
    return <Loader />;
  }

  return (
    <div>
      <Helmet>
        <title>FH Cafe | My Added Foods</title>
      </Helmet>
      <SubHeading title="My Added Food Items" page="Added Items" />
      <div className="section my-20">
        {addedFoods.length ? (
          <Table className="font-ptserif">
            <Table.Head>
              <Table.HeadCell>Image</Table.HeadCell>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>Quantity</Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-gray-25 divide-y">
              {addedFoods.map((food) => (
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
                  <Table.Cell className="text-2xl">
                    {food.availableQuantity}
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      to={`/update-food/${food._id}`}
                      className="bg-primaryColor1 text-white py-3 px-5"
                    >
                      Update
                    </Link>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        ) : (
          <h2 className="text-center text-4xl font-lobster text-primaryColor1 font-semibold">
            You did not add any food
          </h2>
        )}
      </div>
    </div>
  );
};

export default AddedFoodItems;
