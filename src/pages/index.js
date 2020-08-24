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
        desktop: file(relativePath: { eq: "ecommerce/desktop.png" }) {
          childImageSharp {
            fluid(quality: 75) {
                ...GatsbyImageSharpFluid
            }
            fixed(width: 588, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        design: file(relativePath: { eq: "icons/design.png" }) {
          childImageSharp {
            fluid(quality: 75) {
                ...GatsbyImageSharpFluid
            }
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        ssl: file(relativePath: { eq: "icons/ssl.png" }) {
          childImageSharp {
            fluid(quality: 75) {
                ...GatsbyImageSharpFluid
            }
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        server: file(relativePath: { eq: "icons/server.png" }) {
          childImageSharp {
            fluid(quality: 75) {
                ...GatsbyImageSharpFluid
            }
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        develop: file(relativePath: { eq: "icons/develop.png" }) {
          childImageSharp {
            fluid(quality: 75) {
                ...GatsbyImageSharpFluid
            }
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        website: file(relativePath: { eq: "icons/website.png" }) {
          childImageSharp {
            fluid(quality: 75) {
                ...GatsbyImageSharpFluid
            }
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        ecommerce: file(relativePath: { eq: "icons/ecommerce.png" }) {
          childImageSharp {
            fluid(quality: 75) {
                ...GatsbyImageSharpFluid
            }
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        email: file(relativePath: { eq: "icons/email.png" }) {
          childImageSharp {
            fluid(quality: 75) {
                ...GatsbyImageSharpFluid
            }
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        marketing: file(relativePath: { eq: "icons/marketing.png" }) {
          childImageSharp {
            fluid(quality: 75) {
                ...GatsbyImageSharpFluid
            }
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        mobile: file(relativePath: { eq: "icons/mobile.png" }) {
          childImageSharp {
            fluid(quality: 75) {
                ...GatsbyImageSharpFluid
            }
            fixed(width: 50, height: 50) {
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

    <Layout afterHeader={
      <Carousel />
    }>
      <SEO title="Desarrollo web" />
{/* 
      <section className="container-lg my-5 py-5">
        <h2 className="h6 text-dark ">Desarrollo web</h2>
        <h1 className="h2  mb-3">Soluciones digitales estrategicas.</h1>
        <p className="">Supera los retos del mundo con herramientas digitales que mejoran resultados</p>
      </section> */}

      <section className="my-5 py-5 container-lg">
        <div className="row">
          <div className="col-12 col-md-2">
            <h3 className="d-none d-md-block text-muted py-1" style={{transform: "rotate(-90deg) translate(-40%, -25%)"}}>¿Qué hacemos?</h3>
            <h3 className="h5 d-block d-md-none text-muted py-1">¿Qué hacemos?</h3>
          </div>
          <div className="col-12 col-md-1"></div>
          <div className="col-12 col-md-9">
            {/* <small className="tag">Identificamos y creamos soluciones</small> */}
            <h1 className="h2 mb-4">Desarrollo de software y marketing digital.</h1>
            <p className="mb-5">
              {/* Entendemos los desafios que pueden surgir en el proceso de desarrollo de tu proyecto...  */}
              La tecnología siempre está evolucionando, con nuevos softwares que emergen de diferentes problemas y situaciones que se van presentando dentro de las empresas. 
              Es por eso que tu, al igual que la tecnología, debes de estar evolucionando e innovando. 
              Al invertir en tecnología, estás invirtiendo en crecimiento y estás impulsando tu empresa a mantenerse al corriente y seguir a delante en este mundo que no se detiene.</p>
          
            <iframe
                id="d6c1f27d-6a27-4c7e-bd7d-bd19d7faa56c"
                src="https://www.vectary.com/viewer/v1/?model=d6c1f27d-6a27-4c7e-bd7d-bd19d7faa56c&turntable=-2"
                frameBorder="0"
                width="100%"
                height="400">
            </iframe>

            <div className="row mt-5 pt-5">
              <div className="col-12 col-md-4 col-sm-6 py-3 py-md-5">
                <Img fixed={data.develop.childImageSharp.fixed} className="mb-3" alt="Software" />
                <h2 className="mb-3 h5">Desarrollo web</h2>
                <p>API's, CRM, servicios de terceros o cualquier proceso personalizado que necesites desarrollar en Javascript(React.js, Node.js, Mongo.js).</p>
                <span className="mdi mdi-language-javascript mr-2"></span>
                <span className="mdi mdi-language-html5 mr-2"></span>
                <span className="mdi mdi-language-css3 mr-2"></span>
                <span className="mdi mdi-nodejs mr-2"></span>
                <span className="mdi mdi-react mr-2"></span>
              </div>
              <div className="col-12 col-md-4 col-sm-6 py-3 py-md-5">
                <Img fixed={data.website.childImageSharp.fixed} className="mb-3" alt="Página Web" />
                <h2 className="mb-3 h5">Página Web</h2>
                <p>Es el primer paso, tu negocio necesita presencia en linea, mostrar lo que ofreces y ganar la confianza de los compradores.</p>
              </div>
              <div className="col-12 col-md-4 col-sm-6 py-3 py-md-5">
                <Img fixed={data.ecommerce.childImageSharp.fixed} className="mb-3" alt="Tienda" />
                <h2 className="mb-3 h5">Tienda en linea</h2>
                <p>Porque te detienes con una página web, si puedes tener todo el proceso de venta en linea, con diferentes métodos de pago y automatizado.</p>
              </div>
              <div className="col-12 col-md-4 col-sm-6 py-3 py-md-5">
                <Img fixed={data.mobile.childImageSharp.fixed} className="mb-3" alt="Aplicación" />
                <h2 className="mb-3 h5">Aplicacion móvil</h2>
                <p>Si tu negocio necesita estar en el celular de tu cliente, invierte en la aplicación móvil: PWA, IO's o de Android.</p>
              </div>
              <div className="col-12 col-md-4 col-sm-6 py-3 py-md-5">
                <Img fixed={data.email.childImageSharp.fixed} className="mb-3" alt="Correo" />
                <h2 className="mb-3 h5">Correo electrónico</h2>
                <p>Es uno de los medios de contacto mas usados, cambialo por uno con el nombre de tu empresa, es mas profesional y diferenciador.</p>
              </div>
              <div className="col-12 col-md-4 col-sm-6 py-3 py-md-5">
                <Img fixed={data.server.childImageSharp.fixed} className="mb-3" alt="Hosting" />
                <h2 className="mb-3 h5">Hosting y Dominio</h2>
                <p>Tener un dominio sencillo y fácil de recordar, y ademas un servidor estable y que te de la seguridad de estar siempre en linea.</p>
              </div>
              <div className="col-12 col-md-4 col-sm-6 py-3 py-md-5">
                <Img fixed={data.ssl.childImageSharp.fixed} className="mb-3" alt="SSL" />
                <h2 className="mb-3 h5">Certificado SSL</h2>
                <p>La seguridad en Internet es muy importante, tómala con seriedad, tus clientes te lo agradecerán y tu sitio estará protegido.</p>
              </div>
              <div className="col-12 col-md-4 col-sm-6 py-3 py-md-5">
                <Img fixed={data.design.childImageSharp.fixed} className="mb-3" alt="Diseño" />
                <h2 className="mb-3 h5">Diseño UI/UX</h2>
                <p>Tu sitio o aplicación no deben ser un laberinto para tus clientes, todo debe estar organizado y fácil de encontrar.</p>
              </div>
              <div className="col-12 col-md-4 col-sm-6 py-3 py-md-5">
                <Img fixed={data.marketing.childImageSharp.fixed} className="mb-3" alt="Marketing" />
                <h2 className="mb-3 h5">Marketing digital</h2>
                <p>Olvídate de los folletos y costosos e ineficaces anuncios publicitarios, llega directo a los compradores de manera digital y mas barato.</p>
              </div>
            </div>

          </div>
        </div>

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
              <div className="rounded">

                <Img fluid={data.desktop.childImageSharp.fluid} className="rounded w-100 h-100" alt="Siempre abierto" />
              </div>
            </div>
            <div className="col-lg-6 col-md-7 col-sm-12 d-flex flex-column justify-content-center align-items-start">
              <h6 className="tag">Página web</h6>
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
              <h6 className="tag">Ecommerce</h6>
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

      <section className="container-lg py-5 mt-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <h3 className="text-dark w-100 mb-5">
              Empieza ahora tu proyecto solicitando tu cotización sin costo.
            </h3>
          </div>
          
          <div className="col-12 col-md-6">
            {/* <small className="form-text mb-2">Ingresa tu correo para iniciar una cotización.</small>
            <form onSubmit={() => console.log('enviar')} className="w-100">
              <div className="form-group input-group-lg d-flex">
                <input type="email" className="form-control mr-2" placeholder="mi.correo@example.com" required />
                <button type="submit" className="btn btn-primary rounded btn-lg"><i className="mdi mdi-arrow-right"></i></button>
              </div>
            </form> */}
              <label htmlFor="startProject" className="div-text small text-dark mb-2">Ingresa tu correo para iniciar.</label>
              <div className="form-group d-flex input-group-lg">
                {/* <label for="exampleInputEmail1">Email address</label> */}
                <input type="email" onChange={initProject} id="startProject" name="email" className="form-control mr-2 disabled"  placeholder="mi.correo@ejemplo.com" />
                <Link state={{defaultEmail: email}} to="/cotizar" className="btn btn-primary rounded btn-lg"><i className="mdi mdi-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}

export default IndexPage
