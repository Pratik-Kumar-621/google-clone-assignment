import NewsPage from "./SearchTabComponents/News";
import SearchBar from "./SearchTabComponents/SearchBar";
import WeatherInfo from "./SearchTabComponents/WeatherInfo";
import Widgets from "./SearchTabComponents/Widgets";

const SearchTab = () => {
  return (
    <div>
      <SearchBar />
      <Widgets />
      <WeatherInfo />
      <NewsPage />
    </div>
  );
};

export default SearchTab;
