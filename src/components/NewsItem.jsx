import React from 'react'

const NewsItem =(props)=>{
    let {title,description,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div className="my-3">
        <div className="card" >
          <span className="position-absolute top-0 translatte-middle badge rounded-pill bg-danger" style={ {right:'0',zIndex:'1'}}>{source}</span>
           <img src={imageUrl?imageUrl:"https://images.hindustantimes.com/img/2023/02/01/1600x900/FM_1675229736069_1675229744841_1675229744841.png"} className="card-img-top" alt="..."/>
            <div className="card-body">
                 <h5 className="card-title">{title}</h5>
                 <p className="card-text">{description}</p>
                 <p className="card-text"><small className="text-muted">by {!author?"Unknow":author} on {new Date(date).toGMTString()}</small></p>
                 <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  
}

export default NewsItem
