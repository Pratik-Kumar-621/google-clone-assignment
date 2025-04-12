import { searchIcons } from "../homeData";

const Widgets = (props: {
  setOpenVoice: (value: boolean) => void;
  setOpenLens: (value: boolean) => void;
}) => {
  const { setOpenVoice, setOpenLens } = props;
  return (
    <div className="widgets">
      {searchIcons.map((item) => {
        return (
          <div
            className="widgets-item"
            key={item.name}
            style={{ background: item.color }}
            onClick={() => {
              if (item.open === "image") {
                setOpenLens(true);
              } else if (item.open === "voice") {
                setOpenVoice(true);
              }
            }}
          >
            {item.icon}
          </div>
        );
      })}
    </div>
  );
};

export default Widgets;
