import React from "react"
// import {useState} from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Slider = () => {
  const data = useStaticQuery(graphql`
    query {
      esfera: file(relativePath: { eq: "carousel/esfera.png" }) {
        childImageSharp {
          fixed(height: 500) {
            ...GatsbyImageSharpFixed
          },
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      museum: file(relativePath: { eq: "carousel/museum.jpg" }) {
        childImageSharp {
          fixed(height: 500) {
            ...GatsbyImageSharpFixed
          },
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      selva: file(relativePath: { eq: "carousel/selva.jpg" }) {
        childImageSharp {
          fixed(height: 500) {
            ...GatsbyImageSharpFixed
          },
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(relativePath: { eq: "carousel/Vector.png" }) {
        childImageSharp {
          fixed(height: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <section className="hero bg-gradient rounded m-1">

      {/* <Img fluid={data.museum.childImageSharp.fluid} className="hero-image w-100 animated scroll-down" /> */}

      <div className="container h-100 d-flex flex-column justify-content-between py-4">
        <div style={{zIndex: '15'}}>
          <Link className="brand h4" to="/">
            {/* <Img fixed={data.logo.childImageSharp.fixed} className="mr-2" alt="" /> */}
            dovlius
          </Link>
        </div>

        <div className="row h-100" style={{zIndex: '5'}}>
          <div className="col-lg-8 col-md-10 col-sm-12 d-flex flex-column justify-content-center align-items-start">
            <h2 className="tag text-light">Desarrollo de soluciones digitales</h2>
            <p className="h1 text-white mb-4">Procesos permanentes <br /> de innovación y renovación</p>
            <p className="text-light">Nuestro proposito es ayudar a las empresas a crecer en internet de manera rapida y segura, con herramientas tecnologicas de vanguardia y donde ellas seas las protagonista.</p>
            
            {/* <Link to="/cotizar" className="btn rounded-pill mt-5 bg-transparent border shadow">
              Me interesa cotizar
            </Link> */}

            <Link to="/cotizar" className="btn btn-primary mt-4" >Me interesa un proyecto</Link>
          </div>
          <div className="d-flex col-lg-4 col-md-2 flex-row flex-md-column align-items-end justify-content-md-center justify-content-lg-end justify-content-start">
            <div className="">
              <div className="bg-light rounded overflow-hidden mr-4 mr-md-0 mt-md-4" style={{height: "70px", width: "110px"}}>
                <Img fixed={data.selva.childImageSharp.fixed} className="h-100 w-100" />
              </div>
            </div>
            <div className="">
              <div className="bg-light rounded overflow-hidden mr-4 mr-md-0 mt-md-4" style={{height: "70px", width: "110px"}}>
                <Img fixed={data.selva.childImageSharp.fixed} className="h-100 w-100" />
              </div>
            </div>
            <div className="">
              <div className="bg-light rounded overflow-hidden mr-4 mr-md-0 mt-md-4" style={{height: "70px", width: "110px"}}>
                <Img fixed={data.selva.childImageSharp.fixed} className="h-100 w-100" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Slider
