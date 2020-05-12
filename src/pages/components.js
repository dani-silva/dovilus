import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel"
import SectionImage from "../components/section-image"
import SectionItems from "../components/section-items"

const ComponentsPage = () => {

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
            fluid(quality: 100) {
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
      <SEO title="Inicio" />

      <div className="pb-5">
        <SectionImage 
          tag="Página web"
          title="Muestra a los compradores en línea que eres local y que estás orgulloso de serlo."
          paragraph={["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra. Augue quam risus suspendisse tempus volutpat iaculis et. Lectus in adipiscing amet iaculis at quam. Quisque nisl at nam."]}
          src={<Img fluid={data.desktop.childImageSharp.fluid} alt="Páwgina web" />}
          link={{to: '/', title: "pagina-web"}}
          reverse={true}
        />
      </div>

      <section className="container py-5">
        <div className="row py-5">
          <div className="col-lg-3 col-sm-12">
            <h2 className="text-dark border-right border-primary tag my-2">Servicios Web</h2>
          </div>
          <div className="col-lg-9 col-sm-12">
            <h3>Muestra a los compradores en línea que eres local y que estás orgulloso de serlo.</h3>
            <figure className="figure d-block mt-4 mb-5">
              {/* <img src="..." className="figure-img img-fluid rounded" alt="..."> */}
              <Img fluid={data.service.childImageSharp.fluid} className="figure-img img-fluid max-height-300 rounded" alt="Páwgina web" />
              <figcaption className="figure-caption text-right">A caption for the above image.</figcaption>
            </figure>
            <div className="row">
              <div className="col-md-6 col-sm-12 pb-5">
                <small className="text-muted">Páginas Web</small>
                <h4 className="text-dark pb-3">Servicio 1</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra.</p>
                <Link to="paginas-web" className="btn text-primary mr-auto px-0" >Go to page 2<i className="mdi mdi-chevron-right"></i></Link>
              </div>
              <div className="col-md-6 col-sm-12 pb-5">
                <small className="text-muted">Páginas Web</small>
                <h4 className="text-dark pb-3">Servicio 1</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra.</p>
                <Link to="paginas-web" className="btn text-primary mr-auto px-0" >Go to page 2<i className="mdi mdi-chevron-right"></i></Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12 pb-5">
                <small className="text-muted">Páginas Web</small>
                <h4 className="text-dark pb-3">Servicio 1</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra.</p>
                <Link to="paginas-web" className="btn text-primary mr-auto px-0" >Go to page 2<i className="mdi mdi-chevron-right"></i></Link>
              </div>
              <div className="col-md-6 col-sm-12 pb-5">
                <small className="text-muted">Páginas Web</small>
                <h4 className="text-dark pb-3">Servicio 1</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra.</p>
                <Link to="paginas-web" className="btn text-primary mr-auto px-0" >Go to page 2<i className="mdi mdi-chevron-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="row">
          <div className="col-3">
            <Img fluid={data.shop.childImageSharp.fluid} className="rounded w-100 mt-2" alt="Siempre abierto" />
            <p className="h4 d-flex align-items-center px-2 position-absolute text-light w-100 h-100" style={{top: '0', zIndex: "50"}}>Titulo corto para foto</p>
          </div>
          <div className="col-3">
            <Img fluid={data.open.childImageSharp.fluid} className="rounded w-100 mt-4" alt="Siempre abierto" />
            <p className="h4 d-flex align-items-center px-2 position-absolute text-light w-100 h-100" style={{top: '0', zIndex: "50"}}>Titulo corto para foto</p>
          </div>
          <div className="col-3">
            <Img fluid={data.service.childImageSharp.fluid} className="rounded w-100" alt="Siempre abierto" />
            <p className="h4 d-flex align-items-center px-2 position-absolute text-light w-100 h-100" style={{top: '0', zIndex: "50"}}>Titulo corto para foto</p>
          </div>
          <div className="col-3">
            <Img fluid={data.selva.childImageSharp.fluid} className="rounded w-100 mt-5" alt="Siempre abierto" />
            <p className="h4 d-flex align-items-center px-2 position-absolute text-light w-100 h-100" style={{top: '0', zIndex: "50"}}>Titulo corto para foto</p>
          </div>
        </div>
      </section>

      <SectionImage 
        tag="Página web"
        title="Muestra a los compradores en línea que eres local y que estás orgulloso de serlo."
        paragraph={["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra. Augue quam risus suspendisse tempus volutpat iaculis et. Lectus in adipiscing amet iaculis at quam. Quisque nisl at nam."]}
        src={<Img fluid={data.desktop.childImageSharp.fluid} alt="Páwgina web" />}
        link={{to: '/', title: "pagina-web"}}
      />
      {/* <Img fluid={data.image.childImageSharp.fluid} alt="" /> */}

      <section className="container">
        <div className="row py-5">
          <div className="col-lg-4 col-md-6 d-flex flex-column align-items-start">
            {/* <Img fluid={data.service.childImageSharp.fluid} className="" alt="" /> */}
            <Img fixed={data.service.childImageSharp.fixed} className="w-100 rounded" alt="Páwgina web" />
            <div className="py-4 text-center">
              <h4 className="text-dark">Muestra a los compradores en</h4>
              <p>Lorem ipsum dolor sit amet, ipsum dolor sit amet,</p>
              <Link to="/" className="btn btn-primary rounded-pill">Go to page 2</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex flex-column align-items-start">
            {/* <Img fluid={data.service.childImageSharp.fluid} className="" alt="" /> */}
            <Img fixed={data.service.childImageSharp.fixed} className="w-100 rounded" alt="Páwgina web" />
            <div className="py-4 text-center">
              <h4 className="text-dark">Muestra a los compradores en</h4>
              <p>Lorem ipsum dolor sit amet, ipsum dolor sit amet,</p>
              <Link to="/" className="btn btn-primary rounded-pill">Go to page 2</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex flex-column align-items-start">
            {/* <Img fluid={data.service.childImageSharp.fluid} className="" alt="" /> */}
            <Img fixed={data.service.childImageSharp.fixed} className="w-100 rounded" alt="Páwgina web" />
            <div className="py-4 text-center">
              <h4 className="text-dark">Muestra a los compradores en</h4>
              <p>Lorem ipsum dolor sit amet, ipsum dolor sit amet,</p>
              <Link to="/" className="btn btn-primary rounded-pill">Go to page 2</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-5 py-5 bg-gradient rounded">
        <div className="px-5 py-5 d-flex flex-column align-items-center text-white">
          <span className="tag">Páginas Web</span>
          <h2 className=" pb-3 text-center text-center">Muestra a los compradores en línea que eres local y que estás orgulloso de serlo.</h2>
          <p className="text-center">Nuestro proposito es crear tu página web que venda por ti, que aproveches todas las oportunidades que tiene internet para tu negocio.</p>
          <Link to="paginas-web" className="btn rounded-pill btn-light">Me interesa</Link>
        </div>
      </section>

      <section className="my-5 py-5 bg-gradient">
        <div className="container">
          <div className="px-5 py-5 d-flex flex-column align-items-center text-white">
            <span className="tag">Páginas Web</span>
            <h2 className=" pb-3 text-center text-center">Muestra a los compradores en línea que eres local y que estás orgulloso de serlo.</h2>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra. Augue quam risus suspendisse tempus volutpat iaculis et. Lectus in adipiscing amet iaculis at quam. Quisque nisl at nam.</p>
            <Link to="paginas-web" className="btn rounded-pill btn-light">Me interesa</Link>
          </div>
        </div>
      </section>

      <section className="container my-5 py-5 bg-dark rounded">
        <div className="row">
          <div className="col-12 col-md-6 px-5 py-5 d-flex flex-column align-items-start text-white">
            <span className="tag">Páginas Web</span>
            <h1 className="h3 pb-3">Vende por internet y crece tu negocio</h1>
            {/* <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra. Augue quam risus suspendisse tempus volutpat iaculis et. Lectus in adipiscing amet iaculis at quam. Quisque nisl at nam.</p> */}
            {/* <Link to="paginas-web" className="btn rounded-pill btn-light">Go to page 2</Link> */}
            <small className="form-text text-light mb-2">Ingresa tu correo para iniciar una cotización.</small>
            <form onSubmit={() => console.log('enviar')} className="w-100" >
              <div className="form-group d-flex">
                {/* <label for="exampleInputEmail1">Email address</label> */}
                <input type="email" className="form-control mr-2" required />
                <button type="submit" className="btn btn-primary rounded"><i className="mdi mdi-arrow-right"></i></button>
              </div>
            </form>
          </div>
          <div className="col-12 col-md-6 d-none d-md-block">
            <Img fluid={data.laptop.childImageSharp.fluid} alt="Páwgina web" />
          </div>
        </div>
      </section>

      <section className="container my-5 bg-primary rounded">
        <div className="d-flex flex-row">
          <div className="p-5 col-md-6 d-flex flex-column justify-content-center">
            <h3 className="tag text-light">Páginas Web</h3>
            <h2 className="text-light pb-3">Muestra a los compradores en línea</h2>
            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="paginas-web" className="btn btn-primary rounded-pill mr-auto">Go to page 2</Link>
          </div>
          <div className="col-md-6 d-flex align-items-end justify-content-center">
            <Img fixed={data.image.childImageSharp.fixed} />
          </div>
        </div>
      </section>

      <SectionItems 
        content={[
          {
            tag: "Página web",
            title: "Muestra a los compradores en línea que eres local y que estás orgulloso de serlo.",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra. Augue quam risus suspendisse tempus volutpat iaculis et.",
            icon: <Img fluid={data.image.childImageSharp.fluid} alt="Páwgina web" />,
            link: {to: '/', name: "pagina-web"}
          },
          {
            tag: "Página web",
            title: "Muestra a los compradores en línea que eres local y que estás orgulloso de serlo.",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra. Augue quam risus suspendisse tempus volutpat iaculis et.",
            icon: <Img fluid={data.image.childImageSharp.fluid} alt="Páwgina web" />,
            link: {to: '/', name: "pagina-web"}
          },
          {
            tag: "Página web",
            title: "Muestra a los compradores en línea que eres local y que estás orgulloso de serlo.",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra. Augue quam risus suspendisse tempus volutpat iaculis et.",
            icon: <Img fluid={data.image.childImageSharp.fluid} alt="Páwgina web" />,
            link: {to: '/', name: "pagina-web"}
          },
          {
            tag: "Página web",
            title: "Muestra a los compradores en línea que eres local y que estás orgulloso de serlo.",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra. Augue quam risus suspendisse tempus volutpat iaculis et.",
            icon: <Img fluid={data.image.childImageSharp.fluid} alt="Páwgina web" />,
            link: {to: '/', name: "pagina-web"}
          }
        ]}
      />

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

export default ComponentsPage
