import React from "react"
import { Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import Img from 'gatsby-image'

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo-2.png" }) {
        childImageSharp {
          fixed(width: 31, height: 51, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const [open, setOpen] =  React.useState(false)

  console.log("nav status", open)

  return(
    <header className="bg-white sticky-top border-bottom">
      <div className="container d-flex align-items-center justify-content-between">
        <Link className="d-flex align-items-center brand" to="/">
          <Img fixed={data.file.childImageSharp.fixed} className="mr-2" alt="" />
        </Link>
        <nav className={`nav-responsive d-flex flex-row align-items-center ml-auto d-md-block ${open ? "d-sm-block" : "d-sm-none"}`}>
          <button className="btn btn-light rounded ml-auto m-2 d-md-none d-sm-block" onClick={() => setOpen(false)}><i className="mdi mdi-window-close"> </i></button> 
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link py-4" to="/">Web <i className="mdi mdi-chevron-down"> </i></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link py-4" to="/">Branding</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link py-4" to="/">Marketing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link py-4" to="/">Software</Link>
            </li>
          </ul>
        </nav>
        
        <span className={`bg-close d-md-none d-sm-none ${open ? "d-sm-block" : ""}`}  onClick={() => setOpen(false)}></span>
        <button className="btn btn-light rounded ml-auto my-3 d-md-none d-sm-block" onClick={() => setOpen(true)}><i className="mdi mdi-menu"> </i></button> 
        <Link to="/" className="btn btn-light ml-3 rounded-pill">
          Cotizar
        </Link>
      </div>
    </header>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
