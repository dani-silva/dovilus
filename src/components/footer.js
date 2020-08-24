import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Newsletter from './newsletter'

const Footer = ({ metaData }) => (
    <footer className="mx-1 p-1 mb-1 rounded border">
      <div className="container-lg">
        <div className="row py-5">
          <div className="col-lg-3 col-md-12 pb-5">
              <h4 className="text-primary pb-1 brand">{metaData.title}</h4>
              <p>{metaData.description}</p>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 pb-5 pb-md-0">
            <h6 className="text-dark pb-2">Servicios</h6>
            <ul>
              <li className="mb-2"><i className="mdi mdi-chevron-right"></i> <Link to="/pagina-web" className="btn text-left px-0">Página web</Link></li>
              {/* <li className="mb-2"><i className="mdi mdi-chevron-right"></i> <Link to="/pagina-web" className="btn text-left px-0">Diseño web</Link></li> */}
              <li className="mb-2"><i className="mdi mdi-chevron-right"></i> <Link to="/tienda-en-linea" className="btn text-left px-0">E-commerce</Link></li>
              {/* <li className="mb-2"><i className="mdi mdi-chevron-right"></i> <Link to="/" className="btn text-left px-0">PWA</Link></li> */}
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 pb-5 pb-md-0">
            <h6 className="text-dark pb-2">Soluciones</h6>
            <ul>
              <li className="mb-2"><i className="mdi mdi-chevron-right"></i> <Link to="" className="btn text-left px-0">Programadores JS</Link></li>
              <li className="mb-2"><i className="mdi mdi-chevron-right"></i> <Link to="" className="btn text-left px-0">Desarrollo de aplicaciones</Link></li>
              <li className="mb-2"><i className="mdi mdi-chevron-right"></i> <Link to="" className="btn text-left px-0">Diseño UI/UX</Link></li>
              <li className="mb-2"><i className="mdi mdi-chevron-right"></i> <Link to="" className="btn text-left px-0">Marketing Digital</Link></li>
              <li className="mb-2"><i className="mdi mdi-chevron-right"></i> <Link to="" className="btn text-left px-0">Branding</Link></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pb-5 pb-md-0">
            <h6 className="text-dark pb-2">Newsletter</h6>
            <Newsletter />
          </div>
        </div>
      </div>
      <div className="bg-primary rounded">
        <div className="container-lg">
          <div className="row">
            <div className="p-3 d-flex align-items-center text-white small">
              <span className="brand">© {metaData.title} </span>
            </div>
            <div className="d-flex ml-auto justify-content-center justify-content-md-end">
              <ul className="nav">
                <li className="nav-item">
                  <a href={metaData.socialMedia.facebook} className="nav-link py-3" target="_blank" rel="noreferrer noopener" title="Facebook"><i className="mdi mdi-facebook text-white"> </i></a>
                </li>
                <li className="nav-item">
                  <a href={metaData.socialMedia.pinterest} className="nav-link py-3" target="_blank" rel="noreferrer noopener" title="Pinterest"><i className="mdi mdi-pinterest text-white"> </i></a>
                </li>
                <li className="nav-item">
                  <a href={metaData.socialMedia.twitter} className="nav-link py-3" target="_blank" rel="noreferrer noopener" title="Twitter"><i className="mdi mdi-twitter text-white"> </i></a>
                </li>
                <li className="nav-item">
                  <a href={metaData.socialMedia.instagram} className="nav-link py-3" target="_blank" rel="noreferrer noopener" title="Instagram"><i className="mdi mdi-instagram text-white"> </i></a>
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
