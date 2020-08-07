import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ metaData }) => (
    <footer className="">
      <div className="container-lg">
        <div className="row py-5">
          <div className="col-lg-3 col-md-12 pb-5">
              <h4 className="text-dark pb-1 brand">{metaData.title}</h4>
              <p>{metaData.description}</p>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 pb-5 pb-md-0">
            <h6 className="text-dark pb-2">Servicios</h6>
            <ul>
              <li className="mb-2"><i className="mdi mdi-chevron-right"></i> <Link to="/pagina-web" className="btn text-left px-0">Página web</Link></li>
              <li className="mb-2"><i className="mdi mdi-chevron-right"></i> <Link to="/pagina-web" className="btn text-left px-0">Diseño web</Link></li>
              <li className="mb-2"><i className="mdi mdi-chevron-right"></i> <Link to="/tienda-en-linea" className="btn text-left px-0">E-commerce</Link></li>
              {/* <li className="mb-2"><i className="mdi mdi-chevron-right"></i> <Link to="/" className="btn text-left px-0">PWA</Link></li> */}
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 pb-5 pb-md-0">
            <h6 className="text-dark pb-2">Otras soluciones</h6>
            <ul>
              <li className="mb-2"><i className="mdi mdi-chevron-right"></i> <Link to="" className="btn text-left px-0">Diseño web</Link></li>
              <li className="mb-2"><i className="mdi mdi-chevron-right"></i> <Link to="" className="btn text-left px-0">Desarollo web</Link></li>
              <li className="mb-2"><i className="mdi mdi-chevron-right"></i> <Link to="" className="btn text-left px-0">Cobrar en linea</Link></li>
              <li className="mb-2"><i className="mdi mdi-chevron-right"></i> <Link to="" className="btn text-left px-0">Marketing digital</Link></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pb-5 pb-md-0">
            <h6 className="text-dark pb-2">Newsletter</h6>

            <p className="form-text text-dark mb-4">Al ingresar tu correo electrónico, aceptas recibir correos electrónicos de marketing por parte de <span className="text-primary">dovlius</span>.</p>
            <form onSubmit={() => console.log('enviar')} className="w-100" >
              <div className="form-group d-flex">
                {/* <label for="exampleInputEmail1">Email address</label> */}
                <input type="email" className="form-control mr-2" placeholder="mi.correo@example.com" required />
                <button type="submit" className="btn btn-primary rounded"><i className="mdi mdi-email-send-outline"></i></button>
              </div>
              <small className="small text-muted">Puedes cancelar la suscripción en cualquier momento. 
              {/* <Link to="/" className="text-dark">Lee nuestra Política de privacidad.</Link> */}
              </small>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <div className="container-lg">
          <div className="row d-flex flex-column-reverse flex-md-row">
            <div className="py-3 col-md-6 d-flex align-items-center text-white small justify-content-center justify-content-md-start">
              <span className="brand">© {metaData.title} </span>
            </div>
            <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
              <ul className="nav">
                <li className="nav-item">
                  <a href={metaData.socialMedia.facebook} className="nav-link py-3" target="_blank" rel="nofollow" title="Facebook"><i className="mdi mdi-facebook text-white"> </i></a>
                </li>
                <li className="nav-item">
                  <a href={metaData.socialMedia.pinterest} className="nav-link py-3" target="_blank" rel="nofollow" title="Pinterest"><i className="mdi mdi-pinterest text-white"> </i></a>
                </li>
                <li className="nav-item">
                  <a href={metaData.socialMedia.twitter} className="nav-link py-3" target="_blank" rel="nofollow" title="Twitter"><i className="mdi mdi-twitter text-white"> </i></a>
                </li>
                <li className="nav-item">
                  <a href={metaData.socialMedia.instagram} className="nav-link py-3" target="_blank" rel="nofollow" title="Instagram"><i className="mdi mdi-instagram text-white"> </i></a>
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
