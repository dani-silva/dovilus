import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"

const Cotizar = () => (
  <Layout>
    <SEO title="Cotizar mi proyecto" />
    <section className="py-5">
      <div className="container">
          <h1>Enviar formulario de cotización</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <Form />
      </div>
    </section>
  </Layout>
)

export default Cotizar
