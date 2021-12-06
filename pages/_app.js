// page/_app.js
import "tailwindcss/tailwind.css";
import { GlobalStyles } from "twin.macro";
import Head from "next/head";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta
        name="description"
        content="A Front-End Developer looking for opportunities"
      />
      <meta name="keywords" content="resume,cv,Rituparna Das" />
      <meta name="author" content="Rituparna Das" />
      <meta name="robots" content="noindex" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Rituparna - Resume</title>
    </Head>
    <div>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  </>
);

export default App;
