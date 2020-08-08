import React from "react"

import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="container-lg py-5 text-center">
      <h1>Página no encontrada</h1>
      <p>Lo sentimos, al parecer la página que buscas no existe.</p>
      <Link to="/" className="btn btn-primary">Ir a la página de inicio</Link>
    </section>
  </Layout>
)

export default NotFoundPage
