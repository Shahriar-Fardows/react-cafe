import { Helmet } from "react-helmet-async";
import Banner from "../Components/Home/Banner";
import TopFood from "../Components/Home/TopFood";
import Newsletter from "../Components/Home/Newsletter";
import Team from "../Components/Home/Team";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>FH Cafe | Home</title>
      </Helmet>
      <Banner />
      <TopFood />
      <Newsletter />
      <Team />
    </>
  );
};

export default Home;
