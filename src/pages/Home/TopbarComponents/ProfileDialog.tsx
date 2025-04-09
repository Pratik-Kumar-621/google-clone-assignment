import { Dialog, Button, Slide, Drawer } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { useState } from "react";
import { dummyAccounts } from "../../../data/data";
import { dummyAccountsType } from "../../../data/types";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
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
    >
      <div className="dialog-content">
        <div className="dialog-content-heading">Google</div>
        <div className="dialog-content-details">
          <div className="dialog-content-details-user">
            <div className="dialog-content-details-user-info">
              <img
                className="dialog-content-details-user-info-image"
                src={userDetails.image}
                alt={userDetails.name}
              />
              <div className="dialog-content-details-user-info-name">
                {userDetails.name}
              </div>
              <div className="dialog-content-details-user-info-email">
                {userDetails.email}
              </div>
            </div>

            <div
              className="dialog-content-details-user-button"
              onClick={() => setShowAccounts(!showAccounts)}
            >
              <ExpandCircleDownOutlinedIcon />
            </div>
          </div>
          <Button
            variant="outlined"
            className="dialog-content-details-button"
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
          <div
            className={`dialog-content-details-accounts ${
              showAccounts ? "accounts-show" : "accounts-hide"
            }`}
          >
            {dummyAccounts.map((item: dummyAccountsType) => {
              return (
                <div className="dialog-content-details-accounts-item">
                  <div className="dialog-content-details-accounts-item-image">
                    {item.image}
                  </div>
                  <div className="dialog-content-details-accounts-item-name">
                    {item.name}
                  </div>
                  <div className="dialog-content-details-accounts-item-email">
                    {item.email}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="dialog-content-links">
          {accountSettingLinks.map((item: any) => {
            return (
              <div
                className="dialog-content-links-item"
                key={item.id}
                onClick={() => handleDrawerOpen(item)}
              >
                <div className="dialog-content-links-item-icon">
                  {item.children}
                </div>
                <div className="dialog-content-links-item-name">
                  {item.text}
                </div>
              </div>
            );
          })}
        </div>
        <div className="dialog-content-footer">
          <div className="dialog-content-footer-item">Privacy Policy</div>
          <div className="seperator-footer"></div>
          <div className="dialog-content-footer-item">Terms and Conditions</div>
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
