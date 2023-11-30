import { use, useContext } from "react";
import { auth } from "@/lib/firebase/client";
import "firebase/auth";
import { Button } from "@mui/material";
import { AuthContext } from "@/store/AuthContext";
import useUseService from "@/service/UserServices";

const LoginButton = () => {
  const { CreateUserService } = useUseService();
  const { login, currentUser } = useContext(AuthContext);
  const userId = currentUser?.uid;
  const userName = currentUser?.displayName;
  const handleLogin = async () => {
    try {
      await login();
      if (userId && userName) {
        CreateUserService(userId, userName);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return <Button onClick={handleLogin}>GoogleLogin</Button>;
};
export default LoginButton;