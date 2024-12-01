import { Link } from "react-router-dom";
import footerBg from "../../assets/FooterBg.jpg";
import {
  FaMapPin,
  FaEnvelope,
  FaPhone,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer
        className="text-white pt-14 pb-20 mt-28"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <div className="section grid grid-cols-1 text-center md:text-left md:grid-cols-3 font-ptserif">
          <div>
            <Link to="/" className="text-5xl font-lobster font-medium">
              <span className="text-primaryColor1">FH</span> Cafe
            </Link>
            <h3 className="mt-2 mb-7 font-ptserif">Best In Town</h3>
            <div className="text-lg space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <FaMapPin />
                <span>Melartek, Kaundia, Dhaka</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <FaEnvelope />
                <span>himibaba10@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <FaPhone />
                <span>0199722666</span>
              </div>
            </div>
          </div>
          <div className="my-5 md:my-0">
            <h2 className="text-2xl mb-2 md:mb-5">Important Links</h2>
            <div className="space-y-2 flex flex-col">
              <Link to="/all-food-items">All Food Items</Link>
              <Link to="/blog">Blog</Link>
            </div>
          </div>
          <div>
            <h2 className="text-2xl mb-2 md:mb-5">Social Link</h2>
            <div className="flex gap-4 text-2xl justify-center md:justify-start">
              <FaFacebookF />
              <FaYoutube />
              <FaInstagram />
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#fef5ee] py-3 text-center font-ptserif text-primaryColor2">
        <p>Copyright©2023, React Cafe, Made By Ferdous Ahmed Himel</p>
      </div>
    </>
  );
};

export default Footer;
