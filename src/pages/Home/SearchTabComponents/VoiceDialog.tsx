import { SwipeableDrawer } from "@mui/material";

const VoiceDialog = (props: any) => {
  const { openVoice, handleOpenVoice, handleCloseVoice } = props;
  return (
    <SwipeableDrawer
      open={openVoice}
      onOpen={handleOpenVoice}
      onClose={handleCloseVoice}
      anchor="bottom"
      PaperProps={{
        sx: {
          width: "auto",
          maxWidth: "700px",
          margin: "0 auto",
        },
      }}
    >
      <div className="voicesearch-drawer">
        Voice Search
        <button onClick={handleCloseVoice}>Close</button>
      </div>
    </SwipeableDrawer>
  );
};

export default VoiceDialog;
