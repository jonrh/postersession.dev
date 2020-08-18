/** The value of the key used to indicate we want to show posters from all themes */
export const ALL_THEMES = "💯 All Themes";

export const themes = [
  // A hack to include the "All Themes" as a filter button
  ALL_THEMES,

  // Poster themes
  "🎉 Theme A",
  "💎 Theme B",
  "🏡 Theme C",

  // Technically not themes but convenient to filter by a Q&A session
  // "🙋‍♀️ Poster Q&A 1",
  // "🙋‍♀ ️Poster Q&A 2",
  // "🙋‍♀️ Poster Q&A 3",
] as const;

type Theme = typeof themes[number];

interface Poster {
  id: number;

  // The name of the person presenting the poster. Most often first author. If there are two or
  // more people presenting the poster the value could be "Presenter 1 & Presenter 2"
  presenter: string;

  // The title of the poster. Ideally it should not end with a period.
  name: string;

  // A poster can belong to a theme and a Poster Q&A session
  themes: Theme[];

  // Presenters can if they want submit an audio recording where they summarize their poster in
  // their own way. The value is the name of the audio file. Examples: "1.mp3", "2.m4a", etc.
  audio_file?: string;

  // If true a placeholder thumbnail and PDF is used. Useful while data is being populated. When we
  // have the PDF file (which is the normal case) this property should not be used (just skip it).
  missing_pdf?: boolean;
}

/** The posters that are displayed on the website */
export const posters: Poster[] = [
  {
    id: 1,
    missing_pdf: true,
    presenter: "Alan Turing",
    name: "Poster name 1",
    themes: ["🎉 Theme A"],
    audio_file: "0.m4a",
  },
  {
    id: 2,
    missing_pdf: true,
    presenter: "Lilla Rogahn",
    name: "Poster name 2",
    themes: ["💎 Theme B"],
  },
  {
    id: 3,
    missing_pdf: true,
    presenter: "Jamey Schamberger",
    name: "Poster name 3",
    themes: ["🏡 Theme C"],
  },
  {
    id: 4,
    missing_pdf: true,
    presenter: "Ramona Batz & Rosalia Nienow",
    name: "Poster name 4",
    themes: ["🎉 Theme A"],
  },
  {
    id: 5,
    missing_pdf: true,
    presenter: "Makenna Ankunding",
    name: "Poster name 5",
    themes: ["💎 Theme B"],
    audio_file: "0.m4a",
  },
  {
    id: 6,
    missing_pdf: true,
    presenter: "Afton Bernhard",
    name: "Poster name 6",
    themes: ["🏡 Theme C"],
  },
  {
    id: 7,
    missing_pdf: true,
    presenter: "Esta Kohler",
    name: "Poster name 7",
    themes: ["🎉 Theme A"],
  },
  {
    id: 8,
    missing_pdf: true,
    presenter: "Clara Altenwerth",
    name: "Poster name 8",
    themes: ["💎 Theme B"],
  },
  {
    id: 9,
    missing_pdf: true,
    presenter: "Maximillian Koepp",
    name: "Poster name 9",
    themes: ["🏡 Theme C"],
    audio_file: "0.m4a",
  },
  {
    id: 10,
    missing_pdf: true,
    presenter: "Jerald Thompson & Caitlyn Ryan",
    name: "Poster name 10",
    themes: ["🎉 Theme A"],
  },
  {
    id: 11,
    missing_pdf: true,
    presenter: "Anissa Strosin",
    name: "Poster name 11",
    themes: ["💎 Theme B"],
  },
  {
    id: 12,
    missing_pdf: true,
    presenter: "Johann Smith",
    name: "Poster name 12",
    themes: ["🎉 Theme A"],
  },
];

/** Returns the poster array filtered by theme. Returns all posters if all themes is selected  */
export const getPostersByTheme = theme => {
  if (theme === ALL_THEMES) {
    return posters;
  } else {
    return posters.filter(poster => poster.themes.includes(theme));
  }
}