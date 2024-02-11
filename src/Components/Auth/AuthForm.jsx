import PropTypes from "prop-types";
import { useContext, useRef } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import Loader from "../Shared/Loader";
import { toast } from "react-toastify";
import axios from "axios";

const AuthForm = ({ objective }) => {
  const {
    signupUser,
    loginUser,
    googleLogin,
    loading,
    user,
    setUser,
    setLoading,
  } = useContext(AuthContext);
  const location = useLocation();
  const navigateRef = useRef(location.state);

  const handleAuthForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      toast.error("Password have to be at least 6 character long");
      return;
    }

    if (objective === "Login") {
      loginUser(email, password)
        .then((res) => {
          setUser(res.user);
        })
        .catch(() => {
          setLoading(false);
          toast.error("Invalid email or password");
        });
    } else {
      const name = form.name.value;
      const image = form.image.value;
      signupUser(email, password)
        .then((res) => {
          res.user.displayName = name;
          res.user.photoURL = image;
          toast.success("User Registered Successfully");
          updateProfile(res.user, {
            displayName: name,
            photoURL: image,
          }).then(() => {
            axios.post("/set-user", { name, email }).then((data) => {
              if (data.data.insertedId) {
                console.log("From axios");
                setUser(res.user);
              }
            });
          });
        })
        .catch((err) => {
          if (err.message === "Firebase: Error (auth/email-already-in-use).") {
            toast.error("Email already in use");
            setLoading(false);
            return;
          }
          toast.error("An error happened");
          setLoading(false);
        });
    }
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        const { displayName: name, email } = res.user;
        axios.post("/set-user", { name, email }).then(() => {
          toast.success("Successfully logged in.");
          setUser(res.user);
        });
      })
      .catch((err) => toast(`An error has happened, ${err.message}`));
  };

  if (loading) {
    return <Loader />;
  }

  if (user) {
    return <Navigate to={navigateRef.current || "/"} />;
  }

  return (
    <div className="my-20">
      <form
        onSubmit={handleAuthForm}
        className="bg-white max-w-md mx-auto p-10 shadow-md font-ptserif"
      >
        {objective === "Signup" && (
          <>
            <input
              className="w-full p-3 border shadow-sm"
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
            />
            <input
              className="w-full p-3 border shadow-sm mt-2"
              type="text"
              name="image"
              placeholder="Enter your image URL"
              required
            />
          </>
        )}
        <input
          className="w-full p-3 border shadow-sm my-2"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <input
          className="w-full p-3 border shadow-sm"
          type="password"
          name="password"
          placeholder="Enter your password"
          required
        />
        <input
          className="p-2.5 text-lg bg-primaryColor1 w-full mt-7 mb-3 text-white hover:bg-[#117864] transition cursor-pointer"
          type="submit"
          value={objective}
        />

        {objective === "Login" ? (
          <span>
            Don&apos;t have an account?{" "}
            <Link
              className="text-primaryColor1 font-semibold underline"
              to="/signup"
            >
              Signup
            </Link>
          </span>
        ) : (
          <span>
            Already have an account?{" "}
            <Link
              className="text-primaryColor1 font-semibold underline"
              to="/login"
            >
              Login
            </Link>
          </span>
        )}
      </form>
      {objective === "Login" && (
        <div className="text-center mt-5">
          <span className="block">---------------OR---------------</span>
          <button
            onClick={handleGoogleLogin}
            className="p-2.5 px-10 mt-2 text-lg bg-primaryColor1 text-white hover:bg-[#117864] transition cursor-pointer"
          >
            Login With Google
          </button>
        </div>
      )}
    </div>
  );
};

AuthForm.propTypes = {
  objective: PropTypes.string,
};

export default AuthForm;
