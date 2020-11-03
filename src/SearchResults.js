import React from "react";

import moment from "moment";
import Tableline from "./Tableline";

let SearchResults = ({ results }) => {
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check in Date</th>
          <th scope="col">Check out date</th>
          <th scope="col">N° of nights</th>
        </tr>
      </thead>
      <tbody>
        {results.map((booking, i) => {
          return <Tableline key={i} booking={booking} />;
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
