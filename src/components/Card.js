import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="tc bg-light-purple dib br3 pa3 ma2 grow">
      <img alt="profile-pic" src={`https://robohash.org/${name + id}`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;