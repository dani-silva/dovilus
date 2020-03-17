/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

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
            facebook
          }
        }
      }
    }
  `)

  // console.log(data.site.siteMetadata)
  return (
    <>
      {afterHeader}
      <Header siteTitle={data.site.siteMetadata.title} />
      
      <main className="section">{children}</main>

      <Footer metaData={data.site.siteMetadata} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
