import App, { Container } from "next/app"
import { ThemeProvider } from "styled-components"

import theme from "../utils/theme"
import PageHeader from "../components/PageHeader"

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, router, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <PageHeader currentPage={router.route} />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    )
  }
}

export default MyApp
