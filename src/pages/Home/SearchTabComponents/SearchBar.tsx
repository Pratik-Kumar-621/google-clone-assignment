import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import CenterFocusWeakOutlinedIcon from "@mui/icons-material/CenterFocusWeakOutlined";
import { IconButton } from "@mui/material";
import SearchDialog from "./SearchDialog";
import VoiceDialog from "./VoiceDialog";
import LensDialog from "./LensDialog";
const SearchBar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openVoice, setOpenVoice] = useState(false);
  const [openLens, setOpenLens] = useState(false);
  const handleOpenSearch = () => {
    setOpenSearch(true);
  };
  const handleOpenVoice = () => {
    setOpenVoice(true);
  };
  const handleOpenLens = () => {
    setOpenLens(true);
  };

  const handleCloseSearch = () => {
    setOpenSearch(false);
  };
  const handleCloseVoice = () => {
    setOpenVoice(false);
  };
  const handleCloseLens = () => {
    setOpenLens(false);
  };
  return (
    <div className="searchbar">
      <div className="searchbar-heading">Google</div>
      <div className="searchbar-button">
        <div className="searchbar-button-button" onClick={handleOpenSearch}>
          <SearchIcon /> Search
        </div>
        <div className="searchbar-button-icons">
          <IconButton
            className="searchbar-button-icons-mic"
            onClick={handleOpenVoice}
          >
            <MicIcon />
          </IconButton>
          <IconButton
            className="searchbar-button-icons-lens"
            onClick={handleOpenLens}
          >
            <CenterFocusWeakOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <SearchDialog
        {...{ openSearch, handleCloseSearch }}
        onClick={handleOpenVoice}
      />
      <VoiceDialog {...{ openVoice, handleCloseVoice }} />
      <LensDialog {...{ openLens, handleCloseLens }} />
    </div>
  );
};

export default SearchBar;
