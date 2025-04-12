import { Button, SwipeableDrawer } from "@mui/material";
import { useState, useEffect } from "react";
import searchSuggestions from "../searchSuggestions";
import { trendingSearches } from "../homeData";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useParams } from "react-router-dom";
import SearchInput from "./SearchInput";
interface SearchDialogProps {
  openSearch: boolean;
  handleOpenSearch: () => void;
  handleCloseSearch: () => void;
  handleOpenVoice: () => void;
  handleOpenLens: () => void;
}

const SearchDialog = (props: SearchDialogProps) => {
  const {
    openSearch,
    handleOpenSearch,
    handleCloseSearch,
    handleOpenVoice,
    handleOpenLens,
  } = props;
  const navigate = useNavigate();
  const params = useParams();
  const { query } = params;

  const [searchInput, setSearchInput] = useState(query || "");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [filteredSearches, setFilteredSearches] = useState<string[]>([]);
  const [matchingSuggestions, setMatchingSuggestions] = useState<
    typeof searchSuggestions
  >([]);

  // search history
  useEffect(() => {
    const savedSearches = JSON.parse(
      localStorage.getItem("recentSearches") || "[]"
    );
    setRecentSearches(savedSearches);
  }, []);

  // Save search history and making sure it's not duplicated
  const saveSearch = (search: string) => {
    const updatedSearches = [
      search,
      ...recentSearches.filter((item) => item !== search),
    ];
    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
  };

  // login for matching the search input with the suggestions and history
  const containsSequence = (text: string, sequence: string): boolean => {
    let searchIndex = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === sequence[searchIndex]) {
        searchIndex++;
        if (searchIndex === sequence.length) {
          return true;
        }
      }
    }
    return false;
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    const searchTerm = value.toLowerCase();
    const filteredRecentSearches = recentSearches.filter((item) => {
      const itemLower = item.toLowerCase();
      return containsSequence(itemLower, searchTerm);
    });
    const filteredSuggestions = searchSuggestions
      .filter((item) => {
        const suggestionLower = item.suggestion.toLowerCase();
        return containsSequence(suggestionLower, searchTerm);
      })
      .slice(0, 20);

    setFilteredSearches(filteredRecentSearches);
    setMatchingSuggestions(filteredSuggestions);
  };

  const handleSearchSubmit = (item: string) => {
    saveSearch(item);
    setSearchInput(item);
    navigate(`/search/${item}`);
    handleCloseSearch();
  };

  const handleDeleteRecentSearches = () => {
    if (
      window.confirm(
        "Are you sure you want to delete your recent search history?"
      )
    ) {
      setRecentSearches([]);
      localStorage.removeItem("recentSearches");
    }
  };

  return (
    <SwipeableDrawer
      open={openSearch}
      onClose={handleCloseSearch}
      anchor="bottom"
      onOpen={handleOpenSearch}
      PaperProps={{
        sx: {
          width: "auto",
          maxWidth: "700px",
          margin: "0 auto",
        },
      }}
    >
      <div className="textsearch-drawer">
        <SearchInput
          handleBack={handleCloseSearch}
          {...{
            searchInput,
            handleSearchChange,
            handleSearchSubmit,
            handleOpenVoice,
            handleOpenLens,
          }}
        />

        <div style={{ marginTop: "80px" }}></div>
        <div className="textsearch-drawer-history">
          {!searchInput && recentSearches.length > 0 && (
            <>
              <div className="textsearch-drawer-history-header">
                <div className="textsearch-drawer-history-header-title">
                  Recent Searches
                </div>
                <Button
                  variant="text"
                  color="inherit"
                  className="textsearch-drawer-history-header-manage"
                  onClick={handleDeleteRecentSearches}
                >
                  Manage History
                </Button>
              </div>
              <div className="textsearch-drawer-history-list">
                {recentSearches.slice(0, 10).map((item, index) => (
                  <div
                    key={index}
                    className="textsearch-drawer-history-list-item"
                    onClick={() => {
                      saveSearch(item);
                      handleSearchSubmit(item);
                    }}
                  >
                    <span>
                      <AccessTimeIcon sx={{ fontSize: "20px" }} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </>
          )}

          {!searchInput && trendingSearches.length > 0 && (
            <div className="textsearch-drawer-trending">
              <div className="textsearch-drawer-trending-header">
                <div className="textsearch-drawer-trending-header-title">
                  Trending Searches
                </div>
              </div>
              <div className="textsearch-drawer-trending-list">
                {trendingSearches.map((item, index) => (
                  <div
                    key={index}
                    className="textsearch-drawer-trending-list-item"
                    onClick={() => {
                      saveSearch(item);
                      handleSearchSubmit(item);
                    }}
                  >
                    <span>
                      <TrendingUpIcon sx={{ fontSize: "20px" }} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {searchInput && (
            <div className="textsearch-drawer-results">
              <div className="textsearch-drawer-results-header">
                <div className="textsearch-drawer-results-header-title">
                  Suggestions
                </div>
              </div>
              <div className="textsearch-drawer-results-list">
                {filteredSearches.length > 0 && (
                  <>
                    {filteredSearches.map((item, index) => (
                      <div
                        key={index}
                        className="textsearch-drawer-results-list-item"
                        onClick={() => {
                          saveSearch(item);
                          handleSearchSubmit(item);
                        }}
                      >
                        <span>
                          <SearchIcon sx={{ fontSize: "20px" }} />
                        </span>
                        {item}
                      </div>
                    ))}
                  </>
                )}
                {matchingSuggestions.length > 0 ? (
                  <>
                    {matchingSuggestions.map((item) => (
                      <div
                        key={item.id}
                        className="textsearch-drawer-results-list-item"
                        onClick={() => {
                          saveSearch(item.suggestion);
                          handleSearchSubmit(item.suggestion);
                        }}
                      >
                        <span>
                          <SearchIcon sx={{ fontSize: "20px" }} />
                        </span>
                        {item.suggestion}
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {trendingSearches.map((item) => (
                      <div
                        key={item}
                        className="textsearch-drawer-results-list-item"
                        onClick={() => {
                          saveSearch(item);
                          handleSearchSubmit(item);
                        }}
                      >
                        <span>
                          <SearchIcon sx={{ fontSize: "20px" }} />
                        </span>
                        {item}
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </SwipeableDrawer>
  );
};

export default SearchDialog;
