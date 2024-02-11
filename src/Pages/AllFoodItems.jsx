import AllFood from "../Components/AllFoodItems.jsx/AllFood";
import FoodItemFilter from "../Components/AllFoodItems.jsx/FoodItemFilter";
import SubHeading from "../Components/Shared/SubHeading";
import useFood from "../hooks/useFood";
import Loader from "../Components/Shared/Loader";
import { Helmet } from "react-helmet-async";
import { Pagination } from "keep-react";

const AllFoodItems = () => {
  const {
    TotalFood,
    currentPage,
    setCurrentPage,
    inputValue,
    setInputValue,
    isPending,
    error,
    data,
  } = useFood();
  const numberOfPages = Math.ceil(TotalFood?.data?.total / 9);

  return (
    <div>
      <Helmet>
        <title>FH Cafe | Shop</title>
      </Helmet>
      <SubHeading title="Shop Page" page="Shop" />
      <div className="flex section my-20 gap-5">
        <div className="w-3/4">
          {isPending ? (
            <Loader />
          ) : error ? (
            <div>There has been an error</div>
          ) : data?.data?.length ? (
            <>
              <AllFood foodItems={data.data} />
              {TotalFood && (
                <Pagination
                  className="w-full justify-center mt-7"
                  currentPage={currentPage + 1}
                  onPageChange={(e) => setCurrentPage(e - 1)}
                  totalPages={numberOfPages}
                />
              )}
            </>
          ) : (
            <h2 className="text-center text-4xl font-lobster text-primaryColor1 font-semibold">
              The searched food is not available
            </h2>
          )}
        </div>
        <div className="w-1/4">
          <FoodItemFilter
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </div>
      </div>
    </div>
  );
};

export default AllFoodItems;
