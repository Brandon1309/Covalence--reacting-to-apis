import React, { useEffect } from "react"
import { useState, render } from "react-dom";
import FilmData from "./FilmData";
import PeopleData from "./PeopleData";

const LoadFilmsButton = (props) => {
  // try 1
  const [showFilms, setShowFilms] = React.useState(false);
  const [people, setPeople] = React.useState(false)

  const handlePeopleClickEvent = () => {
    setPeople(!people);
    console.log(people);

}
  const handleFilmsClickEvent = () => {
    setShowFilms(!showFilms)
    console.log(showFilms);

    
  }
  if(showFilms) {
    return (
      <div>
        <FilmData wantFilms={true} />
      </div>
    )
  }  else if (people) {
    return(
      <div>
    <PeopleData />

      </div>
    )
  } else {
    return (
    <div>
    <button onClick={handleFilmsClickEvent}>Load Films</button>
    <button onClick={handlePeopleClickEvent}>Load People</button>

    </div>
    )
  }

}
export default LoadFilmsButton;