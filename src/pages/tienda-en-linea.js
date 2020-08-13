import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BreadCumbs from "../components/breadcrumbs"

const Ecommerce = () => {

  const data = useStaticQuery(graphql`
    query {
        open: file(relativePath: { eq: "ecommerce/digital.jpg" }) {
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
        laptop: file(relativePath: { eq: "ecommerce/laptop.png" }) {
          childImageSharp {
            fluid(quality: 90) {
                ...GatsbyImageSharpFluid
            }
            fixed(width: 588, height: 400) {
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
        beneficios: file(relativePath: { eq: "ecommerce/results.png" }) {
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

      <section className="px-1 pb-5">
        <div className="rounded bg-gradient">
          <div className="container-lg">
            <div className="row py-3">
              <div className="col-12 col-md-6 d-flex flex-column justify-content-center py-4 text-center text-md-left">
                <h2 className="tag text-light">Tienda online</h2>
                <h1 className="text-light">Comienza tu negocio en internet y aumenta las ventas.</h1>
              </div>
              <div className="col-12 col-md-6">
                <div className="image-shop">
                  <Img fluid={data.laptop.childImageSharp.fluid} className="w-100" alt="Tienda en linea" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-lg mt-5 mt-md-0">

          <BreadCumbs 
            list={[
            //   {
            //   name:'Web', 
            //   to:'web'
            // }, 
            {name: 'Tienda en Linea'}
            ]} />
        </div>

        {/* <div className="container">
          <div className="row">
            <div className="col-6 py-5">
              <p className="mb-5">Una tienda en linea es una herramienta digital que da muchas ventajas a tu negocio.</p>
              
                <small className="form-text mb-2">Ingresa tu correo para iniciar una cotización.</small>
                <form onSubmit={() => console.log('enviar')} className="w-75" >
                  <div className="form-group d-flex">
                    <input type="email" className="form-control mr-2" placeholder="mi.correo@example.com" required />
                    <button type="submit" className="btn btn-primary rounded"><i className="mdi mdi-arrow-right"></i></button>
                  </div>
                </form>
            </div>
            <div className="col-6">
              <div className="" style={{transform: "translate(0px, -300px)"}}>
                <Img fluid={data.laptop.childImageSharp.fluid} className="w-100" style={{transform: "scale(1.4)"}} alt="Páwgina web" />
              </div>
            </div>
          </div>
        </div> */}
      </section>

      {/* <section className="m-1 py-5 bg-gradient rounded">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 col-md-6 d-flex flex-column align-items-start justify-content-center text-white">
              <h2 className="tag text-light">Tienda online</h2>
              <h1 className="pb-3 text-light">Comienza tu negocio en internet y aumenta las ventas</h1>
              <p className="mb-5">Una tienda en linea es una herramienta digital que da muchas ventajas a tu negocio.</p>
              <Link to="paginas-web" className="btn rounded-pill btn-light">Go to page 2</Link>
              
              <small className="form-text mb-2">Ingresa tu correo para iniciar una cotización.</small>
              <form onSubmit={() => console.log('enviar')} className="w-75" >
                <div className="form-group d-flex">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control mr-2" placeholder="mi.correo@example.com" required />
                  <button type="submit" className="btn btn-primary rounded"><i className="mdi mdi-arrow-right"></i></button>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-6 d-none d-md-block">
              <Img fluid={data.laptop.childImageSharp.fluid} className="w-100" style={{transform: "scale(1.3)"}} alt="Páwgina web" />
            </div>
          </div>
        </div>
      </section> */}


      {/* <BreadCumbs list={[{name:'Web', to:'web'}, {name: 'Tienda en Linea'}]} /> */}

      <section className="container-lg mt-5 pt-5 overflow-visible">
        <div className="text-center">
          <h2 className="text-primary">Ganale a tu competencia.</h2>
          <p>Una vision sin un plan es solo un sueño, crea tu plan y actua ahora.</p>
        </div>
      </section>

      <section className="px-4 px-md-3 container-lg py-5 my-5">
        <div className="row flex-row-reverse">
            <div className="col-lg-6 col-md-7 col-sm-12 d-flex flex-column justify-content-center align-items-start">
              {/* <h6 className="tag"></h6> */}
              <h3 className="text-primary pb-3">Crea tu tienda en linea.</h3>
              <p>Para vender no solo necesitas estar mas cerca, tambien ser más rápido.</p>
              <p>Vender en internet es automatizar tu proceso de ventas, primero atraer clientes, despues explicarles tus servicios/productos, generar la confianza, y por ultimo le ofreces medios de pago en linea, puede ser con tarjeta de credito/debito o incluso en efectivo en tiendas de conveniencia.</p>
            </div>
            {/* <div className="d-none d-lg-block col-lg-1"></div> */}
            <div className="col-lg-6 col-md-5 col-sm-12 d-flex flex-column justify-content-center slideInUp animated">
              <Img fluid={data.open.childImageSharp.fluid} className="rounded w-100 h-100" alt="Siempre abierto" />
            </div>
        </div>
      </section>

      <section className="px-4 px-md-3 container-lg py-5 my-5">
        <div className="row">
            <div className="col-lg-6 col-md-7 col-sm-12 d-flex flex-column justify-content-center align-items-start">
              {/* <h6 className="tag"></h6> */}
              <h3 className="text-primary pb-3">Desarrolla tu presencia Online.</h3>
              <p>Una tienda en linea mejora la experiencia de compra que ofreces a tus clientes, el costo es minimo comparado con el costo de abrir sucursales(renta, servicios, seguros, etc) y distribuir tus productos/servicios.</p>
            </div>
            {/* <div className="d-none d-lg-block col-lg-1"></div> */}
            <div className="col-lg-6 col-md-5 col-sm-12 d-flex flex-column justify-content-center slideInUp animated">
              <Img fluid={data.shop.childImageSharp.fluid} className="rounded w-100 h-100" alt="Siempre abierto" />
            </div>
        </div>
      </section>

      <section className="px-4 px-md-3 container-lg py-5 my-5">
        <div className="row flex-row-reverse">
            <div className="col-lg-6 col-md-7 col-sm-12 d-flex flex-column justify-content-center align-items-start">
              {/* <h6 className="tag"></h6> */}
              <h3 className="text-primary pb-4">¿Qué beneficios me da una tienda online?</h3>

              <div className="d-flex mb-4">
                <div className="pr-4">
                  <Img fixed={data.world.childImageSharp.fixed} className="rounded" alt="Siempre abierto" />
                </div>
                <div className="">
                  <h3 className="h5 text-dark mb-2">Llega al 100% del territorio</h3>
                  <p className="text-muted">El acceso a internet nos permite conectarnos con personas en cualquier lugar.</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="pr-4">
                  <Img fixed={data.calendar.childImageSharp.fixed} className="rounded" alt="Siempre abierto" />
                </div>
                <div className="">
                  <h3 className="h5 text-dark mb-2">Ventas 24/7</h3>
                  <p className="text-muted">Una parte importante del proceso de ventas, es el informar las caracteristicas y beneficios de tu servicio/producto adecuada y estratégicamente.</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="pr-4">
                  <Img fixed={data.sms.childImageSharp.fixed} className="rounded" alt="Siempre abierto" />
                </div>
                <div className="">
                  <h3 className="h5 text-dark mb-2">Comunicación continua</h3>
                  <p className="text-muted">Para retener un cliente, o cerrar una venta es necesario tener un servicio al cliente que le de confianza en su compra.</p>
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
      
      <section className="px-1 mb-5">
        <div className="container-lg py-5 bg-primary rounded">
          <div className="py-5 d-flex flex-column align-items-center">
            <h5 className="tag text-light">Blog</h5>
            <h2 className="mb-4 text-center text-light">Crea una comunidad y presencia en internet.</h2>
            <p className="text-center mb-5 w-md-75">Estar conectado con tus clientes, que conozcan lo que tu negocio representa y les enseñes sobre ti crea comunidades solidas y presencia de marca de tu empresa.</p>
            {/* <Link to="/blog" className="btn rounded btn-light">Me interesa</Link> */}
          </div>
        </div>
      </section>

      <section className="px-4 px-md-3 container-lg">
        <div className="py-5 d-flex flex-column align-items-center">
          <span className="tag mb-2">Caracteristicas</span>
          <h2 className="pb-3 text-center w-md-75">Oportunidades que puedes añadir a tu sitio web para que sea una herramienta de ventas más efectiva.</h2>
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

      {/* <section className="px-4 px-md-3 container-lg py-5 mt-5">
        <div className="row">
          <div className="mb-5 d-flex flex-column align-items-center">
            <span className="tag">Preguntas frecuentes</span>
            <h2 className="pb-3 text-center w-md-75">Muestra a los compradores en línea que eres local y que estás orgulloso de serlo.</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="pb-5">
              <h5 className="text-dark pb-2">Servicio 1</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="pb-5">
              <h5 className="text-dark pb-2">Servicio 1</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra.</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
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
      </section> */}

      {/* <section className="container py-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <h3 className="text-dark w-75">
              Empieza ahora tu sitio E-commerce solicitando tu cotización sin costo.
            </h3>
          </div>
          <div className="col-12 col-md-6">
            <small className="form-text mb-2">Ingresa tu correo para iniciar una cotización.</small>
            <form onSubmit={() => console.log('enviar')} className="w-75" >
              <div className="form-group input-group-lg d-flex">
                <input type="email" className="form-control mr-2" placeholder="mi.correo@example.com" required />
                <button type="submit" className="btn btn-primary rounded btn-lg"><i className="mdi mdi-arrow-right"></i></button>
              </div>
            </form>
          </div>
        </div>
      </section> */}

    </Layout>
  )
}

export default Ecommerce
