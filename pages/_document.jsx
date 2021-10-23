import Document, { Html, Head, Main, NextScript } from "next/document";

class Custom extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="text-white bg-gray-800 dark:bg-white dark:text-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Custom;
