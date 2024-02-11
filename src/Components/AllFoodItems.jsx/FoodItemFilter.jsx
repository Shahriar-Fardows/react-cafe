import PropTypes from "prop-types";

const FoodItemFilter = ({ inputValue, setInputValue }) => {
  return (
    <div className="font-ptserif">
      <h1 className="text-lg mb-2">Search by food name</h1>
      <input
        className="w-full p-3 shadow"
        type="text"
        name="search"
        onChange={(e) => setInputValue(e.target.value)}
        defaultValue={inputValue}
      />
    </div>
  );
};

FoodItemFilter.propTypes = {
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func,
};

export default FoodItemFilter;
