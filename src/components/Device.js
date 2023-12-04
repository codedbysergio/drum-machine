import React from 'react'
import Header from './Header';
import Panel from './Panel';
import Pads from './Pads';


export default function Device( {drumPads, currentSound, drumPadsA, soundbankAisActive} ) {
  return (
    <div className='device' id="drum-machine">
        <Header /> {/* power-button and device name */}
        <Pads drumPads={drumPads}/>   {/* drum machine pads */}
        <Panel 
          currentSound={currentSound} 
          activePads={drumPads} 
          drumPadsA={drumPadsA}
          soundbankAisActive={soundbankAisActive}
        />  {/* sound bank and volume controls */}
    </div>
  )
}
