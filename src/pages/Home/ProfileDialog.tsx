import { Dialog, Button, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { useState } from "react";
import { dummyAccounts } from "../../data/data";
import { dummyAccountsType } from "../../data/types";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import { accountSettingLinks } from "./homeData";
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
  const [showAccounts, setShowAccounts] = useState(false);
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
          <Button variant="outlined" className="dialog-content-details-button">
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
              <div className="dialog-content-links-item">
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
    </Dialog>
  );
};

export default ProfileDialog;
