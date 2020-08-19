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
              <small className="tag text-muted">Contactanos</small>
              {/* <h1 className="h2">¿Te interesa un projecto con dovlius?</h1> */}
              <p className="h4 text-dark">info@dovlius.com</p>
              <p className="h4 text-dark mb-5">646 160 8807</p>
  
              <small className="text-muted tag">Siguenos en redes sociales:</small>
              <ul>
                <li><Link to='https://linkedin.com/company/dovlius' className="text-primary mt-4" target="_blank">Linkedin</Link></li>
                <li><Link to='https://fb.com/dovlius' className="text-primary mt-4" target="_blank">Facebook</Link></li>
                <li><Link to='https://twitter.com/dovlius' className="text-primary mt-2" target="_blank">Twitter</Link></li>
                <li><Link to='https://instagram.com/dovlius' className="text-primary mt-2" target="_blank">Instagram</Link></li>
                <li><Link to='https://behance.com/dovlius' className="text-primary mt-2" target="_blank">Behance</Link></li>
              </ul>
            </div>
            <div className="col-12 col-md-7">
              <small className="tag text-muted mb-0">Contratanos</small>
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
