import Header from "../Login/components/Header.jsx";
import LoginCard from "../Login/components/LoginCard.jsx";

const Register = () => {
  return (
    <>
      <div className="h-screen">
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 items-center">
          <div className="py-10 w-[80%] sm:w-[70%] rounded-xl">
            <Header title={"Register your account here"} />
            <LoginCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
