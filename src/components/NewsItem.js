import React, { Component } from "react";

// author, date, source 

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl} =  
      this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl?"https://images.hindustantimes.com/img/2022/07/24/1600x900/aaditya_thackeray_1658629218034_1658629257778_1658629257778.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
