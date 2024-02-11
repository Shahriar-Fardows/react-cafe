import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTopFood = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["topFoodData"],
    queryFn: async () => {
      const data = await axios("/top-food");
      return data;
    },
  });

  return { isPending, error, data };
};

export default useTopFood;
