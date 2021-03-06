import * as React from "react"
import SEO from '../components/Seo';
import { Link } from "gatsby"
import '../../styles/index.scss';

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <SEO />
      <title>Not found</title>
      <h1 style={headingStyles}>Oh no!</h1>
      <p style={paragraphStyles}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
      <div className="four-oh-four"></div>
    </main>
  )
}

export default NotFoundPage;
