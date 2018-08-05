import App, { Container } from "next/app"
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
      <Container>
        <PageHeader currentPage={router.route} />
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
