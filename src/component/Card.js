import React from 'react'

const Card = ({title, link, images, text}) => {
    let parse = (t) => {
        let tmp = document.createElement("div");
        tmp.innerHTML = t;
        return tmp.textContent || tmp.innerText || "";
    }

    return (
        <div className="col-md-4">
            <div className="card">
                <img src={images} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{parse(text)}</p>
                    <a href={link} target="_blank" rel="noreferrer" className="btn btn-primary">Article</a>
                </div>
            </div>
        </div>
    )
}

export default Card
