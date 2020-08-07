import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel"

const IndexPage = () => {

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
        laptop: file(relativePath: { eq: "ecommerce/digital.png" }) {
          childImageSharp {
            fluid(quality: 75) {
                ...GatsbyImageSharpFluid
            }
            fixed(width: 588, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        desktop: file(relativePath: { eq: "pagina-web/desktop.png" }) {
          childImageSharp {
            fluid(quality: 75) {
                ...GatsbyImageSharpFluid
            }
            fixed(width: 588, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        esfera: file(relativePath: { eq: "carousel/esfera.png" }) {
          childImageSharp {
            fluid(maxHeight: 200, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        hexagonSecurity: file(relativePath: { eq: "pagina-web/hexagon-security.png" }) {
          childImageSharp {
            fluid(maxHeight: 200, quality: 100) {
              ...GatsbyImageSharpFluid
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

    <Layout afterHeader={
      <Carousel />
    }>
      <SEO title="Desarrollo web" />

      <section className="px-5 px-md-3 container-lg py-5 my-5">
        <div className="row">
            <div className="col-lg-6 col-md-7 col-sm-12 d-flex flex-column justify-content-center align-items-start">
              <h6 className="tag text-muted">Pagina web</h6>
              <h3 className="text-primary pb-3">El consumidor moderno es digital.</h3>
              <p>Los clientes modernos cuentan con herramientas digitales que remplazan las actividades cotidianas, desde la comunicación en voz o video con familiares y amigos, investigar, aprender o realizar compras de despensa, ropa, electrodomesticos y muchas cosas mas.</p>
              <p>El 45% de usuarios de internet realizan búsquedas relacionadas con negocios o productos locales.</p>
              <Link to="/pagina-web" className="btn text-primary px-0">Comenzar <span className="mdi mdi-arrow-right"></span></Link>
            </div>
            {/* <div className="d-none d-lg-block col-lg-1"></div> */}
            <div className="col-lg-6 col-md-5 col-sm-12 d-flex flex-column justify-content-center slideInUp animated">
              <Img fluid={data.desktop.childImageSharp.fluid} className="rounded w-100 h-100" alt="Siempre abierto" />
            </div>
        </div>
      </section>

      <section className="px-5 px-md-3 container-lg py-5 my-5">
        <div className="row">
            <div className="mb-5 mb-md-0 col-lg-6 col-md-5 col-sm-12 d-flex flex-column justify-content-center slideInUp animated">
              <Img fluid={data.laptop.childImageSharp.fluid} className="rounded w-100 h-100" alt="Siempre abierto" />
            </div>
            <div className="col-lg-6 col-md-7 col-sm-12 d-flex flex-column justify-content-center align-items-start">
              <h6 className="tag text-muted">Ecommerce</h6>
              <h3 className="text-primary pb-3">Crea tu tienda en linea.</h3>
              <p>Para vender no solo necesitas estar mas cerca, tambien ser más rápido.</p>
              <p>Vender en internet es automatizar tu proceso de ventas, primero atraer clientes, despues explicarles tus servicios/productos, generar la confianza, y por ultimo le ofreces medios de pago en linea, puede ser con tarjeta de credito/debito o incluso en efectivo en tiendas de conveniencia.</p>
            
              <Link to="/tienda-en-linea" className="btn text-primary px-0">Comenzar <span className="mdi mdi-arrow-right"></span></Link>
            </div>
            {/* <div className="d-none d-lg-block col-lg-1"></div> */}
            
        </div>
      </section>

      <section className="my-5 py-5 bg-primary rounded m-1">
        <div className="container-lg">
          <div className="py-5 d-flex flex-column align-items-center text-white">
            <span className="tag">Nuestro propósito</span>
            <h2 className="pb-2 text-center text-light">Ayudar a los dueños de negocio de <span className="text-success">Mé</span><span className="text-white">xi</span><span className="text-danger">co</span> a crecer en internet</h2>
            <p className="text-center">Nuestro proposito es ayudar a las empresas a crecer en internet de manera rapida y segura, con herramientas tecnologicas de vanguardia y donde ellas seas las protagonista.</p>
            <Link to="/cotizar" className="btn btn-light mt-4">Contactar Ahora</Link>
          </div>
        </div>
      </section>

    </Layout>
  )
}

export default IndexPage
