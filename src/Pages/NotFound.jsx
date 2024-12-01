import { AwesomeButton } from "react-awesome-button";
import bodyImg from "../assets/body.jpg";
import notFoundImg from "../assets/notFoundImg.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <div>
      <Helmet>
        <title>React Cafe | Page Unavailable</title>
      </Helmet>
      <div
        className="w-full h-screen fixed top-0 left-0"
        style={{ backgroundImage: `url(${bodyImg})`, backgroundSize: "cover" }}
      ></div>
      <div className="relative min-h-screen flex flex-col justify-center items-center gap-10">
        <img className="mx-auto" src={notFoundImg} alt="Not found image" />
        <Link to="/">
          <AwesomeButton className="primary-btn !text-lg" type="primary">
            Go to Homepage
          </AwesomeButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
