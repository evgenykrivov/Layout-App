const MyApp = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <style jsx global> {`
      * {
        margin: 0;
        padding: 0;
      }

      #__next {
        display: flex;
        flex-direction: column;
        height: 100vh;
        min-width: 100px;
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

      @media screen and (max-width: 768px) {
        footer {
          background-color: gray;
        }

        header {
          background-color: gray;
        }

        main {
          background-color: lightgray;
        }
      }
    `} </style>
  </>
)

export default MyApp