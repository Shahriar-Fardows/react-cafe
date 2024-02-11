import { AwesomeButton } from "react-awesome-button";
import sliderImg1 from "../../assets/slider/sliderImg1.png";
import sliderImg2 from "../../assets/slider/sliderImg2.png";
import sliderImg3 from "../../assets/slider/sliderImg3.png";
import { Carousel } from "keep-react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="min-h-0 md:min-h-[500px] section py-7 mb-10 md:mb-0 md:py-20 flex flex-col md:flex-row justify-between md:items-center text-center md:text-left gap-10 md:gap-4">
      <div className="md:flex-1">
        <h2 className="text-2xl md:text-3xl font-bold font-ptserif text-primaryColor1">
          Best In Town
        </h2>
        <h1 className="text-4xl md:text-6xl font-lobster font-bold leading-tight mt-2 mb-10">
          Burger, Pizza, Shwarma <br />
          What Else Do You Want?
        </h1>
        <Link to="/all-food-items">
          <AwesomeButton className="primary-btn !text-lg" type="primary">
            All Food Item
          </AwesomeButton>
        </Link>
      </div>
      <Carousel className="md:flex-1 !h-[300px]" slide={true}>
        <img className="object-contain" src={sliderImg1} />
        <img className="object-contain" src={sliderImg2} />
        <img className="object-contain" src={sliderImg3} />
      </Carousel>
    </div>
  );
};

export default Banner;
