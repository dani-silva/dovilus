import React from "react"
// import {useState} from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Slider = () => {
  const data = useStaticQuery(graphql`
    query {
      first: file(relativePath: { eq: "carousel/Vector.png" }) {
        childImageSharp {
          fixed(height: 500) {
            ...GatsbyImageSharpFixed
          },
          fluid(quality: 75) {
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
    <section className="hero">
      <div className="container h-100 d-flex flex-column justify-content-between py-4">
        <div>
          <Link className="brand h4" to="/">
            {/* <Img fixed={data.logo.childImageSharp.fixed} className="mr-2" alt="" /> */}
            dovlius
          </Link>
        </div>
        <div className="row h-100">
          <div className="col-lg-7 col-md-10 col-sm-12 d-flex flex-column justify-content-center align-items-start">
            <h2 className="text-white tag">Agencia Marketing Digital</h2>
            <p className="h1 text-white mb-4">Procesos permanentes <br /> de renovación</p>
            <p className="text-white">O! how thy worth with manners may I sing, When thou art all the better part of me? What can mine own praise to mine own self bring? And what is't but mine own when I praise thee? Even for this, let us divided live.</p>
            
            <Link to="/" className="btn rounded-pill mt-3 bg-transparent border shadow">
              Me interesa cotizar
            </Link>
          </div>
          {/* <Img fluid={data.first.childImageSharp.fluid} className="hero-image" /> */}
        </div>

      </div>
    </section>
  )
}

export default Slider
