import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, afterHeader }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          description,
          socialMedia {
            linkedin,
            facebook,
            instagram,
            behance,
            twitter
          }
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 30, height: 50, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  // console.log(location)

  return (
    <>
      {afterHeader}
      <Header siteTitle={data.site.siteMetadata.title} />
      
      <main>{children}</main>

      <Footer logo={data.logo} metaData={data.site.siteMetadata} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
