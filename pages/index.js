import Head from "next/head";
import { useState } from "react";
import Description from "../components/Description";
import Header from "../components/Header";
import ModeSwitch from "../components/ModeSwitch";
import Speakers from "../components/Speakers";
import Tags from "../components/Tags";

import data from "../data.json";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col items-center justify-center min-h-screen pb-2 bg-gray-100 dark:bg-gray-900">
        <Head>
          <title>We are developers 2021</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <ModeSwitch darkMode={darkMode} switcher={setDarkMode} />

        <main className="flex items-start w-full justify-center text-center flex-1 px-10 flex-wrap">
          {data.success.data.agenda.map((lecture) => {
            const tags = lecture.agendaInfo.tags.split(",");
            return (
              <div
                className={
                  "mb-2 rounded-lg text-left container shadow xl:w-5/12 xl:mr-4 xl:mb-10 bg-white dark:bg-gray-700"
                }
              >
                <div
                  className={
                    "p-4 bg-cyan-700 rounded-lg rounded-b-none relative border-white border-4 dark:bg-gray-800 dark:border-gray-700"
                  }
                >
                  <h2 className={"text-xl text-white font-bold"}>
                    {lecture.title}
                  </h2>
                  {lecture.agendaInfo.track_name === "Workshops" && (
                    <div className="absolute right-0 bottom-0 p-2 py-1 rounded-tl-lg bg-pink-700 text-white font-medium">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline h-4 w-4 mr-2 mb-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                      Workshop
                    </div>
                  )}
                  <Tags tags={tags} />
                </div>
                <div className="p-4 pt-0">
                  <Description description={lecture.agendaInfo.description} />
                  <Speakers speakers={lecture.speakers} />
                </div>
                <a
                  href={lecture.agendaInfo.stream_link}
                  target="_blank"
                  className="block m-2 p-4 text-center rounded-lg bg-amber-600 text-white hover:bg-amber-500 dark:bg-gray-400 dark:text-gray-800 dark:hover:bg-gray-300"
                >
                  Watch
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline h-4 w-4 ml-2 mb-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            );
          })}
        </main>

        <footer className="flex flex-col items-center justify-center w-full h-24 border-t">
          <div className="flex">
            <span className="text-xs">Made for</span>
            <div className="flex flex-col items-center ml-2">
              <div className="w-2 h-2 bg-amber-500 mb-0.5" />
              <div className="flex">
                <div className="w-2 h-2 bg-lime-400 mr-0.5" />
                <div className="w-2 h-2 bg-sky-500" />
              </div>
            </div>
          </div>
          <span>😉</span>
        </footer>
      </div>
    </div>
  );
}
