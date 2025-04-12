import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import { IconButton, SwipeableDrawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
const imageResults = [
  {
    image: "/assets/imageresult/1.webp",
    name: "Lunar Eclipse",
    description:
      "Experience the enchanting beauty of a lunar eclipse, where the moon is bathed in a mysterious reddish glow.",
  },
  {
    image: "/assets/imageresult/2.webp",
    name: "Solar Flare",
    description:
      "Witness the awe-inspiring power of a solar flare, a burst of energy from the sun's surface.",
  },
  {
    image: "/assets/imageresult/3.webp",
    name: "Aurora Borealis",
    description:
      "Marvel at the mesmerizing Aurora Borealis, colorful lights dancing across the polar skies in a natural spectacle.",
  },
  {
    image: "/assets/imageresult/4.webp",
    name: "Milky Way",
    description:
      "Gaze at the breathtaking Milky Way, a stunning view of our galaxy filled with countless stars and mysteries.",
  },
  {
    image: "/assets/imageresult/5.webp",
    name: "Comet Trail",
    description:
      "Follow the dazzling trail of a comet as it streaks across the night sky, leaving a luminous path.",
  },
  {
    image: "/assets/imageresult/6.webp",
    name: "AI-Powered Healthcare Revolution",
    description:
      "Can AI predict and prevent disease before it strikes? Is this the future of healthcare?",
  },
];
const ImageResultsTab = (props: any) => {
  const { query } = props;
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>();
  return (
    <div className="searchresult-content-images">
      <div className="searchresult-content-images-head">
        <InfoOutlineIcon />{" "}
        <span>
          Images for: <strong>{query}</strong>
        </span>
      </div>
      <div className="searchresult-content-images-list">
        {imageResults.map((item) => {
          return (
            <div
              className="searchresult-content-images-list-item"
              key={item.name}
              onClick={() => {
                setSelectedImage(item);
                setOpen(true);
              }}
            >
              <div className="searchresult-content-images-list-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="searchresult-content-images-list-item-name">
                {item.name}
              </div>
              <div className="searchresult-content-images-list-item-description">
                {item.description}
              </div>
            </div>
          );
        })}
      </div>
      {selectedImage && (
        <SwipeableDrawer
          anchor="bottom"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              width: "auto",
              maxWidth: "700px",
              margin: "0 auto",
              borderRadius: "12px 12px 0 0",
            },
          }}
          className="drawer-news-bottom"
        >
          <div className="drawer-news-bottom-content">
            <div className="drawer-news-bottom-content-close">
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
            </div>
            <div className="drawer-news-bottom-content-heading">
              {selectedImage.name}
            </div>

            <div className="drawer-news-bottom-content-image">
              <img src={selectedImage.image} alt={selectedImage.name} />
            </div>

            <div className="drawer-news-bottom-content-description">
              {selectedImage.description} Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Possimus, ipsam odit? Saepe sit,
              ipsa ab quisquam dicta, cupiditate eius molestias reprehenderit
              deserunt placeat corrupti ullam hic itaque aliquam repudiandae
              atque reiciendis accusantium neque nihil asperiores molestiae
              ipsum. Nam corporis nulla nisi quaerat cum quos unde, illo quia
              repellendus quae ex sapiente nostrum perferendis aperiam soluta
              tempora reiciendis molestiae ducimus. Quis obcaecati molestiae,
              aliquid reprehenderit velit rerum voluptates autem provident
              corrupti temporibus assumenda dicta accusamus delectus ut. Culpa
              est architecto libero maiores ab perferendis inventore accusantium
              voluptatem modi, optio et aut eius asperiores tenetur accusamus
              quisquam alias. Aspernatur cum quo et dolores, molestiae deleniti
              ea rerum praesentium voluptatum doloremque enim blanditiis nam!
              Ut, ullam! Assumenda odit itaque natus sit placeat, ipsa voluptate
              eius incidunt mollitia, quis accusamus ad quia alias repellat
              perspiciatis. Ab impedit veritatis autem iure magnam aliquam
              eligendi laborum debitis harum consectetur, aperiam qui.
              Doloremque vero voluptatum maxime dolorem, possimus commodi saepe
              debitis alias dolores nobis. Dignissimos corrupti accusantium
              totam voluptatem fugit esse quo, repellat consequatur in odio
              animi ad quaerat nisi molestiae dicta earum explicabo. Autem, rem
              nihil? Qui accusamus, commodi iste, blanditiis quia ducimus quidem
              pariatur aliquid, officiis error sint voluptatem temporibus ad
              impedit quasi eum nisi.
            </div>
          </div>
        </SwipeableDrawer>
      )}
    </div>
  );
};

export default ImageResultsTab;
