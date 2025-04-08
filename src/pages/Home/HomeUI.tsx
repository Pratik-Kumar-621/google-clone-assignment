import { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";
import SearchTab from "./SearchTab";
import GeminiTab from "./GeminiTab";
import ProfileDialog from "./ProfileDialog";
const HomeUI = (props: any) => {
  const { logout, userDetails } = props;
  const [tab, setTab] = useState("search");
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="home">
      <div className="home-topbar">
        <div className="home-topbar-filter">
          <IconButton onClick={logout} color="error">
            <LogoutIcon />
          </IconButton>
        </div>
        <div className="home-topbar-tabs">
          <div
            className="home-topbar-tabs-item"
            onClick={() => setTab("search")}
          >
            <img src="/assets/Google.png" alt="G" /> Google
          </div>
          <div
            className="home-topbar-tabs-item"
            onClick={() => setTab("Gemini")}
          >
            <img src="/assets/Gemini.png" alt="Gemini" />
          </div>
        </div>
        <div
          className="home-topbar-profile"
          onClick={() => {
            setOpen(true);
          }}
        >
          <img src={userDetails.image} alt={userDetails.name} />
        </div>
      </div>
      {tab === "search" ? <SearchTab /> : <GeminiTab />}
      <div className="home-search">
        <div className="home-search-heading"></div>
        <div className="home-search-input"></div>
      </div>
      <ProfileDialog {...{ open, handleClose, userDetails }} />
    </div>
  );
};

export default HomeUI;
