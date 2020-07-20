import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel"
import SectionImage from "../components/section-image"
import SectionItems from "../components/section-items"
import BreadCrumbs from "../components/breadcrumbs"

const MarketingDigital = () => {

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
        <SEO title="Marketing Digital" />

        <section className="m-1 bg-gradient rounded" style={{overflow: 'visible'}}>
          <div className="container-lg">
            <div className="row">
                <div className="py-5 col-md-6 d-flex flex-column align-items-start justify-content-center">
                    <h3 className="tag text-light">Marketing Digital</h3>
                    <h1 className="text-light pb-3">Estrategias diseñadas y creativas que dan resultados.</h1>
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
                            <Img fluid={data.service.childImageSharp.fluid} className="mt-4 rounded" />
                            <Img fluid={data.service.childImageSharp.fluid} className="mt-4 rounded" />
                        </div>
                    </div>
                </div>
            </div>
          </div>
          
        </section>

        <BreadCrumbs list={[{name: 'Marketing Digital'}]} />

        <SectionImage 
            tag="Certificado SSL"
            title="Dale seguridad a tu página y confianza a tus clientes. "
            paragraph={["Te ayudamos a que tu sitio web sea seguro y confiable.", "No pierdas ventas por no tener la seguridad que tú sitio web necesita, con un certificado SSL proteges los datos sencibles de tus clientes, ademas te ayuda a posicionarte en google por ser un sitio confiable."]}
            src={<Img fluid={data.laptop.childImageSharp.fluid} alt="Seguridad SSL" />}
            link={{to: '/certificados-ssl', title: "Más información"}}
            reverse={true}
        />

        <section className="my-5 py-5 bg-primary">
          <div className="container-lg">
            <div className="py-5 d-flex flex-column align-items-center text-white">
              <span className="tag">Nuestro propósito</span>
              <h2 className="pb-4 text-center text-white">Ayudar a los dueños de negocio de <span className="text-success">Mé</span><span className="text-white">xi</span><span className="text-danger">co</span> a crecer en internet</h2>
              <p className="text-center">Si aun no haz iniciado la aventurado de vender por internet, nosotros de queremos ayudar a que lo hagas de manera segura, rápida y económica para que tú misión sea dar el mejor servicio a tus clientes.</p>
              <Link to="contacto" className="btn rounded btn-light mt-5">Contactar Ahora</Link>
            </div>
          </div>
        </section>

        <section className="container-lg py-5">
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

export default MarketingDigital
