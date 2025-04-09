import LogoutIcon from "@mui/icons-material/Logout";
import { Button, Dialog, IconButton } from "@mui/material";
import { useState } from "react";

const Logout = ({ logout }: { logout: () => void }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="home-topbar-logout">
      <IconButton onClick={() => setOpen(true)} color="error">
        <LogoutIcon />
      </IconButton>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <div className="logout-dialog">
          <div className="logout-dialog-heading">
            Are you sure you want to log out?
          </div>
          <div className="logout-dialog-actions">
            <Button
              variant="outlined"
              className="cancel-dialog"
              onClick={() => setOpen(false)}
            >
              No
            </Button>
            <Button
              className="submit-dialog"
              variant="contained"
              onClick={logout}
            >
              Yes
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Logout;
