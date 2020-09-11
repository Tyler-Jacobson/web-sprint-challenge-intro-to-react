import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Char = styled.div`


display: flex;
  color: black;
  font-size: 1.5rem;
  border-radius: 2rem;
  padding: 1rem;
  margin: 0.5rem;
  width: 50%;
  background-color: lightblue;

`

const Character = (props) => {
  const { characterData } = props;

  return (
    <Char className="character">
      <img src={characterData.image} alt={`${characterData.name}`}></img>
      <div className="characterDetails">
        <h2> Name: {characterData.name} </h2>
        <h3> Status: {characterData.status} </h3>
        <h3> Species: {characterData.species} </h3>
        <h3> Location: {characterData.location.name} </h3>
      </div>
    </Char>
  );
};

export default Character;
