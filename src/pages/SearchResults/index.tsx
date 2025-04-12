import { useParams } from "react-router-dom";
import SearchResultsUI from "./SearchResultsUI";
import { useState } from "react";

const SearchResultsPage = () => {
  const params = useParams();
  const [openSearch, setOpenSearch] = useState(false);
  const [openVoice, setOpenVoice] = useState(false);
  const [openLens, setOpenLens] = useState(false);
  const { query } = params;
  return (
    <SearchResultsUI
      {...{
        query,
        openSearch,
        setOpenSearch,
        openVoice,
        setOpenVoice,
        openLens,
        setOpenLens,
      }}
    />
  );
};

export default SearchResultsPage;
