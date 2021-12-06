import React from "react";
import Head from "next/head";

export default function Resume() {
  return (
    <body className="print:bg-white print:min-h-screen subpixel-antialiased">
      <main className="font-firago flex flex-wrap px-3 py-3 bg-gray-400 md:px-20 lg:px-64 print:px-10 print:bg-white">
        <Name />
        <Education />
        <Contact />
        <Skills />
        <Projects />
        <Internship />
        <Achievements />
        <PositionsofInterest />
      </main>
    </body>
  );
}

// <!-- Name:Start -->
const Name = () => (
  <section className="bg-gray-200 p-4 flex items-center sm:flex-row border-b w-full print:bg-white print:border-none">
    <div className="initials-container mr-5 text-base leading-none text-white bg-gray-700 font-medium print:bg-black px-3 pt-3 pb-3">
      <div className="initial text-center pb-1">R</div>
      <div className="text-center initial">D</div>
    </div>
    <h1 className="mx-4 text-base font-medium">Rituparna Das</h1>
  </section>
);

// <!-- Name:End -->
// <!-- Education:Start -->
const Education = () => (
  <section className="bg-gray-200 p-4 lg:w-6/12 border-b lg:border-r w-full print:bg-white print:border-none">
    <h1 className="text-indigo-400 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-medium">
      Education
    </h1>
    <div className="p-1 my-2">
      <ul>
        <li className="font-medium">Tezpur Central University</li>
        <li className="font-normal text-gray-700">
          2017 - 2021 | Bachelor's Degree (Btech.) in Computer Science &
          Engineering{" "}
        </li>
      </ul>
      <ul>
        <li className="font-medium">CNB College</li>
        <li className="font-normal text-gray-700">
          2014 - 2016 | XII (Senior Secondary), Science (2016)
        </li>
      </ul>
    </div>
  </section>
);

