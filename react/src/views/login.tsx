import { useMutation } from "@apollo/client";
import { Typography, TextField, Button, ButtonGroup } from "@material-ui/core";
import { useAtom } from "jotai";
import { useState } from "react";
import { LOGIN } from "../gql/auth/queries";
import { userAtom } from "../jotai-data/Atoms";
import { LoginType, UserType } from "../types/types";

const loginState: LoginType = {
  username: "",
  password: "",
};

function LoginForm() {
  const [user, setUser] = useAtom(userAtom);
  const [loginUser, setLoginUser] = useState(loginState);
  const [errors, setErrors] = useState(null);
  const [getLogin] = useMutation(LOGIN({ ...loginUser }));

  const setUsername = (e: any) => {
    setLoginUser({ ...loginUser, username: e.target.value });
  };
  const setPassword = (e: any) => {
    setLoginUser({ ...loginUser, password: e.target.value });
  };

  const login = () => {
    if (user.token || user.username) {
      setUser({ username: "", token: "" });
    }
    getLogin()
      .then((d: any) => {
        if (d.data && d.data.tokenAuth) {
          const userObj: UserType = {
            username: loginUser.username,
            token: d.data.tokenAuth.token,
          };
          setUser(userObj);
          localStorage.setItem("username", userObj.username);
          localStorage.setItem("token", userObj.token);
        }
      })
      .catch((e: any) => {
        console.error(e);
        setErrors(e.toString());
      });
  };

  return (
    <>
      <Typography component="h3" gutterBottom>
        BIOPEDIA LOGIN
      </Typography>
      <div>
        <TextField
          value={loginUser.username}
          label="Username"
          id="login-username"
          variant="outlined"
          onChange={setUsername}
        />
        <TextField
          value={loginUser.password}
          label="Password"
          type="password"
          id="login-password"
          variant="outlined"
          onChange={setPassword}
        />
      </div>
      {errors && <p style={{ color: "red" }}>{errors}</p>}
      <ButtonGroup style={{ marginTop: "1em" }}>
        <Button variant="outlined" color="primary" onClick={login}>
          Login
        </Button>
        <Button variant="contained" color="secondary">
          Cancel
        </Button>
      </ButtonGroup>
    </>
  );
}

export default LoginForm;
