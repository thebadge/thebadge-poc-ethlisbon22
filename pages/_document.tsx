import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render = () => {
    return (
      <Html lang="en">
        <Head>
          <link href="/favicon.ico?v=1.0" rel="icon" />
          <meta content="#333" name="msapplication-TileColor" />
          <meta content="#333" name="theme-color"></meta>
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link crossOrigin="crossorigin" href="https://fonts.gstatic.com" rel="preconnect" />
          <link
            href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Nunito:wght@800;900&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modals" />
        </body>
      </Html>
    )
  }
}