// <!-- Education:End -->
// <!-- Contact:Start -->
const Contact = () => (
  <section className="bg-gray-200 p-4 border-b sm:border-r flex-grow lg:w-6/12 print:bg-white print:border-none print:p-1">
    <h1 className="text-indigo-400 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-medium print:hidden">
      Contact
    </h1>
    <div className="p-1 my-2 print:flex print:flex-row print:border-b">
      <ul className="print:flex print:flex-row">
        <li className="print:mx-2">Kaziranga, Assam, India</li>
        <li className="print:mx-2">
          <a href="mailto:ri2parna@outlook.com" className="hover:text-gray-600">
            ri2parna@outlook.com ↗
          </a>
        </li>
        <li className="print:mx-2">+91 8761980805</li>
        <li className="print:mx-2">
          <a
            id="linkd"
            href="https://rituparna.now.sh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600"
          >
            rituparna.now.sh ↗
          </a>
        </li>
      </ul>
    </div>
  </section>
);
// <!-- Contact:End -->
// <!-- Skills:Start -->
const Skills = () => (
  <section className="bg-gray-200 p-4 w-full print:w-full print:order-1 border-b print:bg-white print:border-none">
    <h1 className="text-indigo-400 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-medium">
      Skills
    </h1>
    <div className="p-1 my-1 leading-loose">
      <ol>
        <li className="font-normal text-gray-700">
          <span>Tools & Technologies: </span>
          <span className="bg-gray-500 print:bg-gray-100 bg-opacity-50 p-1 rounded-sm">
            Linux
          </span>
          <span className="bg-gray-500 print:bg-gray-100 bg-opacity-50 p-1 rounded-sm">
            Heroku
          </span>
          <span className="bg-gray-500 print:bg-gray-100 bg-opacity-50 p-1 rounded-sm">
            Docker
          </span>
        </li>
      </ol>
      <ol>
        <li className="font-normal text-gray-700">
          <span>Programming Languages: </span>
          <span className="bg-gray-500 print:bg-gray-100 bg-opacity-50 p-1 rounded-sm">
            Python
          </span>
          <span className="bg-gray-500 print:bg-gray-100 bg-opacity-50 p-1 rounded-sm">
            C++
          </span>
          <span className="bg-gray-500 print:bg-gray-100 bg-opacity-50 p-1 rounded-sm">
            C
          </span>
          <span className="bg-gray-500 print:bg-gray-100 bg-opacity-50 p-1 rounded-sm">
            JavaScript
          </span>
        </li>
      </ol>
      <ol>
        <li className="font-normal text-gray-700">
          <span>Web Development: </span>
          <span className="bg-gray-500 print:bg-gray-100 bg-opacity-50 p-1 rounded-sm">
            HTML5
          </span>
          <span className="bg-gray-500 print:bg-gray-100 bg-opacity-50 p-1 rounded-sm">
            CSS3
          </span>
          <span className="bg-gray-500 print:bg-gray-100 bg-opacity-50 p-1 rounded-sm">
            Flask
          </span>
          <span className="bg-gray-500 print:bg-gray-100 bg-opacity-50 p-1 rounded-sm">
            JavaScript
          </span>
          <span className="bg-gray-500 print:bg-gray-100 bg-opacity-50 p-1 rounded-sm">
            ExpressJs
          </span>
          <span className="bg-gray-500 print:bg-gray-100 bg-opacity-50 p-1 rounded-sm">
            Nodejs
          </span>
          <span className="bg-gray-500 print:bg-gray-100 bg-opacity-50 p-1 rounded-sm">
            React Native
          </span>
        </li>
      </ol>
      <ol>
        <li className="font-normal text-gray-700">
          <span>Databases: </span>
          <span className="bg-gray-500 print:bg-gray-100 bg-opacity-50 p-1 rounded-sm">
            MySQL
          </span>
          <span className="bg-gray-500 print:bg-gray-100 bg-opacity-50 p-1 rounded-sm">
            MongoDB
          </span>
        </li>
      </ol>
    </div>
  </section>
);
// <!-- Skills:End -->
// <!-- Projects: Start -->
const Projects = () => (
  <section className="bg-gray-200 p-4 border-b self-stretch w-full print:bg-white print:border-none">
    <h1 className="text-indigo-400 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-medium">
      Projects
    </h1>
    <div className="p-1 my-2">
      <div className="font-semibold text-gray-900 flex justify-between">
        <a href="https://github.com/Ri2parna/Deuka" className="hover:underline">
          Deuka-The blogging platform↗
        </a>
        <p className="font-medium text-blue-900 italic">React Native</p>
      </div>
      <div className="p-1 my-2">
        <ol className="font-normal text-gray-700">
          <li>Course Project • Oct 2020 - Ongoing</li>
          <li>
            A blogging platform built with not intrusiveness and usability in
            mind
          </li>
          <li>Languages used: Expo, React Native and Express.Js</li>
        </ol>
      </div>
      <div className="font-semibold text-gray-900 flex justify-between">
        <a href="https://xomidhanassam.in" className="hover:underline">
          RaktaSanjeevani↗
        </a>
        <p className="font-medium text-blue-900 italic">React, MongoDB</p>
      </div>
      <div className="p-1 my-2">
        <ol className="font-normal text-gray-700">
          <li>Course Project • Oct 2020 - Ongoing</li>
          <li>
            A group project to develop a platform for hospitals to collaborate
            together to make the process of blood donation easier, quicker and
            efficient for the donors.
          </li>
          <li>
            The Platform could also enable the hospitals to share vital blood
            related information with each other.
          </li>
          <li>
            Initially developed for request and donation of plasma by covid-19
            infected patients
          </li>
          <li>Languages used: React, Postgres, Node.js, Express.js</li>
        </ol>
      </div>
      <div className="font-semibold text-gray-900 flex justify-between">
        <a href="https://git.io/JffYN" className="hover:underline">
          Protein Sequencing↗
        </a>
        <p className="font-medium text-blue-900 italic">Python,MongoDB</p>
      </div>
      <div className="p-1 my-2">
        <ol className="font-normal text-gray-700">
          <li>Course Project • Feb 2020 - June 2020</li>
          <li>
            Terminal based application for conversion of codon sequences to
            corresponding amino acid sequences
          </li>
          <li>
            Stored the data into a database and plotted the frequency and skew
            of codon sequence using Matplotlib
          </li>
        </ol>
      </div>
      <div className="font-semibold text-gray-900 flex justify-between">
        <a
          href="https://git.io/JffYD"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          TelegramBot to download instagram pictures and Youtube Videos↗
        </a>
        <p className="font-medium text-blue-900 italic">Python,API,Flask</p>
      </div>
      <div className="p-1 my-2">
        <ol>
          <li className="font-normal text-gray-700">
            Hobby Project • Feb, 2020
          </li>
          <li className="font-normal text-gray-700"></li>
          <li className="font-normal text-gray-700">
            Built a python Based bot to download YouTube videos and send it to
            the user via telegram.
          </li>
          <li className="font-normal text-gray-700">
            Deployed on a web server to be active at any given time.
          </li>
        </ol>
      </div>
      <div className="font-semibold text-gray-900 flex justify-between">
        <a href="https://git.io/Jfms4" className="hover:underline">
          Student Registration System↗
        </a>
        <p className="font-medium text-blue-900 italic">Php, MySQL</p>
      </div>
      <div className="p-1 my-2">
        <ol>
          <li className="font-normal text-gray-700">
            Database Course Project • 2019
          </li>
          <li className="font-normal text-gray-700">
            A Registration system for the students to register for their courses
            in the semester online via a web platform written in PHP
          </li>
          <li className="font-normal text-gray-700">
            Added an admin panel to check all the user registrations.
          </li>
          <li className="font-normal text-gray-700">
            Wrote SQL queries to view, edit, remove and store the available data
            to a MySQL database.
          </li>
          <li className="font-normal text-gray-700">
            Languages used: PHP, MySQL, HTML5, CSS3, JavaScript
          </li>
        </ol>
      </div>
      <div></div>
    </div>
  </section>
);
// <!-- Projects:End -->
// <!-- Internship:Start -->
const Internship = () => (
  <section className="bg-gray-200 p-4 lg:w-full print:w-full border-b lg:border-r flex-grow print:bg-white print:border-none">
    <h1 className="text-indigo-400 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-medium">
      Relevant Experience
    </h1>
    <div className="font-semibold text-gray-900 flex justify-between">
      <p>Research Intern, IIIT-GUWAHATI</p>
      <p className="font-medium text-blue-900 italic">Proverif</p>
    </div>
    <div className="p-1 my-2">
      <ol>
        <li className="font-normal text-gray-700">
          Summer Intern • Guwahati, Assam • May 2020 - Aug 2020
        </li>
        <li className="font-normal text-gray-700">
          Information security related internship on learning about
          cryptographic protocols, their implementation, verification and study
          their applications in various use cases.
        </li>
        <li className="font-normal text-gray-700">
          Worked on a model to reduce privacy risks in a emergency response
          scheduling system protocol
        </li>
      </ol>
    </div>
  </section>
);
// <!-- Internship:End -->
// <!-- Achievements:Start -->
const Achievements = () => (
  <section className="bg-gray-200 p-4 lg:w-6/12 sm:border-r w-full border-b print:bg-white print:border-none">
    <h1 className="text-indigo-400 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-medium">
      Achievements
    </h1>
    <div className="p-1 my-2">
      <ol className="font-normal text-gray-700">
        <li>
          One of the thirty finalist teams, Startup India Assam Yatra (2019)
        </li>
        <li>Bronze, University Writing Competition (2019)</li>
      </ol>
    </div>
  </section>
);
// <!-- Achievements:End -->
// <!-- Positions of Interest:Start -->
const PositionsofInterest = () => (
  <section className="bg-gray-200 p-4 lg:w-6/12 self-stretch w-full print:bg-white">
    <h1 className="text-indigo-400 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-medium">
      Positions of Interest
    </h1>
    <div className="p-1 my-2">
      <ol className="font-normal text-gray-800">
        <li>
          Placement Co-Coordinator for the Computer Science Department for the
          2021 Batch
        </li>
        <li>
          Webmaster for the Entrepreneurship Cell Website of the University
        </li>
        <li>Core Member of CRY - Tezpur University (NGO) for 2018</li>
      </ol>
    </div>
  </section>
);
// <!-- Positions of Interest:End -->

