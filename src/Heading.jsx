import React from "react";

function Heading(props) {
  return (
    <>
      <div className="title">
        <div className="container">
          <img src={props.imgsrc} alt="blog1" className="image" />
          <div className="card-info">
            <h1>{props.title} </h1>
            <a href={props.link} target="blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Heading;
