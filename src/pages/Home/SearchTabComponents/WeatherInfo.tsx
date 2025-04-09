import { WeatherInfoData } from "../homeData";

const WeatherInfo = () => {
  return (
    <div className="weather">
      {WeatherInfoData.map((item) => {
        return (
          <div className="weather-item" key={item.id}>
            <div className="weather-title">{item.title}</div>
            <div className="weather-info">
              <div>{item.value}</div>
              <div>{item.icon}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherInfo;
