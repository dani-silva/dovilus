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
            facebook,
            instagram,
            pinterest,
            twitter
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

      <Footer metaData={data.site.siteMetadata} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
