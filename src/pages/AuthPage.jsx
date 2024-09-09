import { useState } from "react";
import UserLoginForm from "../components/UserLoginForm";

function AuthPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <UserLoginForm
        username={username}
        setUserName={setUserName}
        passowrd={password}
        setPassword={setPassword}
      />
    </div>
  );
}

export default AuthPage;
