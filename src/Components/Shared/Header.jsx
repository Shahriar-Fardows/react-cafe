import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogoutBtn = () => {
    logoutUser().then(() => {
      console.log("User logged out");
    });
  };

  return (
    <div className="section my-5 flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center">
      <Link
        to="/"
        className="text-5xl font-lobster font-medium text-primaryColor2"
      >
        <span className="text-primaryColor1">FH</span> Cafe
      </Link>
      <div className="flex gap-4 md:gap-5 font-ptserif text-sm md:text-base text-black items-center">
        <NavLink
          className="relative before:content-[''] before:bottom-0 before:w-0 before:h-[1.5px] before:bg-primaryColor1 before:absolute hover:before:w-full before:duration-500 before:transition-all"
          to="/all-food-items"
        >
          All Food Items
        </NavLink>
        <NavLink
          className="relative before:content-[''] before:bottom-0 before:w-0 before:h-[1.5px] before:bg-primaryColor1 before:absolute hover:before:w-full before:duration-500 before:transition-all"
          to="/blog"
        >
          Blog
        </NavLink>
        {!user ? (
          <NavLink to="/login">Login</NavLink>
        ) : (
          <>
            <div className="relative group">
              {/* <span className="pb-4">User profile</span> */}
              <img
                className="h-10 rounded-full"
                src={user.photoURL}
                alt="Photo of logged in user"
              />
              <ul className="absolute top-10 bg-white min-w-52 rounded shadow-lg overflow-hidden hidden group-hover:block z-10">
                <Link
                  to="/added-food-items"
                  className="hover:bg-primaryColor2 hover:text-white p-3 transition-all duration-300 cursor-pointer block"
                >
                  My added food items
                </Link>
                <Link
                  to="/add-food-item"
                  className="hover:bg-primaryColor2 hover:text-white p-3 transition-all duration-300 cursor-pointer block"
                >
                  Add a food item
                </Link>
                <Link
                  to="/ordered-food-items"
                  className="hover:bg-primaryColor2 hover:text-white p-3 transition-all duration-300 cursor-pointer block"
                >
                  My ordered food items
                </Link>
              </ul>
            </div>
            <button
              onClick={handleLogoutBtn}
              className="bg-primaryColor1 text-white px-5 py-2 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
