import Loginform from "./Loginform.jsx";
import FooterLogin from "./FooterLogin.jsx";

const LoginCard = () => {
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10">
        <Loginform />
        <FooterLogin />
      </div>
    </div>
  );
};
export default LoginCard;
