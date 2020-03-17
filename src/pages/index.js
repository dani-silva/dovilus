import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel"
import SectionImage from "../components/section-image"
import SectionItems from "../components/section-items"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
        image: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(quality: 75) {
                ...GatsbyImageSharpFluid
            }
          }
        }
        service: file(relativePath: { eq: "carousel/first.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 200, quality: 75) {
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
      <SectionImage 
        tag="Página web"
        title="Muestra a los compradores en línea que eres local y que estás orgulloso de serlo."
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra. Augue quam risus suspendisse tempus volutpat iaculis et. Lectus in adipiscing amet iaculis at quam. Quisque nisl at nam."
        src={<Img fluid={data.image.childImageSharp.fluid} alt="Páwgina web" />}
        link="pagina-web"
      />

      <section className="container py-5">
        <div className="row py-5">
          <div className="col-lg-3 col-sm-12">
            <h2 className="text-dark border-right tag my-2">Servicios Web</h2>
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
                <span className="tag">Páginas Web</span>
                <h4 className="text-dark pb-3">Servicio 1</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra.</p>
                <Link to="paginas-web">Go to page 2</Link>
              </div>
              <div className="col-md-6 col-sm-12 pb-5">
                <span className="tag">Páginas Web</span>
                <h4 className="text-dark pb-3">Servicio 1</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra.</p>
                <Link to="paginas-web">Go to page 2</Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12 pb-5">
                <span className="tag">Páginas Web</span>
                <h4 className="text-dark pb-3">Servicio 1</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra.</p>
                <Link to="paginas-web">Go to page 2</Link>
              </div>
              <div className="col-md-6 col-sm-12 pb-5">
                <span className="tag">Páginas Web</span>
                <h4 className="text-dark pb-3">Servicio 1</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra.</p>
                <Link to="paginas-web">Go to page 2</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionImage 
        tag="Página web"
        title="Muestra a los compradores en línea que eres local y que estás orgulloso de serlo."
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra. Augue quam risus suspendisse tempus volutpat iaculis et. Lectus in adipiscing amet iaculis at quam. Quisque nisl at nam."
        src={<Img fluid={data.image.childImageSharp.fluid} alt="Páwgina web" />}
        link="pagina-web"
        reverse={true}
      />
      {/* <Img fluid={data.image.childImageSharp.fluid} alt="" /> */}

      <section className="container">
        <div className="row py-5">
          <div className="col-lg-4 col-md-6 d-flex flex-column align-items-start">
            {/* <Img fluid={data.service.childImageSharp.fluid} className="" alt="" /> */}
            <Img fixed={data.service.childImageSharp.fixed} className="w-100 rounded" alt="Páwgina web" />
            <div className="py-4">
              <h4 className="text-dark pb-3">Muestra a los compradores en</h4>
              <p>Lorem ipsum dolor sit amet,</p>
              <Link to="/" className="btn btn-primary">Go to page 2</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex flex-column align-items-start">
            {/* <Img fluid={data.service.childImageSharp.fluid} className="" alt="" /> */}
            <Img fixed={data.service.childImageSharp.fixed} className="w-100 rounded" alt="Páwgina web" />
            <div className="py-4">
              <h4 className="text-dark pb-3">Muestra a los compradores en</h4>
              <p>Lorem ipsum dolor sit amet,</p>
              <Link to="/" className="btn btn-primary">Go to page 2</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex flex-column align-items-start">
            {/* <Img fluid={data.service.childImageSharp.fluid} className="" alt="" /> */}
            <Img fixed={data.service.childImageSharp.fixed} className="w-100 rounded" alt="Páwgina web" />
            <div className="py-4">
              <h4 className="text-dark pb-3">Muestra a los compradores en</h4>
              <p>Lorem ipsum dolor sit amet,</p>
              <Link to="/" className="btn btn-primary">Go to page 2</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-5 py-5 bg-light rounded">
        <div className="px-5 py-5 d-flex flex-column align-items-center">
          <span className="tag">Páginas Web</span>
          <h2 className="text-dark pb-3 text-center text-center">Muestra a los compradores en línea que eres local y que estás orgulloso de serlo.</h2>
          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra. Augue quam risus suspendisse tempus volutpat iaculis et. Lectus in adipiscing amet iaculis at quam. Quisque nisl at nam.</p>
          <Link to="paginas-web" className="btn btn-primary rounded-pill">Go to page 2</Link>
        </div>
      </section>

      <SectionItems 
        content={[
          {
            tag: "Página web",
            title: "Muestra a los compradores en línea que eres local y que estás orgulloso de serlo.",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra. Augue quam risus suspendisse tempus volutpat iaculis et.",
            icon: <Img fluid={data.image.childImageSharp.fluid} alt="Páwgina web" />,
            link: "pagina-web"
          },
          {
            tag: "Página web",
            title: "Muestra a los compradores en línea que eres local y que estás orgulloso de serlo.",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra. Augue quam risus suspendisse tempus volutpat iaculis et.",
            icon: <Img fluid={data.image.childImageSharp.fluid} alt="Páwgina web" />,
            link: "pagina-web"
          },
          {
            tag: "Página web",
            title: "Muestra a los compradores en línea que eres local y que estás orgulloso de serlo.",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra. Augue quam risus suspendisse tempus volutpat iaculis et.",
            icon: <Img fluid={data.image.childImageSharp.fluid} alt="Páwgina web" />,
            link: "pagina-web"
          },
          {
            tag: "Página web",
            title: "Muestra a los compradores en línea que eres local y que estás orgulloso de serlo.",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra. Augue quam risus suspendisse tempus volutpat iaculis et.",
            icon: <Img fluid={data.image.childImageSharp.fluid} alt="Páwgina web" />,
            link: "pagina-web"
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

export default IndexPage
