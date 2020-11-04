import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Newsletter from './newsletter'
import Img from 'gatsby-image'

const Footer = ({logo, metaData }) => (
    <footer className="bg-light">
      <div className="container-lg pt-5">
        <div className="row py-5">
          <div className="col-lg-4 col-12 pb-5">
              {/* <h4 className="text-primary pb-1 brand">{metaData.title}</h4> */}
              
              <Img fixed={logo.childImageSharp.fixed} className="mb-4" alt={metaData.title} />
              <p>{metaData.description}</p>

          </div>
          <div className="col-lg-2 col-md-3 col-6 pb-5 pb-md-0">
            {/* <h6 className="text-dark pb-2">Servicios</h6> */}
            <ul>
              <li> <Link to="/pagina-web" className="btn px-0">Inicio</Link></li>
              {/* <li> <Link to="/portafolio" className="btn px-0">Portafolio</Link></li> */}
              <li> <Link to="/pagina-web" className="btn px-0">Página web</Link></li>
              <li> <Link to="/tienda-en-linea" className="btn px-0">Tienda en linea</Link></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-6 pb-5 pb-md-0">
            {/* <h6 className="text-dark pb-2">Soluciones</h6> */}
            <ul>
              <li> <a href={metaData.socialMedia.linkedin} className="btn px-0" target="_blank" rel="noreferrer noopener" title="Facebook">LinkedIn</a></li>
              <li> <a href={metaData.socialMedia.facebook} className="btn px-0" target="_blank" rel="noreferrer noopener" title="Facebook">Facebook</a></li>
              <li> <a href={metaData.socialMedia.instagram} className="btn px-0" target="_blank" rel="noreferrer noopener" title="Facebook">instagram</a></li>
              <li> <a href={metaData.socialMedia.twitter} className="btn px-0" target="_blank" rel="noreferrer noopener" title="Facebook">twitter</a></li>
              <li> <a href={metaData.socialMedia.behance} className="btn px-0" target="_blank" rel="noreferrer noopener" title="Facebook">Behance</a></li>
              
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-12 pb-5 pb-md-0">
            <h6 className="text-dark">Contacto</h6>
            <p className="mb-4">info@dovlius.com</p>

            <h6 className="text-dark">Ubicación</h6>
            <p className="mb-4">Ensenada, México</p>

            <h6 className="text-dark mb-3">Newsletter</h6>
            <Newsletter />
          </div>
        </div>
      </div>
      <div className="bg-light py-4">
        <div className="container-lg">
          <div className="row">
            <div className="p-3 d-flex align-items-center small">
              <span className="text-dark">© {metaData.title} 2020. Derechos reservados. </span>
            </div>
            {/* <div className="d-flex ml-auto justify-content-center justify-content-md-end">
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
            </div> */}
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
