import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel"
import SectionImage from "../components/section-image"
import SectionItems from "../components/section-items"

const Ecommerce = () => {

  const data = useStaticQuery(graphql`
    query {
        open: file(relativePath: { eq: "pagina-web/open.jpg" }) {
          childImageSharp {
            fluid(quality: 80) {
                ...GatsbyImageSharpFluid
            }
            fixed(width: 434, height: 658) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        shop: file(relativePath: { eq: "pagina-web/shop.jpg" }) {
          childImageSharp {
            fluid(quality: 80) {
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
        laptopR: file(relativePath: { eq: "pagina-web/laptop-r.png" }) {
          childImageSharp {
            fluid(quality: 90) {
                ...GatsbyImageSharpFluid
            }
            fixed(width: 588, height: 400) {
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
      <SEO title="Página Web" />

      <section className="m-1 py-5 bg-gradient rounded">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 d-flex flex-column align-items-start justify-content-center text-white">
              <h2 className="tag text-light">Ecommerce</h2>
              <h1 className="h3 pb-3 text-light">Tienda en linea para llegar y vender a todo lugar a cualquier hora</h1>
              <p className="mb-5">Una página web despierta el interés y genera confianza en tus compradores.</p>
              {/* <Link to="paginas-web" className="btn rounded-pill btn-light">Go to page 2</Link> */}
              <small className="form-text text-light mb-2">Ingresa tu correo para iniciar una cotización.</small>
              <form onSubmit={() => console.log('enviar')} className="w-75" >
                <div className="form-group d-flex">
                  {/* <label for="exampleInputEmail1">Email address</label> */}
                  <input type="email" className="form-control mr-2" placeholder="mi.correo@example.com" required />
                  <button type="submit" className="btn btn-primary rounded"><i className="mdi mdi-arrow-right"></i></button>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-6 d-none d-md-block">
              <Img fluid={data.laptopR.childImageSharp.fluid} alt="Páwgina web" />
            </div>
          </div>
        </div>
      </section>

      <section className="container text-muted">

        <ul className="d-flex mt-2 mb-2">
          <li><Link to="/" className="btn text-dark">Inicio</Link><i className="mdi mdi-chevron-right text-dark"></i></li>
          <li><Link to="/web" className="btn text-dark">Web</Link><i className="mdi mdi-chevron-right text-dark"></i></li>
          <li className="btn text-dark disabled">E-commerce</li>
        </ul>
      </section>
      
      <SectionImage 
        // tag="Página web"
        title="En internet no hay horarios y las ventas se hacen a cualquier hora desde cualquier lugar."
        paragraph={[
          "El 45% de usuarios de internet realizan búsquedas relacionadas con negocios o productos locales.", 
          "Una página web despierta el interés y genera confianza en tus compradores, convenciéndolas que te contacten o visiten para obtener el producto o servicio, aumentando tu competitividad sobre la competencia, generando ventas y oportunidades de negocio."
        ]}
        src={<Img fluid={data.open.childImageSharp.fluid} className="rounded w-100 h-100" alt="Siempre abierto" />}
        // link="pagina-web"
        reverse={true}
      />

      <SectionImage 
        // tag="Página web"
        title="En internet no hay horarios y las ventas se hacen a cualquier hora desde cualquier lugar."
        paragraph={[
          "El 45% de usuarios de internet realizan búsquedas relacionadas con negocios o productos locales.", 
          "Una página web despierta el interés y genera confianza a las personas, convenciéndolas que te contacten o visiten para obtener el producto o servicio, aumentando tu competitividad sobre la competencia, generando ventas y oportunidades de negocio."
        ]}
        src={<Img fluid={data.shop.childImageSharp.fluid} className="rounded w-100 h-100" alt="Siempre abierto" />}
        // link="pagina-web"
      />

      <section className="container">
        <div className="px-5 py-5 d-flex flex-column align-items-center">
          <span className="tag mb-2">Caracteristicas</span>
          <h2 className=" pb-3 text-center">Oportunidades que puedes añadir a tu sitio web para que sea una herramienta de ventas más efectiva.</h2>
        </div>

        <SectionItems 
          content={[
            {
              tag: "Chat",
              title: "Atiende las dudas de los compradores desde el sitio web.",
              paragraph: "Integrando el chat de Facebook o Whatsapp, tus clientes te podran contactar facilmente para pedir ayuda, más información o cualquier duda que puedan tener.",
            },
            {
              tag: "Newsletter",
              title: "Guarda los correos electronicos de contacto de tus visitantes.",
              paragraph: "Al tener una direccion de correo puedes compartir con tus clientes promociones, productos nuevos o recordarle que ofreces el servicio o producto que estaba buscando.",
            },
            {
              tag: "Analisis de trafico",
              title: "Usa la información del trafico y comportamiento de tus visitas.",
              paragraph: "Con la herramienta de google analytics podras ver el total de visitas, el tiempo y la localización de tus clientes para mejorar tu posicionamiento y vencer a la competencia.",
            },
            // {
            //   tag: "Formularios",
            //   title: "Agenda citas.",
            //   paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra. Augue quam risus suspendisse tempus volutpat iaculis et.",
            // }
          ]}
        />
      </section>

      <section className="container my-5 py-5 bg-primary rounded">
        <div className="px-5 py-5 d-flex flex-column align-items-center text-white">
          <h5 className="tag text-light">Ecommerce</h5>
          <h2 className=" mb-3 text-center text-light">Vende tus productos con una tienda en linea.</h2>
          <p className="text-center mb-5">Nuestro proposito es crear tu página web que venda por ti, que aproveches todas las oportunidades que tiene internet para tu negocio.</p>
          <Link to="paginas-web" className="btn rounded-pill btn-light">Me interesa</Link>
        </div>
      </section>

      <section className="container py-5">
        <div className="row">
          <div className="mb-5 d-flex flex-column align-items-center">
            <span className="tag">Preguntas frecuentes</span>
            <h2 className="pb-3 text-center">Muestra a los compradores en línea que eres local y que estás orgulloso de serlo.</h2>
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

export default Ecommerce
