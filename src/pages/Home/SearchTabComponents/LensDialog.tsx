import { SwipeableDrawer } from "@mui/material";
import CustomCameraCapture from "./FileandCameraInput";

const LensDialog = (props: any) => {
  const { openLens, handleOpenLens, handleCloseLens } = props;
  return (
    <SwipeableDrawer
      open={openLens}
      onOpen={handleOpenLens}
      onClose={handleCloseLens}
      anchor="bottom"
      PaperProps={{
        sx: {
          width: "auto",
          maxWidth: "700px",
          margin: "0 auto",
        },
      }}
    >
      <div className="imagesearch-drawer">
        <CustomCameraCapture />
      </div>
    </SwipeableDrawer>
  );
};

export default LensDialog;
