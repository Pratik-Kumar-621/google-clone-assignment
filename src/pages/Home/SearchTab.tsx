import NewsPage from "./SearchTabComponents/News";
import SearchBar from "./SearchTabComponents/SearchBar";
import WeatherInfo from "./SearchTabComponents/WeatherInfo";
import Widgets from "./SearchTabComponents/Widgets";

const SearchTab = (props: {
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
  return (
    <div>
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
      <Widgets {...{ setOpenVoice, setOpenLens }} />
      <WeatherInfo />
      <NewsPage />
    </div>
  );
};

export default SearchTab;
