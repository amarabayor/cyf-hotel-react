import React from "react";

const ButtonShowProfile = props => {
  return <button onClick={props.buttonfunction(props.id)}>Show Profile</button>;
};
export default ButtonShowProfile;
