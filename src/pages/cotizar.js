import React from "react"

import { Link } from "gatsby" 

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"

const Cotizar = () => (
  <Layout>
    <SEO title="Cotizar mi proyecto" />
    <section className="py-5">
      <div className="px-5 px-md-3 container-lg">
          <h1 className="mb-4">Solicita una cotización</h1>
          <p className="mb-4">Escribenos un correo a <span className="text-dark">info@dovlius.com</span> o marcanos a <span className="text-dark">646 160 8807</span> para platicar de tu proyecto, solicita tu cotización sin costo.</p>
          {/* <Form /> */}
          <p className="mb-2">Tambien puedes contactarnos en nuestras redes sociales:</p>
          <ul>
            <li><Link to='https://fb.com/dovlius' className="text-primary mt-4" target="_blank">facebook.com/dovlius</Link></li>
            <li><Link to='https://twitter.com/dovlius' className="text-primary mt-2" target="_blank">twitter.com/dovlius</Link></li>
            <li><Link to='https://instagram.com/dovlius' className="text-primary mt-2" target="_blank">instagram.com/dovlius</Link></li>
            <li><Link to='https://behance.com/dovlius' className="text-primary mt-2" target="_blank">behance.com/dovlius</Link></li>
          </ul>
      </div>
    </section>
  </Layout>
)

export default Cotizar
