import { Button } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import LoadingPage from "../LoadingPage";
import GoogleIcon from "@mui/icons-material/Google";

const LoginPage = () => {
  const { authLoading, signInWithGoogle } = useAuth();
  return (
    <div className="login">
      {authLoading && <LoadingPage />}
      <Button variant="contained" onClick={signInWithGoogle}>
        Login with <GoogleIcon sx={{ fontSize: "16px", marginLeft: "5px" }} />{" "}
      </Button>
    </div>
  );
};

export default LoginPage;
