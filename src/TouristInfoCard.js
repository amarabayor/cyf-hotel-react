import React from "react";

const TouristInfoCard = () => {
  return (
    <div className="container row row-cols-2 ml-5 mt-3">
      <div className="card">
        <img src="" className="card-img-top" alt="" />
        <div className="card-body">
          <a href="http://peoplemakeglasgow.com" className="btn btn-primary">
            Glagow
          </a>
        </div>
      </div>
      <div className="card">
        <img src="..." className="card-img-top" alt="" />
        <div className="card-body">
          <a href="http://visitmanchester.com" className="btn btn-primary">
            Manchester City
          </a>
        </div>
      </div>
      <div className="card">
        <img src="" className="card-img-top" alt="" />
        <div className="card-body">
          <a href="http://visitlondon.com" className="btn btn-primary">
            London
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCard;
