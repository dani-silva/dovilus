import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Form = ({content}) => {
    const [dataForm, setForm] = React.useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        services: [],
        money: 0,
        time: ''
    })
    console.log(content)
    return(
        // <div className="w-100 h-100 position-fixed bg-dark" style={{zIndex: '2000'}}>
            <section className="bg-light">
                Formulario
            </section>
        // </div>
    )
}

Form.propTypes = {
}
  
Form.defaultProps = {
}

export default Form
