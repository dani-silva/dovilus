import React from "react"

import {Link} from 'gatsby'

const BreadCrumbs = (props) => (
    <section className="text-muted">
        <ul className="d-flex my-2">
            <li><Link to="/" className="btn text-dark">Inicio</Link><i className="small mdi mdi-chevron-right text-dark"></i></li>
            {
                props.list.map( (link, i) => {
                    return link.to
                    ? <li key={i}><Link to={link.to} className="btn text-dark">{link.name}</Link><i className="small mdi mdi-chevron-right text-dark"></i></li>
                    : <li key={i} className="btn text-dark disabled">{link.name}</li>
                })
            }
        </ul>
    </section>
)

export default BreadCrumbs

     
