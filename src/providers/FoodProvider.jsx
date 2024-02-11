import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PropTypes from "prop-types";

const queryClient = new QueryClient();

const FoodProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

FoodProvider.propTypes = {
  children: PropTypes.element,
};

export default FoodProvider;
