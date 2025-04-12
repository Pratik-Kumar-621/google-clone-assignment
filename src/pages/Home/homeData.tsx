import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import SafetyCheckOutlinedIcon from "@mui/icons-material/SafetyCheckOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import InterestsOutlinedIcon from "@mui/icons-material/InterestsOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import TranslateIcon from "@mui/icons-material/Translate";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SchoolIcon from "@mui/icons-material/School";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import WavesIcon from "@mui/icons-material/Waves";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import SunnyIcon from "@mui/icons-material/Sunny";
import AirIcon from "@mui/icons-material/Air";

export const accountSettingLinks = [
  {
    id: 1,
    children: <VisibilityOffOutlinedIcon />,
    text: "Turn on Incognito",
    description:
      "Enable private search mode to prevent saving your activity or history during browsing sessions.",
  },
  {
    id: 2,
    children: <RestoreOutlinedIcon />,
    text: "Search History",
    description:
      "Review and manage your previous searches and activity saved to your account across devices.",
  },
  {
    id: 3,
    children: "",
    text: "Delete last 15 mins",
    description:
      "Quickly erase all search activity and history from the past 15 minutes on this account.",
  },
  {
    id: 4,
    children: <SafetyCheckOutlinedIcon />,
    text: "SafeSearch",
    description:
      "Filter out explicit results like pornography or violence from your search results automatically.",
  },
  {
    id: 5,
    children: <InterestsOutlinedIcon />,
    text: "Interests",
    description:
      "Update your interests to get more relevant and personalized search results and suggestions.",
  },
  {
    id: 6,
    children: <KeyOutlinedIcon />,
    text: "Passwords",
    description:
      "View, save, or manage your saved passwords securely linked to your Google account.",
  },
  {
    id: 7,
    children: <AccountCircleOutlinedIcon />,
    text: "Your Profile",
    description:
      "View and update your account information, photo, and basic profile details visible to others.",
  },
  {
    id: 8,
    children: <AutoAwesomeOutlinedIcon />,
    text: "Search personalisation",
    description:
      "Control how your activity is used to personalize your search experience and recommendations.",
  },
  {
    id: 9,
    children: <SettingsOutlinedIcon />,
    text: "Settings",
    description:
      "Access various account, privacy, and search-related settings to customize your experience.",
  },
  {
    id: 10,
    children: <HelpOutlineOutlinedIcon />,
    text: "Help and Feedback",
    description:
      "Find answers to common issues or send feedback to improve your search experience.",
  },
];

export const searchIcons = [
  {
    name: "Image Search",
    icon: <ImageSearchIcon sx={{ fontSize: "18px" }} />,
    color: "#8E6E35",
    open: "image",
  },
  {
    name: "Translate",
    icon: <TranslateIcon sx={{ fontSize: "18px" }} />,
    color: "#485B8D",
    open: "image",
  },
  {
    name: "Homework",
    icon: <SchoolIcon sx={{ fontSize: "18px" }} />,
    color: "#4B5E48",
    open: "image",
  },
  {
    name: "Music",
    icon: <MusicNoteIcon sx={{ fontSize: "18px" }} />,
    color: "#713B3B",
    open: "voice",
  },
];

export const WeatherInfoData = [
  {
    id: 1,
    title: "Gurugram",
    value: "30°C",
    icon: <NightsStayIcon />,
  },
  {
    id: 2,
    title: "Air Quality - 170",
    value: "Moderate",
    icon: <WavesIcon />,
  },
  {
    id: 3,
    title: "Humidity",
    value: 70,
    icon: <SunnyIcon />,
  },
  {
    id: 4,
    title: "Wind",
    value: "10 km/h",
    icon: <AirIcon />,
  },
];

