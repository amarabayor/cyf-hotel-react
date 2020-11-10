import React from "react";

const CustomerProfile = props => {
  return props.id ? <div>CUSTOMER PROFILE:{props.id}</div> : <></>;
};
export default CustomerProfile;
