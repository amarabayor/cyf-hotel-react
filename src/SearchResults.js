import React, { useState } from "react";

import moment from "moment";
import Tableline from "./Tableline";
import CustomerProfile from "./CustomerProfile";

let SearchResults = ({ results }) => {
  let [userid, setUserid] = useState(0);
  function makeSetuserid(id) {
    setUserid(id);
  }
  return (
    <>
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
            return (
              <Tableline
                key={i}
                booking={booking}
                buttonfunction={makeSetuserid}
              />
            );
          })}
        </tbody>
      </table>
      <CustomerProfile id={userid} />
    </>
  );
};

export default SearchResults;
