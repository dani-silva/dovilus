import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import isEmail from 'validator/lib/isEmail'
import PropTypes from "prop-types"
import firebase from 'gatsby-plugin-firebase'

const Form = ({defaultEmail}) => {

  const data = useStaticQuery(graphql`
  query {
      design: file(relativePath: { eq: "icons/design.png" }) {
        childImageSharp {
          fluid(quality: 75) {
              ...GatsbyImageSharpFluid
          }
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ssl: file(relativePath: { eq: "icons/ssl.png" }) {
        childImageSharp {
          fluid(quality: 75) {
              ...GatsbyImageSharpFluid
          }
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      server: file(relativePath: { eq: "icons/server.png" }) {
        childImageSharp {
          fluid(quality: 75) {
              ...GatsbyImageSharpFluid
          }
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      develop: file(relativePath: { eq: "icons/develop.png" }) {
        childImageSharp {
          fluid(quality: 75) {
              ...GatsbyImageSharpFluid
          }
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      website: file(relativePath: { eq: "icons/website.png" }) {
        childImageSharp {
          fluid(quality: 75) {
              ...GatsbyImageSharpFluid
          }
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ecommerce: file(relativePath: { eq: "icons/ecommerce.png" }) {
        childImageSharp {
          fluid(quality: 75) {
              ...GatsbyImageSharpFluid
          }
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      email: file(relativePath: { eq: "icons/email.png" }) {
        childImageSharp {
          fluid(quality: 75) {
              ...GatsbyImageSharpFluid
          }
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      marketing: file(relativePath: { eq: "icons/marketing.png" }) {
        childImageSharp {
          fluid(quality: 75) {
              ...GatsbyImageSharpFluid
          }
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mobile: file(relativePath: { eq: "icons/mobile.png" }) {
        childImageSharp {
          fluid(quality: 75) {
              ...GatsbyImageSharpFluid
          }
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

    const [dataForm, setForm] = React.useState({
        emailError: false
    })

    const [complete, setComplete] = React.useState('')
    
    let form = React.createRef()
    
    let services = [
        {
            id: "website",
            name: "Página Web",
            image: data.website.childImageSharp.fixed
        
        },
        {
            id: "ecommerce",
            name: "Tienda en Linea",
            image: data.ecommerce.childImageSharp.fixed
        
        },
        {
            id: "marketing",
            name: "Marketing Digital",
            image: data.marketing.childImageSharp.fixed
        
        },
        {
            id: "ui/ux",
            name: "Diseño UI/UX",
            image: data.design.childImageSharp.fixed
        
        },
        {
            id: "develops",
            name: "Desarrollo web",
            image: data.develop.childImageSharp.fixed
        
        },
        {
            id: "app",
            name: "Aplicación móvil",
            image: data.mobile.childImageSharp.fixed
        
        },
        {
            id: "email",
            name: "Correo electrónico",
            image: data.email.childImageSharp.fixed
        
        },
        {
            id: "hosting",
            name: "Hosting y Dominio",
            image: data.server.childImageSharp.fixed
        
        },
        {
            id: "ssl",
            name: "Certificado SSL",
            image: data.ssl.childImageSharp.fixed
        
        },
    ]
    
    let submit = (e) => {
        e.preventDefault()
        // let database = firebase.database()
        setComplete('loading')
        setForm({emailError: false})

        if(isEmail(form.current.email.value)){
            let data = {
                name: form.current.name.value,
                email: form.current.email.value,
                details: form.current.details.value,
                budget: form.current.budget.value,
                services: []
            }
    
            services.map(service => {
                // console.log(service.name, form.current[service.id].checked)
                if(form.current[service.id].checked) data.services.push(service.name)
            })
    
            firebase.database()
                .ref(`clientes/ ${data.name}`)
                .set(data, (err) => {
                    err
                    ? setComplete('error')
                    : setComplete('complete') 
                })

        } else {
            setComplete('errorEmail')
            setForm({
                emailError: true
            })
        }

    }

    return(
        // <div className="w-100 h-100 position-fixed bg-dark" style={{zIndex: '2000'}}>
            <section className="mt-5">
                <form ref={form} onSubmit={submit} className="w-100 pb-5" >
                    <div className="form-group mb-5">
                        <p className="">Selecciona los servicios que te interesan *</p>
                        <ul>
                            {
                                services.map((service, i) => {
                                    return(
                                        <li key={i} className="check mr-2">
                                            <input type="checkbox" id={service.id} name={service.id} value={service.name} defaultChecked={service.id == 'website'} />
                                            <label htmlFor={service.id} className="btn rounded border py-3"><Img fixed={service.image} className="mb-2" /><p className="mb-0">{service.name}</p></label>
                                        </li>
                                    )
                                })
                            }
                            {/* <li className="check mr-2">
                                <input type="checkbox" id="website" name="website" value="Página web" defaultChecked />
                                <label htmlFor="website" className="btn rounded border py-3">Página Web</label>
                            </li>
                            <li className="check mr-2">
                                <input type="checkbox" id="ui/ux" name="ui/ux" value="Diseño UI / UX" />
                                <label htmlFor="ui/ux" className="btn rounded border py-3">Diseño UI / UX</label>
                            </li>
                            <li className="check mr-2">
                                <input type="checkbox" id="marketing" name="marketing" value="Marketing Digital" />
                                <label htmlFor="marketing" className="btn rounded border py-3">Marketing Digital</label>
                            </li>
                            <li className="check mr-2">
                                <input type="checkbox" id="blog" name="blog" value="Blog" />
                                <label htmlFor="blog" className="btn rounded border py-3">Blog</label>
                            </li>
                            <li className="check mr-2">
                                <input type="checkbox" id="ecommerce" name="ecommerce"  value="Tienda en linea" />
                                <label htmlFor="ecommerce" className="btn rounded border py-3">Tienda en Linea</label>
                            </li> */}
                        </ul>
                    </div>
                    <div className="form-group mb-5">
                        <p className="">Presupuesto del que dispones *</p>
                        <ul>
                            <li className="check mr-2">
                                <input type="radio" id="menos-5" name="budget" value="Menos de $5,000" />
                                <label htmlFor="menos-5" className="btn rounded border py-3">Menos de $5,000</label>
                            </li>
                            <li className="check mr-2">
                                <input type="radio" id="entre-5y10" name="budget" value="Entre $5,000 - $15,000" defaultChecked />
                                <label htmlFor="entre-5y10" className="btn rounded border py-3">Entre $5,000 - $15,000</label>
                            </li>
                            <li className="check mr-2">
                                <input type="radio" id="entre-15y30" name="budget" value="Entre $15,000 - $30,000" />
                                <label htmlFor="entre-15y30" className="btn rounded border py-3">Entre $15,000 - $30,000</label>
                            </li>
                            <li className="check mr-2">
                                <input type="radio" id="mas-30" name="budget" value="Mas de $30,000" />
                                <label htmlFor="mas-30" className="btn rounded border py-3">Mas de $30,000</label>
                            </li>
                        </ul>

                        <small className="text-muted">Presupuesto en MXN.</small>
                    </div>
                    <div className="form-group mb-5">
                        <label htmlFor="name" className="">Nombre *</label>
                        <input type="text" className="form-control form-control-lg" id="name" name="name" placeholder="Mi empresa" required />
                        <small className="text-muted small">Puede ser el nombre de un encargado o nombre de la empresa.</small>
                    </div>
                    <div className="form-group mb-5">
                        <label htmlFor="email" className="">Correo electrónico de contacto *</label>
                        <input type="email" className={`form-control form-control-lg ${dataForm.emailError ? 'is-invalid' : null}`} id="email" name="email" placeholder="ejemplo@miempresa.com" defaultValue={defaultEmail} required />
                        <div id="validationServer03Feedback" className="invalid-feedback">
                            Porfavor, introduce un correo electronico valido.
                        </div>
                    </div>
                    <div className="form-group mb-5">
                        <label htmlFor="details">Detalles del proyecto (opcional)</label>
                        <textarea className="form-control form-control-lg" id="details" rows="3"></textarea>
                    </div>
                    {
                        
                        complete == 'complete'
                        ?
                            <div className="alert alert-success">
                                Tu solicitud se envio exitosamente.
                            </div>
                        : 
                            complete == 'error'
                            ?
                                <div className="alert alert-danger">
                                    Hubo un error que no permite enviar la solicitud.
                                </div>
                            : null
                    }

                    <button type="submit" className="btn btn-primary btn-lg mb-2 mx-1">
                        {
                            complete.length == "loading"
                            ? "Enviando..."
                            : "Completar"
                        }
                    </button>
                </form>
            </section>
        // </div>
    )
}

Form.propTypes = {
    defaultEmail: PropTypes.string
}
  
Form.defaultProps = {
    defaultEmail: ''
}

export default Form
