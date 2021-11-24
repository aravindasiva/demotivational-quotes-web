import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" prefix="og: http://ogp.me/ns#">
        <Head>
          <meta
            property="og:title"
            content="Negative Space"
          />
          <meta
            name="image"
            property="og:image"
            content="https://negative-space.netlify.app/negativespace.PNG"
          />
          <meta
            name="author"
            content="Aravinda Siva"
          />
          <meta
            property="og:description"
            content="The web app consumes demotivation-qoutes-api (Which I created with GraphQL 😉)."
          />
          <meta
            property="og:url"
            content="https://negative-space.netlify.app"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument