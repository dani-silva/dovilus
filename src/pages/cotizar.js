import React from "react"

import { Link } from "gatsby" 

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"

const Cotizar = ({location}) => {
  let state =  location.state ? location.state : {defaultEmail: ""}

  return (
    <Layout>
      <SEO title="Contratanos" />
      <section className="py-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 col-md-5 mb-5">
              <small className="tag text-muted">Contactanos directamente</small>
              {/* <h1 className="h2">¿Te interesa un projecto con dovlius?</h1> */}
              <p className="h4 text-dark">info@dovlius.com</p>
              <p className="h4 text-dark mb-5">646 160 8807</p>
  
              <small className="text-muted tag">Siguenos en redes sociales:</small>
              <ul className="mb-5">
                <li><Link to='https://linkedin.com/company/dovlius' className="text-primary mt-4" target="_blank">Linkedin</Link></li>
                <li><Link to='https://fb.com/dovlius' className="text-primary mt-4" target="_blank">Facebook</Link></li>
                <li><Link to='https://twitter.com/dovlius' className="text-primary mt-2" target="_blank">Twitter</Link></li>
                <li><Link to='https://instagram.com/dovlius' className="text-primary mt-2" target="_blank">Instagram</Link></li>
                <li><Link to='https://behance.com/dovlius' className="text-primary mt-2" target="_blank">Behance</Link></li>
              </ul>

              <small className="text-muted tag">Nuestro proceso</small>
              <ul className="list-group mt-2 mb-5">
                <li className="list-group-item"> 
                  <h6>Nos comunicaremos contigo en 24 horas</h6>
                  <p className="text-muted mb-0">para atender sus necesidades lo más rápido posible.</p>
                </li>
                <li className="list-group-item"> 
                  <h6>Prepararemos una estimación del proyecto</h6>
                  <p className="text-muted mb-0">describiendo la composición del equipo, el cronograma y los costos.</p>
                </li>
                <li className="list-group-item"> 
                  <h6>Realizaremos una revisión de código</h6>
                  <p className="text-muted mb-0">gratuita si ya tiene un sistema existente o una parte de él.</p>
                </li>
                
              </ul>
            </div>
            <div className="col-12 col-md-7">
              <small className="tag text-muted mb-0">Solicita una cotización</small>
              <h1 className="h2">¿Te interesa un proyecto con nosotros?</h1>
              <Form defaultEmail={state.defaultEmail} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Cotizar
