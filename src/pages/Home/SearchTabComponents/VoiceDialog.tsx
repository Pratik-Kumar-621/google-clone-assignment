import { Drawer } from "@mui/material";

const VoiceDialog = (props: any) => {
  const { openVoice, handleCloseVoice } = props;
  return (
    <Drawer open={openVoice} onClose={handleCloseVoice} anchor="bottom">
      Voice drawer
    </Drawer>
  );
};

export default VoiceDialog;
