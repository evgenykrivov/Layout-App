const MyApp = ({ Component, pageProps }) => (
  <>
    <Component { ...pageProps } />
    <style jsx global> { `
      * {
        margin: 0;
        padding: 0;
        box-sizing: content-box;
      }

      #__next {
        display: flex;
        flex-direction: column;
        height: 100vh;
        max-width: 1280px;
        margin: 0 auto;
      }

      header {
        min-height: 50px;
        background-color: lightgray;
      }

      main {
        flex-grow: 1;
      }

      footer {
        min-height: 300px;
        background-color: lightgray;
      }
      
    ` } </style>
  </>
)

export default MyApp