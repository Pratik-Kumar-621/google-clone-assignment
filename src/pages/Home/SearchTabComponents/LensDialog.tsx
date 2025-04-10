import { Drawer } from "@mui/material";

const LensDialog = (props: any) => {
  const { openLens, handleCloseLens } = props;
  return (
    <Drawer open={openLens} onClose={handleCloseLens} anchor="bottom">
      Lens drawer
    </Drawer>
  );
};

export default LensDialog;
