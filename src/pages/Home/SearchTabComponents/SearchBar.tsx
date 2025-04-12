import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import CenterFocusWeakOutlinedIcon from "@mui/icons-material/CenterFocusWeakOutlined";
import { IconButton } from "@mui/material";
import SearchDialog from "./SearchDialog";
import VoiceDialog from "./VoiceDialog";
import LensDialog from "./LensDialog";
import { useNavigate, useParams } from "react-router-dom";
const SearchBar = (props: {
  openSearch: boolean;
  openVoice: boolean;
  openLens: boolean;
  setOpenSearch: (value: boolean) => void;
  setOpenVoice: (value: boolean) => void;
  setOpenLens: (value: boolean) => void;
}) => {
  const path = window.location.pathname;
  const params = useParams();
  const { query } = params;
  const isSearchPage = path.includes("/search");
  const navigate = useNavigate();
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
      <div
        className="searchbar-heading"
        style={{ cursor: isSearchPage ? "pointer" : "text" }}
        onClick={() => {
          if (isSearchPage) navigate("/");
          console.log("Hi", isSearchPage);
        }}
      >
        Google
      </div>
      <div className="searchbar-button">
        <div className="searchbar-button-button" onClick={handleOpenSearch}>
          <SearchIcon />
          <span
            style={{
              color: isSearchPage ? "#c6c6c9" : "#858586",
            }}
          >
            <>
              {query ? (
                <>
                  {query.length > 20 ? `${query.substring(0, 20)}...` : query}
                </>
              ) : (
                "Search Google"
              )}
            </>
          </span>
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
