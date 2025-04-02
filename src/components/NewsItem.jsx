import React from "react";
import "./NewsItem.css"
const NewsItem = ({title,description,author,image}) => {
  return (
    <>
      
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 " style={{ maxWidth: "340px" }}>
          <img src={image} style={{height:"230px",width:"320px"}}  className="card-img-top" alt="..." />
          <div className="card-body " >
            <h5 className="card-title">{typeof title === 'string' ? title.slice(0, 50) : title}</h5>
            <p className="card-text">
            {typeof description === 'string' ? description.slice(0, 90) : "News is not showing because of something has gone unusual in server"}
            </p>
            <a href="/" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
        
   
    </>
  );
};

export default NewsItem;
