import Header from "./components/Header.jsx";
import LoginCard from "./components/LoginCard.jsx";

export default function Login() {
  return (
    <>
      <div className="h-screen">
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 items-center">
          <div className="py-10 w-[80%] sm:w-[70%] rounded-xl">
            <Header title={"Sign in to your account"} />
            <LoginCard />
          </div>
        </div>
      </div>
    </>
  );
}
