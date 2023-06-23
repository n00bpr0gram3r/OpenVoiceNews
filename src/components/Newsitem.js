import React from 'react'

const NewsItem= (props)=> {
    let { title, description, imageUrl, newsUrl, date, author, source } = props
    return (
      <div>
        <div className="container my-2">
          <div className="card" >
            <div style={{
              display: 'flex',
              justifyContent: 'right',
              position: 'absolute',
              right: 0
            }}>
              <span className=" badge rounded-pill bg-info" style={{ left: '90%' }} >
                {source}
              </span>
            </div>
            <img src={!imageUrl ? "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=114" : imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> {title}...</h5>
              <p className="card-text"><small className="text-muted">Published on {new Date(date).toGMTString()} by {!author ? 'Unknown' : author}</small></p>
              <p className="card-text">{description}...</p>
              <a href={newsUrl} className="btn btn-sm btn-primary " target="__blank">Read full</a>
            </div>
          </div>
        </div>
      </div >
    )
}
export default NewsItem