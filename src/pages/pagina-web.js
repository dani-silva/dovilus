import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BreadCrumbs from "../components/breadcrumbs"

const PaginaWeb = () => {

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
      desktop: file(relativePath: { eq: "pagina-web/desktop.png" }) {
        childImageSharp {
          fluid(quality: 90) {
              ...GatsbyImageSharpFluid
          }
          fixed(width: 588, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  let [email, setEmail] = React.useState('')

  // console.log('context', React.useContext)
  let initProject = e => {
    setEmail(e.target.value)
  }

  return(
    <Layout>
      <SEO title="Páginas Web" />

      <div className="mx-1 position-relative">
        <div className="d-none d-md-block bg-gradient rounded h-100 position-absolute" style={{left: "0", width: "40%"}}></div>

        <section className="container-lg">
          <div className="row">

            <div className="d-flex flex-column justify-content-center col-12 col-md-6 position-relative">
              <div className="d-block d-md-none bg-gradient rounded h-100 position-absolute w-75" style={{left: "0"}}></div>

              <div className="w-100 d-flex py-5" style={{transform: "translate(50px, 0px)"}}>
                <Img fluid={data.desktop.childImageSharp.fluid} className="w-100" style={{transform: "scale(1.2)"}} alt="Página web" />
              </div>
            </div>
            {/* <div className="col-2"></div> */}

            <div className="d-flex flex-column justify-content-center col-12 col-md-6 py-5">
              <h2 className="tag text-muted">Página Web</h2>
              <h1 className="pb-3 text-primary">Tú negocio tiene que estar en internet.</h1>
              <p className="mb-5 text-dark">Tu negocio necesita una pagina web, pero que funcione atrayendo clientes, mostrando presencia y dando confianza.</p>
              <div className="w-75" >
                <label htmlFor="startProject" className="div-text small text-dark mb-2">Ingresa tu correo para solicitar una cotización.</label>
                <div className="form-group d-flex">
                  {/* <label for="exampleInputEmail1">Email address</label> */}
                  <input type="email" onChange={initProject} id="startProject" name="email" className="form-control mr-2 disabled"  placeholder="mi.correo@ejemplo.com" />
                  <Link state={{defaultEmail: email}} to="/cotizar" className="btn btn-primary rounded"><i className="mdi mdi-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            
          </div>
          
        </section>
      </div>
      
{/* 
      <section className="m-1 py-5 bg-gradient rounded">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 col-md-6 d-flex flex-column align-items-start justify-content-center text-white">
              <h2 className="tag text-light">Página Web</h2>
              <h1 className="pb-3 text-white">Muestrale a los clientes tus servicios o productos por internet, con tú propio sitio web.</h1>
              <p className="mb-5">Una página web despeja las dudas y genera confianza en tus compradores.</p>
              <Link to="paginas-web" className="btn rounded-pill btn-light">Go to page 2</Link>
              <small className="form-text text-light mb-2">Ingresa tu correo para solicitar una cotización.</small>
              <form onSubmit={() => console.log('enviar')} className="w-75" >
                <div className="form-group d-flex">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control mr-2"  placeholder="mi.correo@example.com" required />
                  <button type="submit" className="btn btn-primary rounded"><i className="mdi mdi-arrow-right"></i></button>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-6 d-none d-md-block d-flex">
              <Img fluid={data.desktop.childImageSharp.fluid} alt="Páwgina web" />
            </div>
          </div>
        </div>
      </section> */}

      

      <section className="px-4 px-md-3 container-lg py-5 my-5">
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

      <section className="px-4 px-md-3 container-lg py-5 my-5">
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

      <section className="px-4 px-md-3 container-lg">
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

      <section className="px-1">
        <div className="py-5 bg-primary rounded">
          <div className="py-5 d-flex flex-column align-items-center">
            <h5 className="tag text-light">E-Commerce</h5>
            <h2 className=" mb-3 text-light text-center">Vende tus productos con una tienda en linea.</h2>
            <p className="text-center mb-5 w-75">Nuestro proposito es crear tu página web que venda por ti, que aproveches todas las oportunidades que tiene internet para tu negocio.</p>
            <Link to="/tienda-en-linea" className="btn rounded btn-light">Me interesa</Link>
          </div>
        </div>

      </section>


{/* 
      <section className="container-lg py-5">
        <div className="mb-5 d-flex flex-column align-items-center">
          <span className="tag">Preguntas frecuentes</span>
          <h3 className="text-dark pb-3 text-center">Muestra a los compradores en línea que eres local y que estás orgulloso de serlo.</h3>
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
      </section> */}

      <div className="container-lg px-0">
        <BreadCrumbs 
          list={[
            // {
            //   name: 'Web',
            //   to: '/web'
            // },
            {
              name: 'Página Web',
            }
          ]}
        />
      </div>

    </Layout>
  )
}

export default PaginaWeb
