import React from "react";

import { themes } from "../data";

/** List of all available themes as a <a> link styled as a button */
const Themes = ({ selectedTheme, themes, onThemeSelected }) => {
  const selectedStyle = "border border-psBlack rounded bg-psBlack text-white py-2 px-4 m-1";
  const normalStyle = "border border-white rounded hover:border-gray-200 text-psOrange hover:bg-psOrange hover:text-white py-2 px-4 m-1";

  return themes.map(theme => {
    const style = theme === selectedTheme ? selectedStyle : normalStyle;

    return <a className={style} key={theme} onClick={() => onThemeSelected(theme)}>{theme}</a>;
  });
};

const ThemePicker = ({ selectedTheme, onThemeSelected }) => {
  return (
    <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:mx-10 text-center">
      <Themes themes={themes} selectedTheme={selectedTheme} onThemeSelected={onThemeSelected} />
    </nav>
  );
};

export default ThemePicker;