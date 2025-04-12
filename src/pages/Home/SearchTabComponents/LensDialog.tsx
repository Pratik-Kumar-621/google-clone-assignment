import { SwipeableDrawer } from "@mui/material";

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
        <button onClick={handleCloseLens}>Close</button>
        Lens SwipeableDrawer
      </div>
    </SwipeableDrawer>
  );
};

export default LensDialog;
