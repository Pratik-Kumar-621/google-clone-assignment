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
    icon: <ImageSearchIcon />,
    color: "#8E6E35",
  },
  {
    name: "Translate",
    icon: <TranslateIcon />,
    color: "#485B8D",
  },
  {
    name: "Education",
    icon: <SchoolIcon />,
    color: "#4B5E48",
  },
  {
    name: "Music",
    icon: <MusicNoteIcon />,
    color: "#713B3B",
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
    id: 1,
    title: "Tech Giants Invest in AI Research",
    description:
      "Major companies team up to lead ethical AI development, emphasizing transparency and innovation for a smarter future across industries worldwide.",
    source: "TechCrunch",
    publishedAt: "2025-04-09T11:28:21.063305Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Technology",
  },
  {
    id: 2,
    title: "Global Markets Rally Amid Optimism",
    description:
      "Markets surged as investors reacted positively to new jobs data, improved trade balances, and increased consumer spending around the globe.",
    source: "Bloomberg",
    publishedAt: "2025-04-09T10:28:21.063323Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Finance",
  },
  {
    id: 3,
    title: "Astronomers Detect Signals From Deep Space",
    description:
      "Astronomers have picked up mysterious space signals, possibly from a new pulsar, igniting excitement in the astrophysics community.",
    source: "NASA News",
    publishedAt: "2025-04-09T09:28:21.063331Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Science",
  },
  {
    id: 4,
    title: "Environmentalists Warn About Ocean Plastic",
    description:
      "New studies show that oceanic plastic pollution has doubled over the past decade, threatening marine biodiversity and ecosystems worldwide.",
    source: "National Geographic",
    publishedAt: "2025-04-09T08:28:21.063339Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Environment",
  },
  {
    id: 5,
    title: "Breakthrough in Renewable Energy Tech",
    description:
      "Engineers develop solar panels that work during rain, expanding renewable energy reliability in regions with diverse weather conditions year-round.",
    source: "The Guardian",
    publishedAt: "2025-04-09T07:28:21.063345Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Health",
  },
  {
    id: 6,
    title: "World Health Summit Set for June",
    description:
      "Global health leaders will meet to discuss vaccine equity, disease prevention, and funding strategies to tackle future pandemics.",
    source: "BBC News",
    publishedAt: "2025-04-09T06:28:21.063351Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Sports",
  },
  {
    id: 7,
    title: "Premier League Match Ends in 3\u20133 Draw",
    description:
      "An intense football match ended in a dramatic draw, leaving fans exhilarated and reshaping the current league standings.",
    source: "ESPN",
    publishedAt: "2025-04-09T05:28:21.063358Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Entertainment",
  },
  {
    id: 8,
    title: "Indie Film Festival Kicks Off in Toronto",
    description:
      "The international film festival showcased emerging indie talents, drawing huge audiences and critical acclaim for several debut films.",
    source: "Variety",
    publishedAt: "2025-04-09T04:28:21.063366Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Politics",
  },
  {
    id: 9,
    title: "Government Announces Tax Reforms",
    description:
      "The government introduces tax reforms aimed at helping the middle class and streamlining the filing process for small businesses.",
    source: "The Hindu",
    publishedAt: "2025-04-09T03:28:21.063372Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Education",
  },
  {
    id: 10,
    title: "Educational Apps Gain Popularity Post-Pandemic",
    description:
      "EdTech tools are transforming learning as students shift to online platforms offering personalized, engaging educational experiences.",
    source: "EdSurge",
    publishedAt: "2025-04-09T02:28:21.063377Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "World",
  },
  {
    id: 11,
    title: "Robotics Startups Disrupt Manufacturing Sector",
    description:
      "Major companies team up to lead ethical AI development, emphasizing transparency and innovation for a smarter future across industries worldwide.",
    source: "TechCrunch",
    publishedAt: "2025-04-09T01:28:21.063382Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Technology",
  },
  {
    id: 12,
    title: "Cryptocurrency Prices See Unusual Spike",
    description:
      "Markets surged as investors reacted positively to new jobs data, improved trade balances, and increased consumer spending around the globe.",
    source: "Bloomberg",
    publishedAt: "2025-04-09T00:28:21.063388Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Finance",
  },
  {
    id: 13,
    title: "Medical Researchers Find New Cancer Biomarker",
    description:
      "Astronomers have picked up mysterious space signals, possibly from a new pulsar, igniting excitement in the astrophysics community.",
    source: "NASA News",
    publishedAt: "2025-04-08T23:28:21.063394Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Science",
  },
  {
    id: 14,
    title: "Green Initiatives Launched in Major Cities",
    description:
      "New studies show that oceanic plastic pollution has doubled over the past decade, threatening marine biodiversity and ecosystems worldwide.",
    source: "National Geographic",
    publishedAt: "2025-04-08T22:28:21.063400Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Environment",
  },
  {
    id: 15,
    title: "Fitness Apps See Record Downloads Worldwide",
    description:
      "Engineers develop solar panels that work during rain, expanding renewable energy reliability in regions with diverse weather conditions year-round.",
    source: "The Guardian",
    publishedAt: "2025-04-08T21:28:21.063408Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Health",
  },
  {
    id: 16,
    title: "Olympic Qualifiers Stir Global Sports Fever",
    description:
      "Global health leaders will meet to discuss vaccine equity, disease prevention, and funding strategies to tackle future pandemics.",
    source: "BBC News",
    publishedAt: "2025-04-08T20:28:21.063411Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Sports",
  },
  {
    id: 17,
    title: "Award Shows Face Backlash Over Lack of Diversity",
    description:
      "An intense football match ended in a dramatic draw, leaving fans exhilarated and reshaping the current league standings.",
    source: "ESPN",
    publishedAt: "2025-04-08T19:28:21.063415Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Entertainment",
  },
  {
    id: 18,
    title: "Lawmakers Debate Cybersecurity Legislation",
    description:
      "The international film festival showcased emerging indie talents, drawing huge audiences and critical acclaim for several debut films.",
    source: "Variety",
    publishedAt: "2025-04-08T18:28:21.063419Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Politics",
  },
  {
    id: 19,
    title: "AI-Powered Tutors Revolutionize Online Learning",
    description:
      "The government introduces tax reforms aimed at helping the middle class and streamlining the filing process for small businesses.",
    source: "The Hindu",
    publishedAt: "2025-04-08T17:28:21.063422Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Education",
  },
  {
    id: 20,
    title: "United Nations Urges Climate Action",
    description:
      "EdTech tools are transforming learning as students shift to online platforms offering personalized, engaging educational experiences.",
    source: "EdSurge",
    publishedAt: "2025-04-08T16:28:21.063426Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "World",
  },
  {
    id: 21,
    title: "New Smartphone Tech Unveiled at Expo",
    description:
      "Major companies team up to lead ethical AI development, emphasizing transparency and innovation for a smarter future across industries worldwide.",
    source: "TechCrunch",
    publishedAt: "2025-04-08T15:28:21.063429Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Technology",
  },
  {
    id: 22,
    title: "Global Inflation Slows in Major Economies",
    description:
      "Markets surged as investors reacted positively to new jobs data, improved trade balances, and increased consumer spending around the globe.",
    source: "Bloomberg",
    publishedAt: "2025-04-08T14:28:21.063433Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Finance",
  },
  {
    id: 23,
    title: "Mars Rover Sends Back Stunning Images",
    description:
      "Astronomers have picked up mysterious space signals, possibly from a new pulsar, igniting excitement in the astrophysics community.",
    source: "NASA News",
    publishedAt: "2025-04-08T13:28:21.063437Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Science",
  },
  {
    id: 24,
    title: "Whales Found in River Spark Environmental Concerns",
    description:
      "New studies show that oceanic plastic pollution has doubled over the past decade, threatening marine biodiversity and ecosystems worldwide.",
    source: "National Geographic",
    publishedAt: "2025-04-08T12:28:21.063440Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Environment",
  },
  {
    id: 25,
    title: "Surgeons Perform First 3D Printed Organ Transplant",
    description:
      "Engineers develop solar panels that work during rain, expanding renewable energy reliability in regions with diverse weather conditions year-round.",
    source: "The Guardian",
    publishedAt: "2025-04-08T11:28:21.063444Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Health",
  },
  {
    id: 26,
    title: "Tennis Championship Draws Global Audience",
    description:
      "Global health leaders will meet to discuss vaccine equity, disease prevention, and funding strategies to tackle future pandemics.",
    source: "BBC News",
    publishedAt: "2025-04-08T10:28:21.063448Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Sports",
  },
  {
    id: 27,
    title: "Streaming Platforms Compete With New Content",
    description:
      "An intense football match ended in a dramatic draw, leaving fans exhilarated and reshaping the current league standings.",
    source: "ESPN",
    publishedAt: "2025-04-08T09:28:21.063452Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Entertainment",
  },
  {
    id: 28,
    title: "Parliament Discusses Privacy Protection Laws",
    description:
      "The international film festival showcased emerging indie talents, drawing huge audiences and critical acclaim for several debut films.",
    source: "Variety",
    publishedAt: "2025-04-08T08:28:21.063456Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Politics",
  },
  {
    id: 29,
    title: "Virtual Classrooms Become the Norm in 2025",
    description:
      "The government introduces tax reforms aimed at helping the middle class and streamlining the filing process for small businesses.",
    source: "The Hindu",
    publishedAt: "2025-04-08T07:28:21.063460Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Education",
  },
  {
    id: 30,
    title: "International Peace Summit Begins in Geneva",
    description:
      "EdTech tools are transforming learning as students shift to online platforms offering personalized, engaging educational experiences.",
    source: "EdSurge",
    publishedAt: "2025-04-08T06:28:21.063463Z",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "World",
  },
];
