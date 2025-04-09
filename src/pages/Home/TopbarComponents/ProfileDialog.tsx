import { Dialog, Button, Slide, Drawer, IconButton } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { useState } from "react";
import { dummyAccounts } from "../../../data/data";
import { dummyAccountsType } from "../../../data/types";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { accountSettingLinks } from "../homeData";
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface dialogProps {
  open: boolean;
  handleClose: () => void;
  userDetails: any;
}

const ProfileDialog = (props: dialogProps) => {
  const { open, handleClose, userDetails } = props;
  const [drawerBottom, setDrawerBottom] = useState(false);
  const [showAccounts, setShowAccounts] = useState(false);
  const [drawerContent, setDrawerContent] = useState<any>({
    name: accountSettingLinks[0].text,
    description: accountSettingLinks[0].description,
  });
  const handleDrawerOpen = (item: any) => {
    setDrawerContent({
      name: item.text,
      description: item.description,
    });
    setDrawerBottom(true);
  };
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      fullWidth
      className="dialog"
      sx={{ background: "rgba(255, 255, 255, 0.072)" }}
    >
      <div className="dialogprofile">
        <div className="dialogprofile-close">
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="dialogprofile-heading">Google</div>
        <div className="dialogprofile-details">
          <div className="dialogprofile-details-user">
            <div className="dialogprofile-details-user-info">
              <img
                className="dialogprofile-details-user-info-image"
                src={userDetails.image}
                alt={userDetails.name}
              />
              <div className="dialogprofile-details-user-info-details">
                <div className="dialogprofile-details-user-info-name">
                  {userDetails.name}
                </div>
                <div className="dialogprofile-details-user-info-email">
                  {userDetails.email}
                </div>
              </div>
            </div>

            <div
              className="dialogprofile-details-user-button"
              onClick={() => setShowAccounts(!showAccounts)}
            >
              <ExpandCircleDownOutlinedIcon />
            </div>
          </div>
          <div className="dialogprofile-details-button">
            <Button
              variant="outlined"
              className="dialogprofile-details-button"
              onClick={() =>
                handleDrawerOpen({
                  text: "Manage your Google Account",
                  description:
                    "Manage your Google Account settings, privacy options, and personalization preferences.",
                })
              }
            >
              Manage your Google Account
            </Button>
          </div>
          <div
            className={`dialogprofile-details-accounts ${
              showAccounts ? "accounts-show" : "accounts-hide"
            }`}
          >
            {dummyAccounts.map((item: dummyAccountsType) => {
              return (
                <div className="dialogprofile-details-accounts-item">
                  <div className="dialogprofile-details-accounts-item-image">
                    {item.image}
                  </div>
                  <div>
                    <div className="dialogprofile-details-accounts-item-name">
                      {item.name}
                    </div>
                    <div className="dialogprofile-details-accounts-item-email">
                      {item.email}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="dialogprofile-links">
          {accountSettingLinks.map((item: any) => {
            return (
              <div
                className="dialogprofile-links-item"
                key={item.id}
                onClick={() => handleDrawerOpen(item)}
              >
                <div className="dialogprofile-links-item-icon">
                  {item.children}
                </div>
                <div className="dialogprofile-links-item-name">{item.text}</div>
              </div>
            );
          })}
        </div>

        <div className="dialogprofile-footer">
          <div
            className="dialogprofile-footer-item"
            onClick={() =>
              handleDrawerOpen({
                text: "Privacy Policy",
                description: "Learn about how we handle your data and privacy.",
              })
            }
          >
            Privacy Policy
          </div>
          <div className="seperator-footer"></div>
          <div
            className="dialogprofile-footer-item"
            onClick={() =>
              handleDrawerOpen({
                text: "Terms and Conditions",
                description: "Review our terms and conditions.",
              })
            }
          >
            Terms and Conditions
          </div>
        </div>
      </div>
      <Drawer
        anchor="bottom"
        open={drawerBottom}
        onClose={() => setDrawerBottom(false)}
        PaperProps={{
          sx: {
            width: "auto",
            maxWidth: "700px",
            margin: "0 auto",
            borderRadius: "12px 12px 0 0",
          },
        }}
        ModalProps={{
          keepMounted: true,
          container: document.body, // you can customize this
          disablePortal: true, // important: keep it in dialog hierarchy
        }}
        className="drawer-bottom"
      >
        <div className="drawer-bottom-content" style={{ minHeight: "60vh" }}>
          <div className="drawer-bottom-content-heading">
            {drawerContent.name}
          </div>
          <div className="drawer-bottom-content-details">
            {drawerContent.description}
          </div>
        </div>
      </Drawer>
    </Dialog>
  );
};

export default ProfileDialog;