// <!-- CourseWork:Start -->
// <!-- <section className="bg-gray-200 p-4 lg:w-6/12 print:w-full border-b lg:border-r flex-grow print:bg-white print:border-none">
//     <h1 className="text-indigo-400 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-medium">Course Work</h1>
//     <div className="p-1 my-2">
//         <ol>
//             <li className="font-medium print:font-normal">Introduction to Internet of Things</li>
//             <li className="font-normal text-gray-700"> ● Ranked among top 5% in a className of 7675 Students</li>
//             <li className="font-medium print:font-normal">DataStructures & Algorithms in Python</li>
//         </ol>
//     </div>
// </section> -->
// <!-- CourseWork:End -->

// .font-firago {
//     font-family: FiraGO, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
// }

// @media print {
//     main {
//         flex-direction: column;
//     }
//     main :nth-child(1) {
//         order: 0;
//     }
//     main :nth-child(2) {
//         order: 3;
//     }
//     main :nth-child(3) {
//         order: 1;
//     }
//     main :nth-child(4) {
//         order: 4;
//     }
//     main :nth-child(5) {
//         order: 2;
//     }
//     main :nth-child(6) {
//         order: 4;
//     }
//     main :nth-child(7) {
//         order: 4;
//     }
//     main :nth-child(8) {
//         order: 4;
//     }
// }
