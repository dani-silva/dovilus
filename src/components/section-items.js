import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Items = ({content}) => {
    // console.log(content)
    return(
        <div className="pt-5">
            <div className="row">
                {
                    content.map((item, i) => {
                        return (
                            <div key={i} className="col-lg-4 col-md-6 d-flex flex-column justify-content-center pb-5">
                                { item.tag != "" ? <h4 className="text-dark tag">{item.tag}</h4> : null }
                                <h5 className="pb-3">{item.title}</h5>
                                <p>{item.paragraph}</p>
                                {
                                    item.link
                                    ?
                                        <Link to={item.link.to} className="btn text-primary mr-auto px-0">{item.link.name} <i className="mdi mdi-chevron-right"></i></Link>
                                    :
                                        null
                                }
                            </div>
                        )
                    })
                }
                {/* <div className="col d-flex flex-column justify-content-center">
                    <span className="tag">{tag}</span>
                    <h3 className="text-dark pb-3">{title}</h3>
                    <p>{paragraph}</p>
                    <Link to={link}>Go to page 2</Link>
                </div>
                <div className="col d-flex flex-column justify-content-center">
                    <span className="tag">{tag}</span>
                    <h3 className="text-dark pb-3">{title}</h3>
                    <p>{paragraph}</p>
                    <Link to={link}>Go to page 2</Link>
                </div> */}
            </div>
        </div>
    )
}

Items.propTypes = {
    content: PropTypes.array
}
  
Items.defaultProps = {
    content: [{
        tag: "",
        title: "Titulo",
        paragraph: "Parrafo",
    }]
}

export default Items
