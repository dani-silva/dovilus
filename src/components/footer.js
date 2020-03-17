import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ metaData }) => (
    <footer className="bg-light">
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-4 col-md-12">
              <h4 className="text-dark pb-1 brand">dovlius</h4>
              <p>Mejorando tus procesos y diseño</p>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <h6 className="text-dark pb-4">Web</h6>
            <ul>
              <li className="mb-2"><i className="mdi mdi-hexagon pr-1"></i> <Link to="/">Pagina web</Link></li>
              <li className="mb-2"><i className="mdi mdi-hexagon pr-1"></i> <Link to="/">Pagina web</Link></li>
              <li className="mb-2"><i className="mdi mdi-hexagon pr-1"></i> <Link to="/">Pagina web</Link></li>
              <li className="mb-2"><i className="mdi mdi-hexagon pr-1"></i> <Link to="/">Pagina web</Link></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <h6 className="text-dark pb-4">Web</h6>
            <ul>
              <li className="mb-2"><i className="mdi mdi-hexagon pr-1"></i> <Link to="/">Pagina web</Link></li>
              <li className="mb-2"><i className="mdi mdi-hexagon pr-1"></i> <Link to="/">Pagina web</Link></li>
              <li className="mb-2"><i className="mdi mdi-hexagon pr-1"></i> <Link to="/">Pagina web</Link></li>
              <li className="mb-2"><i className="mdi mdi-hexagon pr-1"></i> <Link to="/">Pagina web</Link></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <h6 className="text-dark pb-4">Web</h6>
            <ul>
              <li className="mb-2"><i className="mdi mdi-hexagon pr-1"></i> <Link to="/">Pagina web</Link></li>
              <li className="mb-2"><i className="mdi mdi-hexagon pr-1"></i> <Link to="/">Pagina web</Link></li>
              <li className="mb-2"><i className="mdi mdi-hexagon pr-1"></i> <Link to="/">Pagina web</Link></li>
              <li className="mb-2"><i className="mdi mdi-hexagon pr-1"></i> <Link to="/">Pagina web</Link></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <h6 className="text-dark pb-4">Web</h6>
            <ul>
              <li className="mb-2"><i className="mdi mdi-hexagon pr-1"></i> <Link to="/">Pagina web</Link></li>
              <li className="mb-2"><i className="mdi mdi-hexagon pr-1"></i> <Link to="/">Pagina web</Link></li>
              <li className="mb-2"><i className="mdi mdi-hexagon pr-1"></i> <Link to="/">Pagina web</Link></li>
              <li className="mb-2"><i className="mdi mdi-hexagon pr-1"></i> <Link to="/">Pagina web</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 d-flex align-items-center text-white small">
              <span className="brand">© {new Date().getFullYear()} {metaData.title} </span>
            </div>
            <div className="col-sm-6 d-flex justify-content-end justify-content-sm-center">
              <ul className="nav">
                <li className="nav-item">
                  <a href="https://facebook.com/dovlius" className="nav-link py-3" target="_blank" rel="nofollow" title="Facebook"><i className="mdi mdi-facebook text-white"> </i></a>
                </li>
                <li className="nav-item">
                  <a href="https://facebook.com/dovlius" className="nav-link py-3" target="_blank" rel="nofollow" title="Pinterest"><i className="mdi mdi-pinterest text-white"> </i></a>
                </li>
                <li className="nav-item">
                  <a href="https://facebook.com/dovlius" className="nav-link py-3" target="_blank" rel="nofollow" title="Twitter"><i className="mdi mdi-twitter text-white"> </i></a>
                </li>
                <li className="nav-item">
                  <a href="https://facebook.com/dovlius" className="nav-link py-3" target="_blank" rel="nofollow" title="Instagram"><i className="mdi mdi-instagram text-white"> </i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
)

Footer.propTypes = {
  metaData: PropTypes.object,
}

Footer.defaultProps = {
  metaData: ``,
}

export default Footer
