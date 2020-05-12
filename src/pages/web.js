import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel"
import SectionImage from "../components/section-image"
import SectionItems from "../components/section-items"

const Web = () => {

  const data = useStaticQuery(graphql`
    query {
        image: file(relativePath: { eq: "pagina-web/tablet.png" }) {
          childImageSharp {
            fluid(quality: 75) {
                ...GatsbyImageSharpFluid
            }
            fixed(width: 434, height: 658) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        laptop: file(relativePath: { eq: "pagina-web/laptop.png" }) {
          childImageSharp {
            fluid(quality: 75) {
                ...GatsbyImageSharpFluid
            }
            fixed(width: 588, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        selva: file(relativePath: { eq: "carousel/selva.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
            fixed(height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        service: file(relativePath: { eq: "carousel/first.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
            fixed(height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `)

  return(

    <Layout>
        <SEO title="Servicios Web" />

        <section className="m-1 bg-gradient rounded" style={{overflow: 'visible'}}>
          <div className="container">
            <div className="row">
                <div className="py-5 col-md-6 d-flex flex-column align-items-start justify-content-center">
                    <h3 className="tag text-light">Servicios web</h3>
                    <h1 className="text-light pb-3">Muestra a los compradores en línea</h1>
                    <p className="text-light mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra. Augue quam risus suspendisse tempus volutpat iaculis et. Lectus in adipiscing amet iaculis at quam. Quisque nisl at nam.</p>
                    {/* <Link to="paginas-web" className="btn btn-primary rounded-pill mr-auto">Go to page 2</Link> */}
                </div>
                <div className="col-md-6 d-flex align-items-end justify-content-center">
                    <div className="row mt-4 w-100">
                        <div className="col-6">
                            <Img fluid={data.service.childImageSharp.fluid} className="mb-4 rounded" />
                            <Img fluid={data.service.childImageSharp.fluid} className="mb-4 rounded" />
                        </div>
                        <div className="col-6" style={{transform: 'translate(0px, 80px)'}}>
                            <Img fluid={data.service.childImageSharp.fluid} className="mb-4 rounded" />
                            <Img fluid={data.service.childImageSharp.fluid} className="mb-4 rounded" />
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>

        <section className="container">
          <ul className="d-flex mt-3 mb-2">
            <li><Link to="/" className="btn text-dark">Inicio</Link><i className="mdi mdi-chevron-right text-dark"></i></li>
            <li className="btn text-dark disabled">Web</li>
          </ul>
        </section>

        <SectionImage 
            tag="Certificado SSL"
            title="Dale seguridad a tu página y confianza a tus clientes. "
            paragraph={["Te ayudamos a que tu sitio web sea seguro y confiable.", "No pierdas ventas por no tener la seguridad que tú sitio web necesita, con un certificado SSL proteges los datos sencibles de tus clientes, ademas te ayuda a posicionarte en google por ser un sitio confiable."]}
            src={<Img fluid={data.laptop.childImageSharp.fluid} alt="Seguridad SSL" />}
            link={{to: '/certificados-ssl', title: "Más información"}}
            reverse={true}
        />

        <section className="container py-5">
          <div className="row py-5">
            <div className="col-lg-3 col-sm-12">
              <h2 className="text-muted border-right border-primary tag my-2 pb-3">Herramientas digitales</h2>
            </div>
            <div className="col-lg-9 col-sm-12">
              <h3>Supera los retos del mundo con herramientas digitales que mejoran resultados</h3>
              <figure className="figure d-block mt-4 mb-5">
                {/* <img src="..." className="figure-img img-fluid rounded" alt="..."> */}
                <Img fluid={data.selva.childImageSharp.fluid} className="figure-img img-fluid max-height-300 rounded" alt="Páwgina web" />
                <figcaption className="figure-caption text-right">Aventuras que cambian la vida</figcaption>
              </figure>
              <div className="row">
                <div className="col-md-6 col-sm-12 pb-5">
                  <span className="text-dark">Páginas Web</span>
                  <h4 className="pb-3">Servicio 1</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra.</p>
                  <Link to="paginas-web" className="btn text-primary mr-auto px-0" >Go to page 2<i className="mdi mdi-chevron-right"></i></Link>
                </div>
                <div className="col-md-6 col-sm-12 pb-5">
                  <span className="text-dark">Páginas Web</span>
                  <h4 className="pb-3">Servicio 1</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra.</p>
                  <Link to="paginas-web" className="btn text-primary mr-auto px-0" >Go to page 2<i className="mdi mdi-chevron-right"></i></Link>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-12 pb-5">
                  <span className="text-dark">Páginas Web</span>
                  <h4 className="pb-3">Servicio 1</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra.</p>
                  <Link to="paginas-web" className="btn text-primary mr-auto px-0" >Go to page 2<i className="mdi mdi-chevron-right"></i></Link>
                </div>
                <div className="col-md-6 col-sm-12 pb-5">
                  <span className="text-dark">Páginas Web</span>
                  <h4 className="pb-3">Servicio 1</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra.</p>
                  <Link to="paginas-web" className="btn text-primary mr-auto px-0" >Go to page 2<i className="mdi mdi-chevron-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-5 py-5 bg-primary">
          <div className="container">
            <div className="px-5 py-5 d-flex flex-column align-items-center text-white">
              <span className="tag">Nuestro propósito</span>
              <h2 className="pb-2 text-center text-light">Ayudar a los dueños de negocio de <span className="text-success">Mé</span><span className="text-white">xi</span><span className="text-danger">co</span> a crecer en internet</h2>
              <p className="text-center">Si aun no haz iniciado la aventurado de vender por internet, nosotros de queremos ayudar a que lo hagas de manera segura, rápida y económica para que tú misión sea dar el mejor servicio a tus clientes.</p>
              <Link to="contacto" className="btn rounded-pill btn-light mt-4">Contactar Ahora</Link>
            </div>
          </div>
        </section>

        <section className="container py-5">
            <div className="row">
            <div className="mb-5 d-flex flex-column align-items-center">
                <span className="tag">Preguntas frecuentes</span>
                <h2 className="text-dark pb-3 text-center text-center">Muestra a los compradores en línea que eres local y que estás orgulloso de serlo.</h2>
            </div>
            </div>
            <div className="row">
            <div className="col-md-6 col-sm-12 pb-5">
                <div className="pb-5">
                <h5 className="text-dark pb-2">Servicio 1</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="pb-5">
                <h5 className="text-dark pb-2">Servicio 1</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra.</p>
                </div>
                <div className="pb-5">
                <h5 className="text-dark pb-2">Servicio 1</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra.</p>
                </div>
            </div>
            <div className="col-md-6 col-sm-12 pb-5">
                <div className="pb-5">
                <h5 className="text-dark pb-2">Servicio 1</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra.</p>
                </div>
                <div className="pb-5">
                <h5 className="text-dark pb-2">Servicio 1</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra.</p>
                </div>
            </div>
            </div>
        </section>

    </Layout>
  )
}

export default Web
