import { searchIcons } from "../homeData";

const Widgets = () => {
  return (
    <div className="widgets">
      {searchIcons.map((item) => {
        return (
          <div
            className="widgets-item"
            key={item.name}
            style={{ background: item.color }}
          >
            {item.icon}
          </div>
        );
      })}
    </div>
  );
};

export default Widgets;
