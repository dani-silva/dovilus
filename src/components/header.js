import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from 'gatsby-image'

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 30, height: 50, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const [open, setOpen] =  React.useState(false)

  return(
    <header className="sticky-top p-1" style={{background: "linear-gradient(0deg, rgba(255,255,255,.2), rgba(255,255,255,1))"}}>
      <div className="d-flex align-items-center justify-content-between border bg-light rounded">
      <div className="container-lg d-flex align-items-center justify-content-between">
        <Link to="/" className="d-flex align-items-center brand">
          <Img fixed={data.file.childImageSharp.fixed} className="mr-2" alt={siteTitle} />
        </Link> 
        
        <nav className={`nav-responsive rounded d-md-flex flex-row align-items-center ml-auto ${open ? "d-sm-flex" : "d-none"}`}>
          <button className="btn btn-primary rounded ml-auto mt-2 mr-2 d-md-none d-block" onClick={() => setOpen(false)}><i className="mdi mdi-window-close"> </i></button> 
          <ul className="nav">
            {/* <Link to="/" activeClassName="active" className="nav-link py-4">Inicio</Link> */}
            <li className="nav-item has-submenu">
              <Link to="/pagina-web" activeClassName="active" className="nav-link py-4">Empieza <i className="mdi mdi-chevron-down"> </i></Link>
              <ul className="submenu rounded border right shadow">
                <div className="overflow-hidden rounded">
                  
                  <li>
                    <Link to="/pagina-web" activeClassName="active-link" activeClassName="active-link" className="list-group-item list-group-item-action rounded-0 p-3 d-flex align-items-center border-0">
                        <div className="icon mr-3 p-2">
                            <i className="mdi mdi-desktop-mac"></i>
                        </div>
                        <div className="content">
                            <h5 className="h6 mb-1 text-dark">
                              Página web 
                              {/* <small className="badge rounded-pill badge-info small ml-1">Código </small> */}
                            </h5>
                            <p className="mb-0 small text-muted">Si tú negocio no esta en internet, tú negocio no existe.</p>    
                        </div>
                        <i className="text-secondary mdi mdi-chevron-right ml-auto"> </i>
                    </Link>
                  </li>
                  
                  <li>
                    <Link to="/tienda-en-linea" activeClassName="active-link" className="list-group-item list-group-item-action rounded-0 p-3 d-flex align-items-center border-0">
                        <div className="icon mr-3 p-2">
                            <i className="mdi mdi-basket"></i>
                        </div>
                        <div className="content">
                            <h5 className="h6 mb-1 text-dark">Tienda en Linea</h5>
                            <p className="mb-0 small text-muted">Vende en linea con una web e-commerce.</p>    
                        </div>
                        <i className="text-secondary mdi mdi-chevron-right ml-auto"> </i>
                    </Link>
                  </li>

                  {/* <li>
                    <Link to="/blog" activeClassName="active-link" className="list-group-item list-group-item-action rounded-0 p-3 d-flex align-items-center border-0">
                        <div className="icon mr-3 p-2">
                            <i className="mdi mdi-post"></i>
                        </div>
                        <div className="content">
                            <h5 className="h6 mb-1 text-dark">Blog</h5>
                            <p className="mb-0 small text-muted">Descripcion corta del servicio blogging.</p>    
                        </div>
                        <i className="text-secondary mdi mdi-chevron-right ml-auto"> </i>
                    </Link>
                  </li> */}

                  {/* <li>
                    <Link to="/pagina-web" activeClassName="active-link" className="list-group-item list-group-item-action rounded-0 p-3 d-flex align-items-center border-0">
                        <div className="icon mr-3 p-2">
                            <i className="mdi mdi-cellphone"></i>
                        </div>
                        <div className="content">
                            <h5 className="h6 mb-1 text-dark">Aplicaciones</h5>
                            <p className="mb-0 small text-muted">Aplicaiones web (PWA) o moviles Android, IOS.</p>    
                        </div>
                        <i className="text-secondary mdi mdi-chevron-right ml-auto"> </i>
                    </Link>
                  </li> */}

                  {/* <li className="row small bg-light m-0 py-4 border-top rounded-bottom">
                    <div className="col col-md-6">
                      <h6 className="text-primary">Proveedores</h6>
                      <Link to="/web" className="nav-link border-left">Dominio</Link>
                      <Link to="/web" className="nav-link border-left">Hosting</Link>
                      <Link to="/web" className="nav-link border-left">Correo personalizado</Link>
                    </div>
                    <div className="col col-md-6">
                      <h6 className="text-primary">Soporte</h6>
                      <Link to="/web" className="nav-link border-left">Seguridad Web</Link>
                      <Link to="/web" className="nav-link border-left">Analisis de trafico</Link>
                    </div>
                  </li> */}

                  {/* <hr className="mb-0" />
                  <li className="bg-light list-group-item list-group-item-action rounded-0 p-4 d-flex flex-column align-items-center border-0">
                      <div className="content mb-4">
                        <span className="badge rounded-pill badge-success px-2 mb-1">Promoción </span>
                          <h5 className="text-dark">Contra el coronavirus</h5>
                          <p className="mb-0 text-muted">Si tu negocio se ve afectado por la pandemia del coronavirus, te queremos ayudar.</p> 
                      </div>
                      <Link to="/" className="btn btn-primary w-100">Leer más</Link>
                  </li> */}
                </div>
              </ul>
            
            </li>
            
            {/* <li className="nav-item has-submenu">
              <Link to="/diseño" activeClassName="active" className="nav-link py-4">Diseño <i className="mdi mdi-chevron-down"> </i></Link>
              <ul className="submenu rounded border left shadow">

                <li>
                  <Link to="/pagina-web" activeClassName="active-link" className="list-group-item list-group-item-action rounded-0 p-3 d-flex align-items-center border-0">
                      <div className="icon mr-3 p-2">
                          <i className="mdi mdi-desktop-mac"></i>
                      </div>
                      <div className="content">
                          <h5 className="h6 mb-1 text-dark">
                            Página web
                            <small className="badge rounded-pill badge-info ml-1 small">Diseño </small>
                          </h5>
                          <p className="mb-0 small text-muted">Rediseña tu sitio web y luce como una empresa profesional.</p>    
                      </div>
                      <i className="text-secondary mdi mdi-chevron-right ml-auto"> </i>
                  </Link>
                </li>
                
                <li>
                  <Link to="/pagina-web" activeClassName="active-link" className="list-group-item list-group-item-action rounded-0 p-3 d-flex align-items-center border-0">
                      <div className="icon mr-3 p-2">
                          <i className="mdi mdi-pencil-ruler"></i>
                      </div>
                      <div className="content">
                          <h5 className="h6 mb-1 text-dark">Branding</h5>
                          <p className="mb-0 small text-muted">Diseño de marca que de confianza y diference a tú empresa.</p>    
                      </div>
                      <i className="text-secondary mdi mdi-chevron-right ml-auto"> </i>
                  </Link>
                </li>

                <li>
                  <Link to="/pagina-web" activeClassName="active-link" className="list-group-item list-group-item-action rounded-0 p-3 d-flex align-items-center border-0">
                      <div className="icon mr-3 p-2">
                          <i className="mdi mdi-camera"></i>
                      </div>
                      <div className="content">
                          <h5 className="h6 mb-1 text-dark">Fotografias</h5>
                          <p className="mb-0 small text-muted">Muestra con calidad tus productos y fotos de tu sitio web.</p>    
                      </div>
                      <i className="text-secondary mdi mdi-chevron-right ml-auto"> </i>
                  </Link>
                </li>
              </ul>
            </li> */}
{/*             
            <li className="nav-item has-submenu">
              <Link to="/marketing-digital" activeClassName="active" className="nav-link py-4">Marketing Digital <i className="mdi mdi-chevron-down"> </i></Link>
              <ul className="submenu rounded border left shadow">
                <div className="overflow-hidden rounded">

                  <li>
                    <Link to="/seo" activeClassName="active-link" className="list-group-item list-group-item-action rounded-0 p-3 d-flex align-items-center border-0">
                        <div className="icon mr-3 p-2">
                            <i className="mdi mdi-laptop"></i>
                        </div>
                        <div className="content">
                            <h5 className="h6 mb-1 text-dark">SEO</h5>
                            <p className="mb-0 small text-muted">Posiciona tu página web en los buscadores mas populares.</p>    
                        </div>
                        <i className="text-secondary mdi mdi-chevron-right ml-auto"> </i>
                    </Link>
                  </li>
                  
                  <li>
                    <Link to="/redes-sociales" activeClassName="active-link" className="list-group-item list-group-item-action rounded-0 p-3 d-flex align-items-center border-0">
                        <div className="icon mr-3 p-2">
                            <i className="mdi mdi-web"></i>
                        </div>
                        <div className="content">
                            <h5 className="h6 mb-1 text-dark">Redes sociales</h5>
                            <p className="mb-0 small text-muted">Manten comunicación con tus clientes en redes sociales.</p>    
                        </div>
                        <i className="text-secondary mdi mdi-chevron-right ml-auto"> </i>
                    </Link>
                  </li>

                  <li>
                    <Link to="/pagina-web" activeClassName="active-link" className="list-group-item list-group-item-action rounded-0 p-3 d-flex align-items-center border-0">
                        <div className="icon mr-3 p-2">
                            <i className="mdi mdi-basket"></i>
                        </div>
                        <div className="content">
                            <h5 className="h6 mb-1 text-dark">Landing pages</h5>
                            <p className="mb-0 small text-muted">Crea campañas que atraigan nuevos y potenciales clientes.</p>    
                        </div>
                        <i className="text-secondary mdi mdi-chevron-right ml-auto"> </i>
                    </Link>
                  </li>
                </div>
              </ul>
            </li>
             */}
            {/* <li className="nav-item has-submenu">
              <Link to="/nosotros" activeClassName="active" className="nav-link py-4">Nosotros <i className="mdi mdi-chevron-down"> </i></Link>
              <ul className="submenu rounded border right shadow">
                <div className="overflow-hidden rounded"> */}
                  {/* <li>
                    <Link to="/pagina-web" activeClassName="active-link" className="list-group-item list-group-item-action rounded-0 p-3 d-flex align-items-center border-0">
                        <div className="icon mr-3 p-2">
                            <i className="mdi mdi-hexagon-multiple"></i>
                        </div>
                        <div className="content">
                            <h5 className="h6 mb-1 text-dark">Equipo</h5>
                            <p className="mb-0 small text-muted">Talento de todo el mundo.</p>    
                        </div>
                        <i className="text-secondary mdi mdi-chevron-right ml-auto"> </i>
                    </Link>
                  </li> */}
                  
                  {/* <li>
                    <Link to="/pagina-web" activeClassName="active-link" className="list-group-item list-group-item-action rounded-0 p-3 d-flex align-items-center border-0">
                        <div className="icon mr-3 p-2">
                            <i className="mdi mdi-pencil"></i>
                        </div>
                        <div className="content">
                            <h5 className="h6 mb-1 text-dark">Publicaciones</h5>
                            <p className="mb-0 small text-muted">Contenido de valor para negocios y desarrolladores.</p>    
                        </div>
                        <i className="text-secondary mdi mdi-chevron-right ml-auto"> </i>
                    </Link>
                  </li> */}

                  {/* <li>
                    <Link to="/pagina-web" activeClassName="active-link" className="list-group-item list-group-item-action rounded-0 p-3 d-flex align-items-center border-0">
                        <div className="icon mr-3 p-2">
                            <i className="mdi mdi-map"></i>
                        </div>
                        <div className="content">
                            <h5 className="h6 mb-1 text-dark">Contacto</h5>
                            <p className="mb-0 small text-muted">Empresa local, remota e internacional.</p>    
                        </div>
                        <i className="text-secondary mdi mdi-chevron-right ml-auto"> </i>
                    </Link>
                  </li> */}

                  {/* <hr className="mb-0" /> */}
                  {/* <li className="bg-light p-4 d-flex flex-column align-items-center border-top rounded-bottom">
                      <div className="content mb-4">
                          <h5 className="text-primary">Trabajo</h5>
                          <p className="mb-0 text-muted">Buscamos socios que quieran construir la empresa de software más importante de México.</p> 
                      </div>
                      <Link to="/" className="btn btn-primary w-100">Me interesa</Link>
                  </li> */}
                {/* </div>
              </ul>
            </li> */}
            
          </ul>
        </nav>
        
        <span className={`bg-close d-md-block ${open ? "d-sm-block" : "d-none"}`}  onClick={() => setOpen(false)}></span>
        <button className="btn btn-light rounded ml-auto my-3 d-md-none d-sm-block" onClick={() => setOpen(true)}><i className="mdi mdi-menu"> </i></button> 
        <Link to="/cotizar" className="btn btn-outline-primary ml-3">
          Contratanos
        </Link>
      </div>
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
