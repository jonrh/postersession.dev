import React, { useState } from "react";
import Head from 'next/head';

import { getPostersByTheme, ALL_THEMES } from "../data";
import ThemePicker from "../components/ThemePicker";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";

const Link = ({ children, href}) => {
  return <a href={href} className="text-psOrange hover:text-psBlack">{children}</a>;
};

/** Displays posters in a grid that's appropriate for the device with */
const PosterGallery = ({ posters }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 row-gap-4 md:mx-10 mb-20">
      { posters.map(poster => <Poster poster={poster} key={poster.id} />) }
    </div>
  );
};

/** A poster card with a poster thumbnail, presenter name and poster title. */
const Poster = ({ poster }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <PosterThumbnail poster={poster} />
      <div className="m-5 mt-0">
        <p className="font-bold">{poster.presenter}</p>
        <p className="">{poster.name}</p>
        <PosterLinks poster={poster} />
      </div>
    </div>
  );
};

/** An image that links to the PDF of a poster. Placeholder img & PDF if poster PDF is missing. */
const PosterThumbnail = ({ poster }) => {
  const pdfHref = poster.missing_pdf ? `posters/0.pdf` : `posters/${poster.id}.pdf`;
  const imgHref = poster.missing_pdf ? `posters/0.png` : `posters/${poster.id}.png`;

  return (
    <a href={pdfHref} className="text-center text-psOrange hover:text-psBlack">
      <img src={imgHref} className="rounded p-5 mx-auto grow" />
    </a>
  );
}

/** Link in a new tab to audio file if present for a poster */
const PosterAudioLink = ({ poster }) => {
  if (!poster.audio_file) return null;

  return (
    <>
      <br />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`audio/${poster.audio_file}`}
        className="text-psOrange hover:text-psBlack"
      >
        🔊 Listen to audio
      </a>
    </>
  );
};

/** Text link to poster PDF and audio introduction file if present */
const PosterLinks = ({ poster }) => {
  const pdfHref = poster.missing_pdf ? `posters/0.pdf` : `posters/${poster.id}.pdf`;

  return (
    <p className="mt-3">
      <Link href={pdfHref}>📜 View poster</Link>
      <PosterAudioLink poster={poster} />
    </p>
  );
};

/** The view that authenticated users see */
const Authenticated = () => {
  const [selectedTheme, setSelectedTheme] = useState(ALL_THEMES);

  return (
    <main>
      <ThemePicker selectedTheme={selectedTheme} onThemeSelected={setSelectedTheme} />
      <PosterGallery posters={getPostersByTheme(selectedTheme)} />
    </main>
  );
};

/** Main entry point to the front page */
const Home = props => {
  return (
    <>
      <Head>
        <title>Poster Session</title>

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Head>

      <header className="">
        <img src="images/poster_session_logo_646.png" className="w-48 mx-auto mt-5" />
        <h1 className="text-4xl font-bold text-center">Poster Session</h1>
      </header>

      <div className="w-10/12 md:w-8/12 lg:w-6/12 m-20 mt-10 mx-auto">
        <p className="text-center mb-10">
          <ul>
            <li>👩‍💻 Simple poster session websites for conferences</li>
            <li>🔗 Easy links to poster PDFs and optional audio</li>
            <li>🗄 Filter posters by themes or categories</li>
            <li>⚡️ Responsive, lightweight & secure</li>
            <li>🔒 Optional password protection</li>
            <li>💎 List of conference sponsors</li>
            <li>💶 Price: 200 EUR per event</li>
            <li></li>
            <li>💌 <a href="mailto:hi@tersession.dev" className="underline">hi@postersession.dev</a></li>
          </ul>
        </p>
      </div>

      <Authenticated />
      <Sponsors />
      <Footer />
    </>
  );
}

export default Home;
