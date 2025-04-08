import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import LoadingPage from "../LoadingPage";
import HomeUI from "./HomeUI";

const HomePage = () => {
  const { authLoading, logout, user } = useAuth();
  const [userDetails, setUserDetails] = useState<any>({
    name: "",
    email: "",
    image: "",
  });
  useEffect(() => {
    if (!authLoading) {
      setUserDetails({
        ...userDetails,
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      });
    }
  }, [authLoading]);

  return (
    <>
      {authLoading && <LoadingPage />}
      <HomeUI {...{ logout, userDetails }} />
    </>
  );
};

export default HomePage;
