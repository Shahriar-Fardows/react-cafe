import { Link } from "react-router-dom";
import subHeadBg from "../../assets/newsletterBg.png";
import PropTypes from "prop-types";

const SubHeading = ({ title, page }) => {
  return (
    <div
      className="text-white text-center py-20 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(
        rgba(0,0,0,0.5),
        rgba(0,0,0,0.5)
      ),url(${subHeadBg})`,
      }}
    >
      <h1 className="text-6xl font-lobster mb-5">{title}</h1>
      <h2 className="font-ptserif text-lg">
        <Link to="/" className="underline decoration-primaryColor1">
          Home
        </Link>
        /{page}
      </h2>
    </div>
  );
};

SubHeading.propTypes = {
  title: PropTypes.string,
  page: PropTypes.string,
};

export default SubHeading;
