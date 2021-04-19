import React, { useEffect } from "react"
import { useState, render } from "react-dom";
import FilmData from "./FilmData";
const LoadFilmsButton = (props) => {
  // try 1
  const [showFilms, setShowFilms] = useState(true)
  let wantToShowFilms = true;

  const handleClickEvent = () => {
    wantToShowFilms = true;
    console.log(wantToShowFilms);
  }

  return (
    <div>

      <FilmData wantFilms={true} />
    </div>

  )
  // if (wantToShowFilms) {
  //   return <FilmData wantFilms={true} />
  // } else {
  //   return <button onClick={handleClickEvent}>Load Films</button>
  //   return (
  //     <div>

  //       {(wantFilms) ? <FilmData /> : <button onClick={handleClickEvent}>Load Films</button>}

  //     </div>
  //   )
  // }

  /////Try 2
  // const [show, setShow] = useState(false);

  // const handleClickEvent = () => {
  //   setShow(current => current)
  // }
  // useEffect(() => {
  //   console.log(show);
  // }, [show])

  // if (show) {
  //   return (
  //     <FilmData wantFilms={true} />
  //   )
  // }
  // else {
  //   return <button onClick={handleClickEvent}>Load Films</button>
  // }

  return (
    <div>
      <button onClick={handleClickEvent}>Load Films</button>
    </div>
  )



}
export default LoadFilmsButton;