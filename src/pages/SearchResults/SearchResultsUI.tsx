import { useState } from "react";
import SearchBar from "../Home/SearchTabComponents/SearchBar";
import TopBar from "./SearchResultComponents/TopBar";
import PlaceholderTab from "./SearchResultComponents/PlaceholderTab";
import AllResultsTab from "./SearchResultComponents/AllResultsTab";
import ImageResultsTab from "./SearchResultComponents/ImageResultsTab";
import NewsResultsTab from "./SearchResultComponents/NewsResultsTab";

const searchTabs = [
  { name: "All", value: "all" },
  { name: "Images", value: "images" },
  { name: "News", value: "news" },
  { name: "Videos", value: "videos" },
  { name: "Maps", value: "maps" },
  { name: "Shopping", value: "shopping" },

  { name: "Music", value: "music" },
];

const SearchResultsUI = (props: {
  query: string | undefined;
  openSearch: boolean;
  setOpenSearch: (value: boolean) => void;
  openVoice: boolean;
  setOpenVoice: (value: boolean) => void;
  openLens: boolean;
  setOpenLens: (value: boolean) => void;
}) => {
  const {
    query,
    openSearch,
    setOpenSearch,
    openVoice,
    setOpenVoice,
    openLens,
    setOpenLens,
  } = props;
  const [tab, setTab] = useState({ name: "All", value: "all" });

  return (
    <div className="searchresult">
      <TopBar />
      <SearchBar
        {...{
          openSearch,
          setOpenSearch,
          openVoice,
          setOpenVoice,
          openLens,
          setOpenLens,
        }}
      />
      <div className="searchresult-tabs">
        {searchTabs.map((item) => (
          <div
            key={item.value}
            className={`searchresult-tabs-item ${
              tab.value === item.value ? "searchresult-tabs-active" : ""
            }`}
            onClick={() => setTab(item)}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="searchresult-content">
        {tab.value === "all" && <AllResultsTab {...{ query }} />}
        {tab.value === "images" && <ImageResultsTab {...{ query }} />}
        {tab.value === "news" && <NewsResultsTab {...{ query }} />}
        {tab.value !== "all" &&
          tab.value !== "images" &&
          tab.value !== "news" && <PlaceholderTab {...{ query, tab }} />}
      </div>
    </div>
  );
};

export default SearchResultsUI;
