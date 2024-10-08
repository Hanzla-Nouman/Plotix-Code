export const languageOptions = [
  "English",
  "Spanish",
  "French",
  "German",
  "Chinese",
  "Japanese",
  "Korean",
  "Arabic",
  "Russian",
  "Italian",
  "Portuguese",
  "Dutch",
  "Swedish",
  "Turkish",
  "Hindi",
  "Bengali",
  "Urdu",
  "Persian",
  "Swahili",
  "Vietnamese",
  "Indonesian",
  "Malay",
  "Thai",
  "Greek",
  "Hebrew",
  "Czech",
  "Polish",
  "Romanian",
  "Hungarian",
  "Finnish",
  "Danish",
  "Norwegian",
  "Icelandic",
  "Slovak",
  "Punjabi",
  "Slovenian",
  "Croatian",
  "Bulgarian",
  "Serbian",
  "Macedonian",
  "Albanian",
  "Latvian",
  "Lithuanian",
  "Estonian",
  "Georgian",
  "Armenian",
  "Azerbaijani",
  "Kazakh",
  "Uzbek",
  "Yoruba",
].map((lang) => ({
  label: lang,
  value: lang,
}));

export const location = [
  "UK",
  "Australia",
  "Germany",
  "Spain",
  "USA",
  "Emirates",
].map((lang) => ({
  label: lang,
  value: lang,
}));

export const focusAreas = [
  "Transition",
  "Leadership",
  "Productivity",
  "Empowerment"
].map((lang) => ({
  label: lang,
  value: lang,
}));

export enum CoachCategories {
  Comics = "Comics",
  Manga = "Manga",
}

export const pinnedOptions = [
  "Achievement",
  "Publication",
  "Contribution",
  "Milestone",
  "Media Feature",
] as const;

export const freeSessionDurationOptions = ["15m", "30m"] as const;

export const COACH_CATEGORIES = [
  {
    label: "Comics",
    value: "comics" as const,
    featured: [
      {
        name: "Editor picks",
        href: "#",
        imageSrc: "/nav/ui-kits/mixed.jpg",
      },
      {
        name: "New Arrivals",
        href: "#",
        imageSrc: "/nav/ui-kits/blue.jpg",
      },
      {
        name: "Bestsellers",
        href: "#",
        imageSrc: "/nav/ui-kits/purple.jpg",
      },
    ],
  },
  {
    label: "Manga",
    value: "manga" as const,
    featured: [
      {
        name: "Favorite icon picts",
        href: "#",
        imageSrc: "/nav/icons/picks.jpg",
      },
      {
        name: "New Arrivals",
        href: "#",
        imageSrc: "/nav/icons/new.jpg",
      },
      {
        name: "Best selling Training Plans",
        href: "#",
        imageSrc: "/nav/icons/bestsellers.jpg",
      },
    ],
  },
];
