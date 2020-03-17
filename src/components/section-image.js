import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const SectionImage = ({tag, title, paragraph, src, link, reverse}) => {

    return(
        <section className="container py-5">
            <div className={`row ${reverse ? "flex-row-reverse" : ""}`}>
                <div className="col-lg-6 col-md-8 col-sm-12 d-flex flex-column justify-content-center">
                    <span className="tag">{tag}</span>
                    <h3 className="text-dark pb-3">{title}</h3>
                    <p>{paragraph}</p>
                    <Link to={link}>Go to page 2</Link>
                </div>
                <div className="col-lg-6 col-md-4 col-sm-12 d-flex flex-column justify-content-center">
                    {src}
                </div>
            </div>
        </section>
    )
}

SectionImage.propTypes = {
    tag: PropTypes.string,
    title: PropTypes.string,
    paragraph: PropTypes.string,
    src: PropTypes.node.isRequired,
    link: PropTypes.string,
    reverse: PropTypes.bool
}
  
SectionImage.defaultProps = {
    tag: "Etiqueta",
    title: "Titulo",
    paragraph: "Parrafo",
    link: "/",
    reverse: false
}

export default SectionImage
