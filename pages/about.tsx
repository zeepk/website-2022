import Dropdown from "components/Dropdown";
import RHProfile from "components/RHProfile";
import { useState } from "react";

export const links = [
  {
    to: "https://www.linkedin.com/in/railly-hugo",
    external: true,
    text: "LinkedIn",
  },
  { to: "https://www.github.com/Railly", external: true, text: "Github" },
  { to: "https://www.twitter.com/RaillyHugo", external: true, text: "Twitter" },
];

const About = () => {
  return (
    <section className="p-4 rounded-lg backdrop-blur-sm bg-white/30 dark:bg-[#141318]">
      <header className="flex w-full gap-6">
        <div>
          <div className="flex items-center w-full gap-4 mb-2">
            <div className="flex flex-col items-center gap-3">
              <RHProfile size={40} />
            </div>
            <h1 className="text-lg font-bold">Railly Hugo</h1>
            <Dropdown options={links} />
          </div>
          <p className="text-sm text-black/70 dark:text-white/70">
            <b>Frontend Developer </b>
            and student of <b>Software Engineering </b>
            at Faculty of Systems Engineering and Informatics of San Marcos
            University in Lima, Peru. Planning to study a MS in Computer Science
            in the future.
          </p>
        </div>
      </header>
      <main>
        <div className="flex items-center justify-between w-full mt-4 mb-6">
          <h1 className="text-xl font-bold">Work Experience</h1>
          <a
            href="/pdf/RH-CV-2022.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center h-full px-4 py-2 text-sm font-medium transition-colors bg-white border border-gray-200 rounded-lg text-zinc-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-cyan-700 dark:bg-gray-800 dark:text-zinc-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                clipRule="evenodd"
              ></path>
            </svg>{" "}
            Download CV
          </a>
        </div>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full bg-cyan-100 -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-cyan-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-cyan-600 dark:text-cyan-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-zinc-900 dark:text-white">
              Mid Frontend Developer{" "}
              <span className="bg-cyan-100 shadow-lg shadow-cyan-400/20 text-cyan-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-cyan-200 dark:text-cyan-800 ml-3">
                Latest
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-zinc-500 dark:text-zinc-500">
              January 2022 - Present
            </time>
            <ul className="mb-4 text-base font-normal text-zinc-800 dark:text-zinc-400">
              <li className="mb-2 ml-6 list-disc">
                Design and develop medium to large size features from scratch
                using React, TypeScript, Styled Components, and Redux.
              </li>
              <li className="mb-2 ml-6 list-disc">
                Challenge the development workflow, which involved project
                documentation, testing, commit messages, PR structure, new
                libraries, etc.
              </li>
              <li className="mb-2 ml-6 list-disc">
                Seek continuous improvement of frontend micro-interactions and
                overall UX.
              </li>
              <li className="mb-2 ml-6 list-disc">
                Support other team members by attending to their technical
                questions and sharing my viewpoints when needed
              </li>
            </ul>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full bg-cyan-100 -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-cyan-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-cyan-600 dark:text-cyan-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-zinc-900 dark:text-white">
              Jr. Frontend Developer
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-zinc-500 dark:text-zinc-500">
              June 2021 - December 2021
            </time>
            <p className="text-base font-normal text-zinc-800 dark:text-zinc-400">
              <li className="mb-2 ml-6 list-disc">
                Design the UX/UI of the entire application with Figma (+30
                screens), while interviewing real users.
              </li>
              <li className="mb-2 ml-6 list-disc">
                Develop an educational management system with 7 modules
                (administrator, professor, reports, supervisor, academic
                management, enrollment), using Next.js, TailwindCSS, and
                JavaScript.
              </li>

              <li className="mb-2 ml-6 list-disc">
                Deliver daily features based on continuous feedback received
                from the product owner.
              </li>
            </p>
          </li>
        </ol>
      </main>
    </section>
  );
};

export default About;
