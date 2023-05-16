const MyApp = ({ Component, pageProps }) => (
  // The height of the Main block is fixed with 4k resolution, excluding the height of the Header and Footer
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

      @media screen and ( 320px <= width <= 768px ) {
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
    ` } </style>
  </>
)

export default MyApp