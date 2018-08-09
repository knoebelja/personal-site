import Document, { Head, Main, NextScript } from "next/document"
import { ServerStyleSheet, injectGlobal } from "styled-components"

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <meta
            name="viewport"
            content="initial-scale=1, width=device-width"
            key="viewport"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Kirang+Haerang|Roboto"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

injectGlobal`
  body {
    max-width: 1280px;
    width: 100vw;
    margin: 0 auto;
    height: 100vh;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`

export default MyDocument
