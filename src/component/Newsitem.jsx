/* eslint-disable no-undef */
import React from "react";

class Newsitem extends React.Component {
  render() {
    let{title,description,urlToImage,url}=this.props
    return (
      <>
        <div className="card my-3 "  style={{ width: "300px" , border:"1px solid black",height:"500px" }}  >
          <img
          src={urlToImage}
            className="card-img-top"
            style={{ width: "100%",height:"200px" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}.....</h5>
            <p className="card-text">
            {description}.....
            </p>
            <a href={url} className="btn btn-sm btn-dark">
              readmore
            </a>

        </div>
        </div>
      </>
    );
  }
}

export default Newsitem;
