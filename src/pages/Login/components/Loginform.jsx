import Input from "../../../components/Input.jsx";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { triggerNotification } from "../../../util/successNotification.js";
import { loginEndPoint } from "../../../api/baseUrl.js";

const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const mutationLogin = useMutation({
    mutationFn: (data) => {
      setIsLoading(true);
      return axios.post(loginEndPoint, data);
    },

    onError: (error, variables, context) => {
      const { message } = error.response.data;
      triggerNotification(message, "error");
    },
    onSuccess: async (data, variables, context) => {
      const { access_key, username, email, id } = data.data;
      const { data: UserData } = await axios.get(
        `http://localhost:4000/users/findById/${id}`
      );
      const { imageProfile } = UserData;
      localStorage.setItem("image", imageProfile);
      localStorage.setItem("access_key", access_key);
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      triggerNotification("Login Success", "success");
      navigate("/");
    },
    onSettled: (data, error, variables, context) => {
      setIsLoading(false);
    },
  });

  useEffect(() => {
    if (isLoading) {
      triggerNotification("Sending your data", "info");
    }
  }, [isLoading]);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    mutationLogin.mutate(loginData);
  };

  return (
    <form
      className="space-y-6"
      action="hackbid-admin/src/pages#"
      method="POST"
      onSubmit={handleLoginSubmit}
    >
      <Input
        state="email"
        label="Email Address"
        handleChange={handleOnChange}
        type="email"
      />
      <Input
        state="password"
        label="Password"
        handleChange={handleOnChange}
        type="password"
      />
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-hackbid-primary py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-hackbid-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
