import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";

const useFood = () => {
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const { isPending, error, data } = useQuery({
    queryKey: ["foodData", inputValue, currentPage],
    queryFn: () =>
      axios(`/food?searchInput=${inputValue}&currentPage=${currentPage}`),
  });

  const { TotalFoodPending, data: TotalFood } = useQuery({
    queryKey: ["totalFood"],
    queryFn: () => axios(`/total-food`),
  });

  return {
    TotalFoodPending,
    TotalFood,
    currentPage,
    setCurrentPage,
    inputValue,
    setInputValue,
    isPending,
    error,
    data,
  };
};

useFood.propTypes = {
  searchInput: PropTypes.string,
};

export default useFood;
