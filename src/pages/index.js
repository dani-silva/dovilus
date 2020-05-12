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
      <SEO title="Inicio" />

      <SectionImage 
        tag="Página web"
        title="Muestra a los compradores en línea que eres local y que estás orgulloso de serlo."
        paragraph={["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra. Augue quam risus suspendisse tempus volutpat iaculis et. Lectus in adipiscing amet iaculis at quam. Quisque nisl at nam."]}
        src={<Img fluid={data.desktop.childImageSharp.fluid} alt="Páwgina web" />}
        link={{to: '/pagina-web', title: "Página Web"}}
        reverse={true}
      />

      <SectionImage 
        tag="Página web"
        title="Muestra a los compradores en línea que eres local y que estás orgulloso de serlo."
        paragraph={["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra. Augue quam risus suspendisse tempus volutpat iaculis et. Lectus in adipiscing amet iaculis at quam. Quisque nisl at nam."]}
        src={<Img fluid={data.laptop.childImageSharp.fluid} alt="Páwgina web" />}
        link={{to: '/pagina-web', title: "Pagina Web"}}
      />
      {/* <Img fluid={data.image.childImageSharp.fluid} alt="" /> */}

    </Layout>
  )
}

export default IndexPage
