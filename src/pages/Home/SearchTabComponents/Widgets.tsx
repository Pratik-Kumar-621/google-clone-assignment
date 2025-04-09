import { searchIcons } from "../homeData";

const Widgets = () => {
  return (
    <div>
      {searchIcons.map((item) => {
        return (
          <div
            key={item.name}
            style={{ width: "40px", height: "40px", background: item.color }}
          >
            {item.icon}
          </div>
        );
      })}
    </div>
  );
};

export default Widgets;
