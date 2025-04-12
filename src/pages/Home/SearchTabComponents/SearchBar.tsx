import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import CenterFocusWeakOutlinedIcon from "@mui/icons-material/CenterFocusWeakOutlined";
import { IconButton } from "@mui/material";
import SearchDialog from "./SearchDialog";
import VoiceDialog from "./VoiceDialog";
import LensDialog from "./LensDialog";
const SearchBar = (props: {
  openSearch: boolean;
  openVoice: boolean;
  openLens: boolean;
  setOpenSearch: (value: boolean) => void;
  setOpenVoice: (value: boolean) => void;
  setOpenLens: (value: boolean) => void;
}) => {
  const {
    openSearch,
    openVoice,
    openLens,
    setOpenSearch,
    setOpenVoice,
    setOpenLens,
  } = props;
  const handleOpenSearch = () => {
    setOpenSearch(true);
  };
  const handleOpenVoice = () => {
    setOpenSearch(false);
    setOpenVoice(true);
  };
  const handleOpenLens = () => {
    setOpenSearch(false);
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
        {...{
          openSearch,
          handleCloseSearch,
          handleOpenSearch,
          handleOpenVoice,
          handleOpenLens,
        }}
      />
      <VoiceDialog {...{ openVoice, handleCloseVoice, handleOpenVoice }} />
      <LensDialog {...{ openLens, handleCloseLens, handleOpenLens }} />
    </div>
  );
};

export default SearchBar;
