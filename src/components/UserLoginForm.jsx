import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { sendPassword } from "../services/Auth";
import { setCookie } from "../utils/cookie";
import { getProfile } from "../services/User";

import styles from "./UserLoginForm.module.css";

function UserLoginForm({ username, setUserName, passowrd, setPassword }) {
  const navigate = useNavigate();
  const { refetch } = useQuery(["profile"], getProfile);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (username.length <= 4) return;

    const { response, error } = await sendPassword(username, passowrd);
    console.log({ response, error });
    if (response) {
      setCookie(response.data.token);
      navigate("/");
      refetch();
    }
    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.form}>
        <p>Login to your Account</p>
        <span>Have a good experience</span>
        <br />
        <span className={styles.hint}>
          <p>try this : mor_2314</p>
        </span>
        <input
          type="text"
          id="userInput"
          placeholder="username"
          value={username}
          name="username"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br />
        <span className={styles.hint}>
          <p>try this : 83r5^_</p>
        </span>
        <input
          type="password"
          id="password"
          placeholder="password"
          value={passowrd}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default UserLoginForm;