export const newsData = [
  {
    id: "https://www.bbc.co.uk/news/articles/cvgppp6pmymo",
    title: "Judge finds Joey Barton libelled Eni Aluko in X posts",
    description:
      "A judge rules Joey Barton's social media posts about the former England striker were defamatory.",
    imageUrl:
      "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/768f/live/8189e1c0-1541-11f0-a175-57ea267ddfe2.jpg",
    source: "BBC News",
    publishedAt: "2025-04-09T15:52:21.0792825Z",
    category: "General",
  },
  {
    id: "https://www.bbc.co.uk/news/articles/c1drr40xwgro",
    title: "King Charles gives speech to Italy's parliament",
    description:
      "The King and Queen will later attend a state dinner on the third day of their state visit to Italy.",
    imageUrl:
      "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/ec88/live/559fb9b0-1530-11f0-b509-37c43eb3fe22.jpg",
    source: "BBC News",
    publishedAt: "2025-04-09T15:22:21.0474161Z",
    category: "General",
  },
  {
    id: "https://www.bbc.co.uk/news/articles/cp9yvlvx4jpo",
    title:
      "Cher Maximen murder: Man guilty of London stabbing at Notting Hill Carnival",
    description:
      "Shakeil Thibou is found guilty of murdering Cher Maximen after stabbing her at Notting Hill Carnival.",
    imageUrl:
      "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/731b/live/adaf4cd0-154c-11f0-bb66-e5a3c361000c.jpg",
    source: "BBC News",
    publishedAt: "2025-04-09T14:37:20.2179961Z",
    category: "General",
  },
  {
    id: "https://www.bbc.co.uk/news/articles/c5yrr0e7499o",
    title: "Trump tariffs spark US government debt sell-off",
    description:
      "The cost of borrowing for the US government rose as confidence in the economy waned",
    imageUrl:
      "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/4e4c/live/1d4d0e70-1533-11f0-bc17-dfa4f8dfee61.jpg",
    source: "BBC News",
    publishedAt: "2025-04-09T14:22:19.844006Z",
    category: "General",
  },
  {
    id: "https://www.bbc.co.uk/news/articles/creqqwxrr5ro",
    title:
      "Prince Harry's step back from royals led to 'unique' circumstances, court told",
    description:
      "The Duke of Sussex is in court for the second day of his appeal over his level of security in the UK.",
    imageUrl:
      "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/b5c1/live/62c7afc0-1531-11f0-8a1e-3ff815141b98.jpg",
    source: "BBC News",
    publishedAt: "2025-04-09T13:22:26.328901Z",
    category: "General",
  },
  {
    id: "https://www.bbc.co.uk/news/articles/c985555nr49o",
    title: "Ex-snooker champion Graeme Dott charged with child sex offences",
    description:
      "The 47-year-old faces historical charges relating to two children who were understood to be around 10 years old at the time.",
    imageUrl:
      "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/513c/live/eaccfd60-1538-11f0-a421-69fb502f5991.jpg",
    source: "BBC News",
    publishedAt: "2025-04-09T13:22:22.7337007Z",
    category: "General",
  },
  {
    id: "https://www.bbc.co.uk/news/articles/c4g375ke65xo",
    title:
      'Camilla Hempleman-Adams faces Inuit backlash for "privilege and ignorance"',
    description:
      "Camilla Hempleman-Adams has apologised for offence caused to the Inuit community on Baffin Island.",
    imageUrl:
      "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/b11f/live/0d59c170-1484-11f0-a455-cf1d5f751d2f.jpg",
    source: "BBC News",
    publishedAt: "2025-04-09T11:22:21.124755Z",
    category: "General",
  },
  {
    id: "https://www.bbc.co.uk/news/articles/cp8kknn3z3eo",
    title: "Newcastle A1 crash involving police cars closes road",
    description:
      "Five people were taken to hospital following the crash, the North East Ambulance Service says.",
    imageUrl:
      "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/9813/live/9e3935f0-1528-11f0-bc17-dfa4f8dfee61.jpg",
    source: "BBC News",
    publishedAt: "2025-04-09T10:37:22.0322531Z",
    category: "General",
  },
  {
    id: "https://www.bbc.co.uk/news/articles/ckg51z59v29o",
    title: "Who is Anthony Saunderson? Inmate who had affair with Kerri Pegg",
    description:
      'Inspired by Breaking Bad and The Sopranos, Anthony Saunderson was part of an "industrial scale" drugs gang.',
    imageUrl:
      "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/6a90/live/4c7374a0-1466-11f0-b1b3-7358f8d35a35.jpg",
    source: "BBC News",
    publishedAt: "2025-04-09T10:37:17.9840831Z",
    category: "General",
  },
  {
    id: "https://www.bbc.co.uk/news/articles/cz95n2837vgo",
    title: "Prime minister confirms new UK Universal theme park in Bedford",
    description:
      "The company says the new site is expected to create 28,000 jobs and generate £50bn for the economy.",
    imageUrl:
      "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/03e4/live/08c6ffa0-1494-11f0-8a1e-3ff815141b98.jpg",
    source: "BBC News",
    publishedAt: "2025-04-09T00:07:18.0327035Z",
    category: "General",
  },
];

export const trendingSearches = [
  "React tutorial",
  "JavaScript tips",
  "Firebase authentication",
  "CSS animations",
  "Next.js guide",
  "TypeScript basics",
  "Node.js performance",
  "GraphQL vs REST",
  "Tailwind CSS examples",
  "AI in web development",
];
