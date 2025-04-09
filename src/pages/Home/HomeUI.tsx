import { useState } from "react";

import SearchTab from "./SearchTab";
import GeminiTab from "./GeminiTab";
import ProfileDialog from "./TopbarComponents/ProfileDialog";
import TopBar from "./TopBar";
const HomeUI = (props: any) => {
  const { logout, userDetails } = props;
  const [tab, setTab] = useState("search");
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="home">
      <TopBar {...{ tab, logout, setTab, userDetails, setOpen }} />
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
