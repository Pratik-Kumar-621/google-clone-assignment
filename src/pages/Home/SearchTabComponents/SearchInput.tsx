import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MicIcon from "@mui/icons-material/Mic";
import CenterFocusWeakOutlinedIcon from "@mui/icons-material/CenterFocusWeakOutlined";

const SearchInput = (props: any) => {
  const {
    handleBack,
    searchInput,
    handleSearchChange,
    handleSearchSubmit,
    handleOpenVoice,
    handleOpenLens,
  } = props;
  return (
    <div className="textsearch-drawer-input">
      <IconButton className="textsearch-drawer-input-back" onClick={handleBack}>
        <ArrowBackIcon sx={{ fontSize: "24px" }} />
      </IconButton>
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={handleSearchChange}
        onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit(searchInput)}
      />
      <div className="textsearch-drawer-input-buttons">
        <IconButton
          className="textsearch-drawer-input-buttons-mic"
          onClick={handleOpenVoice}
        >
          <MicIcon />
        </IconButton>
        <IconButton
          className="textsearch-drawer-input-buttons-lens"
          onClick={handleOpenLens}
        >
          <CenterFocusWeakOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default SearchInput;
