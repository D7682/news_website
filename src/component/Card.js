import React from 'react'

const Card = ({title, link, images}) => {
    return (
        <div className="col-md-4">
            <div className="card" style={{width: "18rem"}}>
                <img src={images} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href={link} target="_blank" rel="noreferrer" className="btn btn-primary">Article</a>
                </div>
            </div>
        </div>
    )
}

export default Card
