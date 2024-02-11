import newsletterBg from "../../assets/newsletterBg.png";

const Newsletter = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(
        rgba(0,0,0,0.5),
        rgba(0,0,0,0.5)
      ),url(${newsletterBg})`,
      }}
      className="bg-no-repeat bg-cover bg-center py-14 md:py-28 my-20"
    >
      <div className="section flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0">
        <div className="text-white">
          <h2 className="font-lobster text-4xl md:text-5xl mb-4">
            Get special offers every week
          </h2>
          <h3 className="font-ptserif">
            For Exclusive Deals, Coupons, News and More!
          </h3>
        </div>
        <div>
          <input
            className="p-2.5 min-w-0 w-full md:w-auto md:min-w-80 rounded md:rounded-e-none md:rounded-s mb-4 md:mb-0"
            type="text"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="bg-primaryColor1 px-6 py-2.5 text-white rounded md:rounded-s-none md:rounded-e w-full md:w-auto"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
