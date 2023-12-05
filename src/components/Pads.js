import React, { useEffect, useContext } from 'react';
import { DrumPadContext } from './App'

export default function Pads( {drumPads} ) {

  const { handleSetCurrentSound } = useContext(DrumPadContext)

  //plays sound
  function handlePressPad(drumPad) {
    const audio = document.getElementById(drumPad.text);
    audio.play();
    handleSetCurrentSound(drumPad.name);
  }

  //plays sounds when key is pressed
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      for (let pad in drumPads) {
        if (event.key.toUpperCase() === drumPads[pad].text) {
          const thisPad = drumPads[pad];
          handlePressPad(thisPad);
          const thisElement = document.getElementById(thisPad.name);
          thisElement.className = "pressed-drum-pad";
          setTimeout(() => {
            thisElement.className = "drum-pad"}, 150);
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
            id={drumPad.name}
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
