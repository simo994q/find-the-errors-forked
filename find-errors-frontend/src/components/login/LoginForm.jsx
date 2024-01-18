import { useEffect, useState } from "react";
import { InputField } from "../input/InputField";
import style from "./LoginForm.module.scss";
export const LoginForm = ({ setUserData }) => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const submitAction = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);

    let url = isSignIn
      ? "http://localhost:8081/sign-in"
      : "http://localhost:8081/sign-up";
    let body = new URLSearchParams();
    !isSignIn && body.append("name", e.target.name.value);
    body.append("email", e.target.email.value);
    body.append("password", e.target.password.value);

    fetch(url, { method: "POST", body: body })
      .then((response) => response.json())
      .then((data) => {console.log(data), !data.accessToken ? setFeedbackMsg(data) : setUserData(data)}
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setFeedbackMsg("");
  }, [isSignIn]);

  return (
    <div className={style.loginFormStyle}>
      <span onClick={() => setIsSignIn(!isSignIn)}>
        {isSignIn ? "Sign up" : "Sign in"}
      </span>
      <h1>Welcome</h1>
      <p>{isSignIn ? "Please log in to continue" : "Sign up here"}</p>
      <b>{feedbackMsg}</b>
      <form onSubmit={(e) => submitAction(e)}>
        {!isSignIn && (
          <InputField
            type="text"
            name="name"
            placeholder="Enter your name"
            label={true}
          />
        )}
        <InputField
          type="email"
          name="email"
          placeholder="enter email"
          label={true}
        />
        <InputField
          type="password"
          name="password"
          placeholder="enter password"
          label={true}
        />
        <InputField
          type="submit"
          name="Submit"
        />
      </form>
    </div>
  );
};
