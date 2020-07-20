import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const SectionImage = ({tag, title, paragraph, src, link, reverse, list}) => {

    return(
        <section className="container-lg py-5 my-5">
            <div className={`row ${reverse ? "flex-row-reverse" : ""}`}>
                <div className="col-lg-6 col-md-7 col-sm-12 d-flex flex-column justify-content-center align-items-start">
                    <h6 className="tag">{tag}</h6>
                    <h3 className="text-primary pb-3">{title}</h3>
                    {
                        paragraph.map((p, i) => {
                            return(
                                <p key={i}>{p}</p>
                            )
                        })
                    }
                    {
                        list
                        ?
                            <ul className="mb-4">
                                {
                                    list.map((li, i) => {
                                        return(
                                            <li key={i} className="small mb-2"><i className="mdi mdi-chevron-right"> </i>{li}</li>
                                        )
                                    })
                                }
                            </ul>
                        : null
                    }
                    {
                        link
                        ?
                            <Link to={link.to} className="btn text-primary pb-4 px-0">{link.title} <i className="mdi mdi-chevron-right"></i></Link>
                        : null
                    }
                </div>
                {/* <div className="d-none d-lg-block col-lg-1"></div> */}
                <div className="col-lg-6 col-md-5 col-sm-12 d-flex flex-column justify-content-center slideInUp animated">
                    {src}
                </div>
            </div>
        </section>
    )
}

SectionImage.propTypes = {
    tag: PropTypes.string,
    title: PropTypes.string,
    paragraph: PropTypes.array,
    src: PropTypes.node.isRequired,
    link: PropTypes.object,
    reverse: PropTypes.bool,
    list: PropTypes.array
}
  
SectionImage.defaultProps = {
    tag: "",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    paragraph: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lobortis cursus ut in hac sit pellentesque sed pharetra. Augue quam risus suspendisse tempus volutpat iaculis et. Lectus in adipiscing amet iaculis at quam. Quisque nisl at nam."],
    reverse: false
}

export default SectionImage
