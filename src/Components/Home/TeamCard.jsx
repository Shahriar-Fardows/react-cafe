import PropTypes from "prop-types";

const TeamCard = ({ name, image, profession }) => {
  return (
    <div className="text-center bg-white text-primaryColor2 shadow">
      <img
        className="w-full h-96 object-cover object-top"
        src={image}
        alt={`Image of ${name}`}
      />
      <div className="pt-5 px-10 md:px-20">
        <h3 className="font-lobster text-3xl">{name}</h3>
        <span className="font-ptserif mt-2 mb-7 inline-block">
          {profession}
        </span>
        <div className="h-[3px] w-full bg-primaryColor1"></div>
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  profession: PropTypes.string,
};

export default TeamCard;
