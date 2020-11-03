import React, { useState } from "react";
import moment from "moment";

const Tableline = props => {
  const [selected, setSelected] = useState("");
  const selecteline = () => {
    if (selected) {
      setSelected("");
    } else {
      setSelected("table-danger");
    }
  };
  const checkIn = moment(props.booking.checkInDate);
  const checkOut = moment(props.booking.checkOutDate);
  return (
    <tr onClick={selecteline} className={selected}>
      <th scope="row">{props.booking.id}</th>
      <td>{props.booking.title}</td>
      <td>{props.booking.firstName}</td>
      <td>{props.booking.surname}</td>
      <td>{props.booking.email}</td>
      <td>{props.booking.roomId}</td>
      <td>{props.booking.checkInDate}</td>
      <td>{props.booking.checkOutDate}</td>
      <td>{checkOut.diff(checkIn, "days")}</td>
      {/*<td>{booking.checkInDate.diff(booking.checkOutDate, "days")}</td>*/}
    </tr>
  );
};
export default Tableline;
