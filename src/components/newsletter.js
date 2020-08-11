import React from "react"
import isEmail from 'validator/lib/isEmail'
import firebase from 'gatsby-plugin-firebase'
import moment from 'moment'

const Form = () => {
    const [email, setEmail] = React.useState(false)
    const [submitStatus, setSubmitStatus] = React.useState('')

    let form = React.createRef()
    
    let submit = (e) => {
        e.preventDefault()
        // let database = firebase.database()
        setEmail(true)
        
        if(isEmail(form.current.email.value)){
    
            firebase.database()
                .ref(`newsletter/ ${moment().format()}`)
                .set({
                    email: form.current.email.value,
                    date: moment().format(),
                    status: true
                }, (err) => {
                    err
                    ? setSubmitStatus('error')
                    : setSubmitStatus('complete') 
                })

        } else {
            setEmail(true)
        }

    }

    return(
        
        <form ref={form} onSubmit={submit} className="w-100" >
            <label htmlFor="newslatter" className="form-text text-dark mb-4">Al ingresar tu correo electrónico, aceptas recibir correos electrónicos de marketing por parte de <span className="text-primary">dovlius</span>.</label>
            <div className="form-group d-flex">
                <input type="email" name="email" id="newslatter" className="form-control mr-2" placeholder="mi.correo@example.com" required />
                <button type="submit" className="btn btn-primary rounded">
                    {
                        submitStatus == 'complete'
                        ? <i className="mdi mdi-check-bold"></i>
                        : 
                            submitStatus == "error"
                            ? <i className="mdi mdi-close-thick"></i>
                            : <i className="mdi mdi-email-send-outline"></i>
                    }
                </button>
            </div>
            
            <small className="small text-muted">Puedes cancelar la suscripción en cualquier momento. 
            {/* <Link to="/" className="text-dark">Lee nuestra Política de privacidad.</Link> */}
            </small>
        </form>
    )
}

export default Form
