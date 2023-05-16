import Head from "next/head"
import Header from "../Header"
import Main from "../Main"
import Footer from "../Footer"

const MainLayout = ({ children }) => (<>
  <Head>
    <meta charSet="UTF-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

    <title>App Next.js</title>

    <meta name="description" content="Next project"></meta>
    <meta name="keywords" content="html, css, javascript< Next, NextJS"></meta>
    <meta name="author" content="Evgeny Tryzo"></meta>

    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
  </Head>

  <Header/>
  <Main>
    { children }
  </Main>
  <Footer/>
</>)

export default MainLayout