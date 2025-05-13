export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
  STORAGE_BASE_URL: "https://sg.storage.bunnycdn.com/snapcast",
  CDN_URL: "https://snapcast.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  TRANSCRIPT_URL: "https://vz-47a08e64-84d.b-cdn.net",
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed",
];

export const visibilities: Visibility[] = ["public", "private"];

export const ICONS = {
  record: "/assets/icons/record.svg",
  close: "/assets/icons/close.svg",
  upload: "/assets/icons/upload.svg",
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};

export const dummyCards = [
  {
    id: "1",
    title: "husen", 
    thumbnail: "/assets/samples/thumbnail (1).png", 
    createdAt: new Date("2020-02-10 16:34:34"),
    userImg: "/assets/images/dummy.jpg",
    username: "husen",
    views: 10,
    visibility: "public", 
    duration: 156,
  },
  {
    id: "2",
    title: "sunset", 
    thumbnail: "/assets/samples/thumbnail (2).png", 
    createdAt: new Date("2021-05-15 10:20:00"),
    userImg: "/assets/images/alex.png",
    username: "alex",
    views: 45,
    visibility: "private", 
    duration: 200,
  },
  {
    id: "3",
    title: "mountains", 
    thumbnail: "/assets/samples/thumbnail (3).png", 
    createdAt: new Date("2022-03-22 14:50:00"),
    userImg: "/assets/images/sarah.png",
    username: "sarah",
    views: 120,
    visibility: "public", 
    duration: 300,
  },
  {
    id: "4",
    title: "cityscape", 
    thumbnail: "/assets/samples/thumbnail (4).png", 
    createdAt: new Date("2023-07-10 08:15:00"),
    userImg: "/assets/images/michael.png",
    username: "michael",
    views: 75,
    visibility: "public", 
    duration: 180,
  },
  {
    id: "5",
    title: "ocean waves", 
    thumbnail: "/assets/samples/thumbnail (5).png", 
    createdAt: new Date("2024-01-05 12:00:00"),
    userImg: "/assets/images/emily.png",
    username: "emily",
    views: 90,
    visibility: "private", 
    duration: 240,
  },
  {
    id: "6",
    title: "forest trail", 
    thumbnail: "/assets/samples/thumbnail (6).png", 
    createdAt: new Date("2024-11-20 16:45:00"),
    userImg: "/assets/images/jason.png",
    username: "jason",
    views: 60,
    visibility: "public", 
    duration: 210,
  },
  {
    id: "7",
    title: "night sky", 
    thumbnail: "/assets/samples/thumbnail (7).png", 
    createdAt: new Date("2025-02-14 20:30:00"),
    userImg: "/assets/images/jessica.png",
    username: "jessica",
    views: 150,
    visibility: "public", 
    duration: 270,
  },
  {
    id: "8",
    title: "desert", 
    thumbnail: "/assets/samples/thumbnail (8).png", 
    createdAt: new Date("2025-04-01 09:00:00"),
    userImg: "/assets/images/lisa.png",
    username: "lisa",
    views: 30,
    visibility: "private", 
    duration: 190,
  },
];