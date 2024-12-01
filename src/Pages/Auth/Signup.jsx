import { Helmet } from "react-helmet-async";
import AuthForm from "../../Components/Auth/AuthForm";
import SubHeading from "../../Components/Shared/SubHeading";

const Signup = () => {
  return (
    <div>
      <Helmet>
        <title>React Cafe | Signup</title>
      </Helmet>
      <SubHeading title="Signup Page" page="Signup" />
      <AuthForm objective="Signup" />
    </div>
  );
};

export default Signup;
