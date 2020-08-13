import React from "react"
import isEmail from 'validator/lib/isEmail'
import PropTypes from "prop-types"
import firebase from 'gatsby-plugin-firebase'

const Form = ({defaultEmail}) => {
    const [dataForm, setForm] = React.useState({
        emailError: false
    })

    const [complete, setComplete] = React.useState('')
    
    let form = React.createRef()
    
    let services = [
        {
            id: "marketing",
            name: "Marketing"
        },
        {
            id: "website",
            name: "Página Web"
        },
        {
            id: "ui/ux",
            name: "Diseño UI/UX"
        },
        {
            id: "ecommerce",
            name: "Tienda en Linea"
        },
        {
            id: "blog",
            name: "Blog"
        },
        {
            id: "app",
            name: "Aplicación Web"
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
                <form ref={form} onSubmit={submit} className="w-100 pb-5 container" >
                    <div className="form-group mb-4">
                        <p className="">Servicios que necesitas *</p>
                        <ul>
                            {
                                services.map((service, i) => {
                                    return(
                                        <li key={i} className="check mr-2">
                                            <input type="checkbox" id={service.id} name={service.id} value={service.name} defaultChecked={service.id == "website"} />
                                            <label htmlFor={service.id} className="btn rounded border py-3">{service.name}</label>
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
                    <div className="form-group mb-4">
                        <p className="">Presupuesto para el proyecto *</p>
                        <ul>
                            <li className="check mr-2">
                                <input type="radio" id="menos-5" name="budget" value="Menos de 5,000" />
                                <label htmlFor="menos-5" className="btn rounded border py-3">Menos de 5,000</label>
                            </li>
                            <li className="check mr-2">
                                <input type="radio" id="entre-5y10" name="budget" value="Entre 5,000 y 10,000" defaultChecked />
                                <label htmlFor="entre-5y10" className="btn rounded border py-3">Entre 5,000 - 10,000</label>
                            </li>
                            <li className="check mr-2">
                                <input type="radio" id="mas-10" name="budget" value="Mas de 10,000" />
                                <label htmlFor="mas-10" className="btn rounded border py-3">Mas de 10,000</label>
                            </li>
                        </ul>

                        <small className="text-muted">Presupuesto en MXN.</small>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="name" className="">Nombre *</label>
                        <input type="text" className="form-control form-control-lg" id="name" name="name" placeholder="Mi empresa" required />
                        <small className="text-muted small">Puede ser el nombre de un encargado o nombre de la empresa.</small>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="email" className="">Correo electrónico de contacto *</label>
                        <input type="email" className={`form-control form-control-lg ${dataForm.emailError ? 'is-invalid' : null}`} id="email" name="email" placeholder="ejemplo@miempresa.com" defaultValue={defaultEmail} required />
                        <div id="validationServer03Feedback" className="invalid-feedback">
                            Porfavor, introduce un correo electronico valido.
                        </div>
                    </div>
                    <div className="form-group mb-4">
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

                    <button type="submit" className="btn btn-primary btn-lg mb-2">
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
