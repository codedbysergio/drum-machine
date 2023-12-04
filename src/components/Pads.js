import React, { useState, useEffect, useContext } from 'react';
import { DrumPadContext } from './App'

export default function Pads( {drumPads} ) {

  const { handleSetCurrentSound } = useContext(DrumPadContext)

  //plays sound
  function handlePressPad(selector) {
    const audio = document.getElementById(selector.text);
    audio.play();
    handleSetCurrentSound(selector.name);
  }

  //plays sounds when key is pressed
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      for (let pad in drumPads) {
        if (event.key.toString().toUpperCase() === drumPads[pad]["text"]) {
          handlePressPad(drumPads[pad]);
        }
      }
    })
  })

  return (

    <div className='pads-container'>
        {drumPads.map((drumPad) => 
          <div 
            key={drumPad.src}
            className='drum-pad' 
            id={drumPad.src}
            onClick={() => handlePressPad(drumPad)}
          >
            {drumPad.text}
            <audio 
              src={drumPad.src}
              className="clip"
              id={drumPad.text}
            >
            </audio>
          </div>)}
    </div>
    
  )
}
