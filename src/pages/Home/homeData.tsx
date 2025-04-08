import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import SafetyCheckOutlinedIcon from "@mui/icons-material/SafetyCheckOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import InterestsOutlinedIcon from "@mui/icons-material/InterestsOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

export const accountSettingLinks = [
  {
    id: 1,
    children: <VisibilityOffOutlinedIcon />,
    text: "Turn on Incognito",
  },
  {
    id: 2,
    children: <RestoreOutlinedIcon />,
    text: "Search History",
  },
  {
    id: 3,
    children: "",
    text: "Delete last 15 mins",
  },
  {
    id: 4,
    children: <SafetyCheckOutlinedIcon />,
    text: "SafeSearch",
  },
  {
    id: 5,
    children: <InterestsOutlinedIcon />,
    text: "Interests",
  },
  {
    id: 6,
    children: <KeyOutlinedIcon />,
    text: "Passwords",
  },
  {
    id: 7,
    children: <AccountCircleOutlinedIcon />,
    text: "Your Profile",
  },
  {
    id: 8,
    children: <AutoAwesomeOutlinedIcon />,
    text: "Search personalisation",
  },
  {
    id: 9,
    children: <SettingsOutlinedIcon />,
    text: "Settings",
  },
  {
    id: 10,
    children: <HelpOutlineOutlinedIcon />,
    text: "Help and Feedback",
  },
];
