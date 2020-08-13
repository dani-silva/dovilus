import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
        laptop: file(relativePath: { eq: "ecommerce/digital.jpg" }) {
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
      }
    `)

  return(

    <Layout afterHeader={
      <Carousel />
    }>
      <SEO title="Desarrollo web" />

      <section className="container-lg my-5 py-5">
        <h2 className="h6 text-dark text-center">Desarrollo web</h2>
        <h1 className="h2 text-center mb-3">Soluciones digitales estrategicas.</h1>
        <p className="text-center">Supera los retos del mundo con herramientas digitales que mejoran resultados</p>
      </section>
{/* 
      <section className="px-4 px-md-3 container-lg">
        <div className="row my-5">
          <div className="col-lg-4 col-md-6">
            <div className="bg-primary p-4 rounded border d-flex flex-column justify-content-center">
              <h4 className="text-light tag">Chat</h4>
              <h5 className="text-light pb-3">Atiende las dudas de los compradores desde el sitio web.</h5>
              <p className="text-light mb-0">Integrando el chat de Facebook o Whatsapp, tus clientes te podran contactar facilmente para pedir ayuda, más información o cualquier duda que puedan tener.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="bg-primary p-4 rounded border d-flex flex-column justify-content-center">
              <h4 className="text-light tag">Chat</h4>
              <h5 className="text-light pb-3">Atiende las dudas de los compradores desde el sitio web.</h5>
              <p className="text-light mb-0">Integrando el chat de Facebook o Whatsapp, tus clientes te podran contactar facilmente para pedir ayuda, más información o cualquier duda que puedan tener.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="bg-primary p-4 rounded border d-flex flex-column justify-content-center">
              <h4 className="text-light tag">Chat</h4>
              <h5 className="text-light pb-3">Atiende las dudas de los compradores desde el sitio web.</h5>
              <p className="text-light mb-0">Integrando el chat de Facebook o Whatsapp, tus clientes te podran contactar facilmente para pedir ayuda, más información o cualquier duda que puedan tener.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-75 bg-primary mx-auto rounded">
        <div className="d-flex flex-row overflow-visible">
          <div className="w-50 p-5">
            <p className="tag">Etiqueta</p>
            <h3 className="text-light">Titulo nivel tres</h3>
            <p>El 45% de usuarios de internet realizan búsquedas relacionadas con negocios o productos locales.</p>
          </div>
          <div className="w-50">
            <div className="img-size-right">
              <Img fluid={data.desktop.childImageSharp.fluid} />

            </div>
          </div>
        </div>
      </section> */}

      <section className="px-4 px-md-3 container-lg py-5 my-5">
        <div className="row">
            <div className="col-lg-6 col-md-5 col-sm-12 d-flex flex-column justify-content-center slideInUp animated">
              <Img fluid={data.desktop.childImageSharp.fluid} className="rounded w-100 h-100" alt="Siempre abierto" />
            </div>
            <div className="col-lg-6 col-md-7 col-sm-12 d-flex flex-column justify-content-center align-items-start">
              <h6 className="tag text-muted">Pagina web</h6>
              <h3 className="text-primary pb-3">El consumidor moderno es digital.</h3>
              <p>Los clientes modernos cuentan con herramientas digitales que remplazan las actividades cotidianas, desde la comunicación en voz o video con familiares y amigos, investigar, aprender o realizar compras de despensa, ropa, electrodomesticos y muchas cosas mas.</p>
              <p>El 45% de usuarios de internet realizan búsquedas relacionadas con negocios o productos locales.</p>
              <Link to="/pagina-web" className="btn text-primary px-0">Comenzar <span className="mdi mdi-arrow-right"></span></Link>
            </div>
        </div>
      </section>

      <section className="px-4 px-md-3 container-lg py-5 my-5">
        <div className="row">
            <div className="col-lg-6 col-md-7 col-sm-12 d-flex flex-column justify-content-center align-items-start">
              <h6 className="tag text-muted">Ecommerce</h6>
              <h3 className="text-primary pb-3">Crea tu tienda en linea.</h3>
              <p>Para vender no solo necesitas estar mas cerca, tambien ser más rápido.</p>
              <p>Vender en internet es automatizar tu proceso de ventas, primero atraer clientes, despues explicarles tus servicios/productos, generar la confianza, y por ultimo le ofreces medios de pago en linea, puede ser con tarjeta de credito/debito o incluso en efectivo en tiendas de conveniencia.</p>
            
              <Link to="/tienda-en-linea" className="btn text-primary px-0">Comenzar <span className="mdi mdi-arrow-right"></span></Link>
            </div>
            
            <div className="mb-5 mb-md-0 col-lg-6 col-md-5 col-sm-12 d-flex flex-column justify-content-center slideInUp animated">
              <Img fluid={data.laptop.childImageSharp.fluid} className="rounded w-100 h-100" alt="Siempre abierto" />
            </div>
        </div>
      </section>

      <section className="mt-5 py-5 bg-primary rounded m-1">
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
