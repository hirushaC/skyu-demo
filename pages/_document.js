import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import config from "@config/config.json";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const { favicon } = config.site; // Assuming you have config defined

    return (
      <Html lang="en">
        <Head>
          {/* Additional head elements */}
          <link rel="shortcut icon" href={favicon} />
          <meta name="description" content="skyu" />
          <meta name="keywords" content="skyu, cloud, computing, cloud computing, business" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="#fff"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="#000"
          />
          {/* Styles from styled-components */}
          {this.props.styles}
        </Head>
        <body>
        <script>0</script>
          <Main />
          {/* <TwSizeIndicator /> */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
