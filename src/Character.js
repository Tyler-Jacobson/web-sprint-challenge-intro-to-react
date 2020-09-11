import React, { useState, useEffect } from "react";

const Character = (props) => {
  const { characterData } = props;

  return (
    <div className="character" >
      <img src={characterData.image} alt={`${characterData.name}`} ></img>
      <div className="characterDetails">
        <h2> Name: {characterData.name} </h2>
        <h3> Status: {characterData.status} </h3>
        <h3> Species: {characterData.species} </h3>
        <h3> Location: {characterData.location.name} </h3>
      </div>
    </div>
  );
};

export default Character;
