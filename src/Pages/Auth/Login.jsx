import { Helmet } from "react-helmet-async";
import AuthForm from "../../Components/Auth/AuthForm";
import SubHeading from "../../Components/Shared/SubHeading";

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>FH Cafe | Login</title>
      </Helmet>
      <SubHeading title="Login Page" page="Login" />
      <AuthForm objective="Login" />
    </div>
  );
};

export default Login;
