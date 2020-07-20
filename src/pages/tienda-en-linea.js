import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BreadCumbs from "../components/breadcrumbs"

const Ecommerce = () => {

  const data = useStaticQuery(graphql`
    query {
        open: file(relativePath: { eq: "ecommerce/digital.png" }) {
          childImageSharp {
            fluid(quality: 80) {
                ...GatsbyImageSharpFluid
            }
            fixed(width: 434, height: 658) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        shop: file(relativePath: { eq: "ecommerce/tienda.png" }) {
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
        world: file(relativePath: { eq: "ecommerce/global.png" }) {
          childImageSharp {
            fluid(quality: 80) {
                ...GatsbyImageSharpFluid
            }
            fixed(width: 40, height: 40) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        calendar: file(relativePath: { eq: "ecommerce/calendar.png" }) {
          childImageSharp {
            fluid(quality: 80) {
                ...GatsbyImageSharpFluid
            }
            fixed(width: 40, height: 40) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        sms: file(relativePath: { eq: "ecommerce/sms.png" }) {
          childImageSharp {
            fluid(quality: 80) {
                ...GatsbyImageSharpFluid
            }
            fixed(width: 40, height: 40) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        beneficios: file(relativePath: { eq: "ecommerce/plus.png" }) {
          childImageSharp {
            fluid(quality: 80) {
                ...GatsbyImageSharpFluid
            }
            fixed(width: 40, height: 40) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `)

  return(

    <Layout>
      <SEO title="Tienda en Linea" />

      <section className="m-1 py-5 bg-gradient rounded">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 col-md-6 d-flex flex-column align-items-start justify-content-center text-white">
              <h2 className="tag text-light">Tienda en linea</h2>
              <h1 className="pb-3 text-light">E-commerce para llegar y vender a todo lugar a cualquier hora</h1>
              <p className="mb-5">Una tienda en linea es una herramienta digital que da muchas ventajas a tu negocio.</p>
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

      <BreadCumbs list={[{name:'Web', to:'web'}, {name: 'Tienda en Linea'}]} />

      <section className="container-lg py-5 my-5">
        <div className="row flex-row-reverse">
            <div className="col-lg-6 col-md-7 col-sm-12 d-flex flex-column justify-content-center align-items-start">
              {/* <h6 className="tag"></h6> */}
              <h3 className="text-primary pb-3">El consumidor moderno es digital.</h3>
              <p>Los clientes modernos cuentan con herramientas digitales que remplazan las actividades cotidianas, desde la comunicación en voz o video con familiares y amigos, investigar, aprender o realizar compras de despensa, ropa, electrodomesticos y muchas cosas mas.</p>
              <p>El 45% de usuarios de internet realizan búsquedas relacionadas con negocios o productos locales.</p>
            </div>
            {/* <div className="d-none d-lg-block col-lg-1"></div> */}
            <div className="col-lg-6 col-md-5 col-sm-12 d-flex flex-column justify-content-center slideInUp animated">
              <Img fluid={data.open.childImageSharp.fluid} className="rounded w-100 h-100" alt="Siempre abierto" />
            </div>
        </div>
      </section>

      <section className="container-lg py-5 my-5">
        <div className="row">
            <div className="col-lg-6 col-md-7 col-sm-12 d-flex flex-column justify-content-center align-items-start">
              {/* <h6 className="tag"></h6> */}
              <h3 className="text-primary pb-3">En internet los horarios te atencion y ventas son cosa del pasado.</h3>
              <p>Una página web despeja dudas y genera confianza a las personas, convenciéndolas de obtener el producto o servicio, aumentando tu competitividad sobre la competencia, generando ventas y oportunidades de negocio.</p>
            </div>
            {/* <div className="d-none d-lg-block col-lg-1"></div> */}
            <div className="col-lg-6 col-md-5 col-sm-12 d-flex flex-column justify-content-center slideInUp animated">
              <Img fluid={data.shop.childImageSharp.fluid} className="rounded w-100 h-100" alt="Siempre abierto" />
            </div>
        </div>
      </section>

      <section className="container-lg py-5 my-5">
        <div className="row flex-row-reverse">
            <div className="col-lg-6 col-md-7 col-sm-12 d-flex flex-column justify-content-center align-items-start">
              {/* <h6 className="tag"></h6> */}
              <h3 className="text-primary pb-4">¿Qué beneficios me da una tienda online?</h3>

              <div className="d-flex mb-4">
                <div className="pr-4">
                  <Img fixed={data.world.childImageSharp.fixed} className="rounded" alt="Siempre abierto" />
                </div>
                <div className="">
                  <h3 className="h5 text-dark mb-2">Llega al 100% de la población</h3>
                  <p className="text-muted">Los clientes modernos cuentan con herramientas digitales que remplazan las actividades cotidianas.</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="pr-4">
                  <Img fixed={data.calendar.childImageSharp.fixed} className="rounded" alt="Siempre abierto" />
                </div>
                <div className="">
                  <h3 className="h5 text-dark mb-2">Agenda citas</h3>
                  <p className="text-muted">Los clientes modernos cuentan con herramientas digitales que remplazan las actividades cotidianas.</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="pr-4">
                  <Img fixed={data.sms.childImageSharp.fixed} className="rounded" alt="Siempre abierto" />
                </div>
                <div className="">
                  <h3 className="h5 text-dark mb-2">Comunicate en tiempo real</h3>
                  <p className="text-muted">Los clientes modernos cuentan con herramientas digitales que remplazan las actividades cotidianas.</p>
                </div>
              </div>
              {/* <p>El 45% de usuarios de internet realizan búsquedas relacionadas con negocios o productos locales.</p> */}
            </div>
            {/* <div className="d-none d-lg-block col-lg-1"></div> */}
            <div className="col-lg-6 col-md-5 col-sm-12 d-flex flex-column justify-content-center slideInUp animated">
              <Img fluid={data.beneficios.childImageSharp.fluid} className="rounded w-100" alt="Siempre abierto" />
            </div>
        </div>
      </section>

      <section className="container-lg">
        <div className="py-5 d-flex flex-column align-items-center">
          <span className="tag mb-2">Caracteristicas</span>
          <h2 className=" pb-3 text-center">Oportunidades que puedes añadir a tu sitio web para que sea una herramienta de ventas más efectiva.</h2>
        </div>

        <div className="pt-5">
            <div className="row">
                <div className="col-lg-4 col-md-6 d-flex flex-column justify-content-center pb-5">
                    <h4 className="text-dark tag">Chat</h4>
                    <h5 className="pb-3">Atiende las dudas de los compradores desde el sitio web.</h5>
                    <p>Integrando el chat de Facebook o Whatsapp, tus clientes te podran contactar facilmente para pedir ayuda, más información o cualquier duda que puedan tener.</p>
                </div>
                <div className="col-lg-4 col-md-6 d-flex flex-column justify-content-center pb-5">
                    <h4 className="text-dark tag">Newsletter</h4>
                    <h5 className="pb-3">Guarda los correos electronicos de contacto de tus visitantes.</h5>
                    <p>Al tener una direccion de correo puedes compartir con tus clientes promociones, productos nuevos o recordarle que ofreces el servicio o producto que estaba buscando.</p>
                </div>
                <div className="col-lg-4 col-md-6 d-flex flex-column justify-content-center pb-5">
                    <h4 className="text-dark tag">Analisis de trafico</h4>
                    <h5 className="pb-3">Usa la información del trafico y comportamiento de tus visitas.</h5>
                    <p>Con la herramienta de google analytics podras ver el total de visitas, el tiempo y la localización de tus clientes para mejorar tu posicionamiento y vencer a la competencia.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="container-lg my-5 py-5 bg-primary rounded">
        <div className="py-5 d-flex flex-column align-items-center text-white">
          <h5 className="tag text-light">Blog</h5>
          <h2 className=" mb-4 text-center text-light">Crea una comunidad y presencia en internet.</h2>
          <p className="text-center mb-5 w-75">Estar conectado con tus clientes, que conozcan lo que tu negocio representa y les enseñes sobre ti crea comunidades solidas y presencia de marca de tu empresa.</p>
          <Link to="/blog" className="btn rounded btn-light">Me interesa</Link>
        </div>
      </section>

      <section className="container-lg py-5">
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