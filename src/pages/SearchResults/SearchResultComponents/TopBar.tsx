import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import Logout from "../../Home/TopbarComponents/Logout";
import ProfileDialog from "../../Home/TopbarComponents/ProfileDialog";

const TopBar = () => {
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
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="home-topbar">
      <Logout logout={logout} />
      <div
        className="home-topbar-profile"
        onClick={() => {
          setOpen(true);
        }}
      >
        <img src={userDetails.image} alt={userDetails.name} />
      </div>
      <ProfileDialog
        open={open}
        handleClose={handleClose}
        userDetails={userDetails}
      />
    </div>
  );
};

export default TopBar;
