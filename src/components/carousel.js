import React from "react"
// import {useState} from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Slider = () => {
  const data = useStaticQuery(graphql`
    query {
      planet: file(relativePath: { eq: "carousel/planet.jpg" }) {
        childImageSharp {
          fixed(height: 60, width: 100) {
            ...GatsbyImageSharpFixed
          },
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      museum: file(relativePath: { eq: "carousel/museum.jpg" }) {
        childImageSharp {
          fixed(height: 60, width: 100) {
            ...GatsbyImageSharpFixed
          },
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      renovation: file(relativePath: { eq: "carousel/renovation.jpg" }) {
        childImageSharp {
          fixed(height: 60, width: 100) {
            ...GatsbyImageSharpFixed
          },
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      esfera: file(relativePath: { eq: "carousel/esfera.jpg" }) {
        childImageSharp {
          fixed(height: 60, width: 100) {
            ...GatsbyImageSharpFixed
          },
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(relativePath: { eq: "carousel/vector.png" }) {
        childImageSharp {
          fixed(height: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const [carousel, setCarousel] = React.useState(0)
  const [progress, setProgress] = React.useState(1)

  const handleSlide = (slide) => {
    // clearInterval(intervalProgress)
    // clearInterval(intervalCarousel)
    setCarousel(slide)
    // setProgress(1)
  }

  const sliders = [
    {
      tag: 'Vision',
      body: <>
        <h6 className="tag text-light">El mundo te espera</h6>
        <h2 className="h1 text-white mb-4">Comparte la vision que te motiva a seguir a ti y a tus colaboradores</h2>
        <p className="text-light w-75">Nuestro proposito es ayudar a las empresas a crecer en internet de manera rapida y segura, con herramientas tecnologicas de vanguardia y donde ellas seas las protagonista.</p>
        <Link to="/cotizar" className="btn btn-primary mt-4" >Me interesa un proyecto</Link>
      </>,
      image: data.planet.childImageSharp
    },
    {
      tag: 'Innovacion',
      body: <>
        <h6 className="tag text-light">Desarrollo de soluciones digitales</h6>
        <h2 className="h1 text-white mb-4">Procesos permanentes <br /> de inovación y renovación</h2>
        <p className="text-light w-75">Nuestro proposito es ayudar a las empresas a crecer en internet de manera rapida y segura, con herramientas tecnologicas de vanguardia y donde ellas seas las protagonista.</p>
        <Link to="/cotizar" className="btn btn-primary mt-4" >Me interesa un proyecto</Link>
      </>,
      image: data.museum.childImageSharp
    },
    {
      tag: 'Renovación',
      body: <>
        <h6 className="tag text-light">Automatiza procesos</h6>
        <h2 className="h1 text-white mb-4">Supera los retos del mundo con herramientas digitales que mejoran resultados</h2>
        <p className="text-light w-75">Nuestro proposito es ayudar a las empresas a crecer en internet de manera rapida y segura, con herramientas tecnologicas de vanguardia y donde ellas seas las protagonista.</p>
        <Link to="/cotizar" className="btn btn-primary mt-4" >Me interesa un proyecto</Link>
      </>,
      image: data.renovation.childImageSharp
    },
    {
      tag: 'Crecimiento',
      body: <>
        <h6 className="tag text-light">Cambio estratégico</h6>
        <h2 className="h1 text-white mb-4">Mejora tu negocio con estretegia, tecnologia, diseño y dovlius.</h2>
        <p className="text-light w-75">Si buscas resultados distintos, no hagas siempre lo mismo.</p>
        <Link to="/cotizar" className="btn btn-primary mt-4" >Me interesa un proyecto</Link>
      </>,
      image: data.esfera.childImageSharp
    }
  ]

  React.useEffect(() => {
    const intervalProgress = setInterval(() => {
      setProgress(prevProgress => prevProgress == 100 ? 1 : prevProgress + 1)

      if(progress == 100) {
        setCarousel(prevCarousel => {
          if(prevCarousel >= 0 && prevCarousel < sliders.length - 1) {
            return prevCarousel + 1
          } else { 
            return 0
          }
        })
      }
    }, 150);
    return () => clearInterval(intervalProgress);
  }, [progress, carousel]);

  return (
    <section className="hero p-1">
      <div className="bg-gradient rounded h-100 overflow-hidden position-relative">

        <Img fluid={sliders[carousel].image.fluid} className="position-absolute h-100 w-100 animated fadeIn" />

        <div className="container-lg h-100 d-flex flex-column justify-content-between py-4">
          <div style={{zIndex: '15'}}>
            <Link className="brand h4" to="/">
              {/* <Img fixed={data.logo.childImageSharp.fixed} className="mr-2" alt="" /> */}
              dovlius
            </Link>
          </div>

          <div className="row h-100" style={{zIndex: '5'}}>
            <div className="col-lg-9 col-md-10 col-sm-12 d-flex flex-column justify-content-end justify-content-md-center align-items-start">
              {
                sliders[carousel].body
              }
            </div>
            
            <div className="d-flex col-lg-3 col-md-2 flex-row flex-md-column align-items-end justify-content-md-center justify-content-start">
              {
                sliders.map( (slider, i) => {
                  return(
                    <button onClick={() => handleSlide(i)} key={i} className={`position-relative btn btn-hover shadow ${carousel == i ? 'btn-primary' : 'btn-light'} p-0 mr-4 mr-md-0 mt-md-4 animated bounceIn`}>
                      <div className="bg-light rounded overflow-hidden" style={{height: "60px", width: "100px"}}>
                        <Img fixed={slider.image.fixed} />
                      </div>
                      <small className={`badge ${carousel == i ? 'badge-primary' : 'badge-light'} position-absolute`} style={{zIndex: '10', top: '5px', left: '5px'}}>{slider.tag}</small>
                      {
                        carousel == i
                        ?
                          <div className="progress w-100 h-100 position-absolute" style={{zIndex: '5', top: '0', background: 'none'}}>
                            <div className="progress-bar h-100" style={{width: `${progress}%`, background: 'rgba(0,112,186,.25)'}}></div>
                          </div>
                        : null
                      }
                    </button>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider
