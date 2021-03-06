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
          fluid(quality: 75) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      museum: file(relativePath: { eq: "carousel/museum.jpg" }) {
        childImageSharp {
          fixed(height: 60, width: 100) {
            ...GatsbyImageSharpFixed
          },
          fluid(quality: 75) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      renovation: file(relativePath: { eq: "carousel/renovation.jpg" }) {
        childImageSharp {
          fixed(height: 60, width: 100) {
            ...GatsbyImageSharpFixed
          },
          fluid(quality: 75) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      esfera: file(relativePath: { eq: "carousel/esfera.jpg" }) {
        childImageSharp {
          fixed(height: 60, width: 100) {
            ...GatsbyImageSharpFixed
          },
          fluid(quality: 75) {
            ...GatsbyImageSharpFluid
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
      tag: 'Visión',
      body: <>
        <h6 className="tag text-light">El mundo te espera</h6>
        <h2 className="text-center h2 text-white mb-4">Muestrate al mundo lo que ofreces y la vision por la que trabajas.</h2>
        <p className="text-center text-light w-75 d-none d-md-block">Si quieres tener presencia local, regional o internacional para dar el siguiente paso a tu empresa y alcanzar tus metas, empieza ahora en internet.</p>
        {/* <Link to="/cotizar" className="btn btn-primary mt-4" >Me interesa un proyecto <span className="mdi mdi-arrow-right ml-2"></span></Link> */}
      </>,
      image: data.planet.childImageSharp
    },
    {
      tag: 'Innovación',
      body: <>
        <h6 className="tag text-light">Desarrollo de soluciones digitales</h6>
        <h2 className="text-center h2 text-white mb-4">Procesos permanentes de innovación y renovación de procesos.</h2>
        <p className="text-center text-light w-75 d-none d-md-block">Nuestro proposito es ayudar a las empresas a crecer en internet de manera rapida y segura, con herramientas tecnologicas de vanguardia y donde ellas seas las protagonista.</p>
        {/* <Link to="/cotizar" className="btn btn-primary mt-4" >Me interesa un proyecto <span className="mdi mdi-arrow-right ml-2"></span></Link> */}
      </>,
      image: data.museum.childImageSharp
    },
    {
      tag: 'Renovación',
      body: <>
        <h6 className="tag text-light">Automatiza procesos</h6>
        <h2 className="text-center h2 text-white mb-4">Supera los retos del mundo con herramientas digitales que mejoran resultados.</h2>
        <p className="text-center text-light w-75 d-none d-md-block">La innovación tecnologia y la mejora continua le daran el impulso a tu negocio para seguir adelante y creciendo.</p>
        {/* <Link to="/cotizar" className="btn btn-primary mt-4" >Me interesa un proyecto <span className="mdi mdi-arrow-right ml-2"></span></Link> */}
      </>,
      image: data.renovation.childImageSharp
    },
    {
      tag: 'Crecimiento',
      body: <>
        <h6 className="tag text-light">Cambio estratégico</h6>
        <h2 className="text-center h2 text-white mb-4">Mejora tu negocio con estratégia, tecnología y diseño.</h2>
        <p className="text-center text-light w-75 d-none d-md-block">Si buscas resultados distintos, no hagas siempre lo mismo.</p>
        {/* <Link to="/cotizar" className="btn btn-primary mt-4" >Me interesa un proyecto <span className="mdi mdi-arrow-right ml-2"></span></Link> */}
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
    <section className="container-lg my-5">
      <div className="bg-gradient rounded-20 h-100 overflow-hidden position-relative" style={{minHeight: '500px'}}>

        <Img fluid={sliders[carousel].image.fluid} className="position-absolute h-100 w-100 animated fadeIn" />

        <div className="container-lg d-flex flex-column py-5">
          {/* <div style={{zIndex: '15'}}>
            
          </div> */}

            <div className="col-lg-12 d-flex flex-column align-items-center justify-content-center py-5 my-5">
              {
                sliders[carousel].body
              }
            </div>
        </div>
      </div>
      
      <div className="d-none d-md-flex col-lg-12 align-items-end justify-content-center" style={{transform: "translateY(-50px)"}}>
        {
          sliders.map( (slider, i) => {
            return(
              <button onClick={() => handleSlide(i)} key={i} className={`position-relative btn btn-hover shadow ${carousel == i ? 'btn-primary' : 'btn-light'} p-0 m-2 animated bounceIn`}>
                <div className="item-hero bg-light overflow-hidden">
                  <Img fixed={slider.image.fixed} />
                </div>
                <small className={`badge ${carousel == i ? 'badge-primary' : 'badge-light'} position-absolute`} style={{zIndex: '10', top: '5px', left: '5px'}}>{slider.tag}</small>
                {
                  carousel == i
                  ?
                    <div className="progress w-100 h-100 position-absolute" style={{zIndex: '5', top: '0', background: 'none'}}>
                      <div className="progress-bar h-100" style={{width: `${progress}%`, background: 'rgba(0,112,186,.3)'}}></div>
                    </div>
                  : null
                }
              </button>
            )
          })
        }
      </div>
    </section>
  )
}

export default Slider
