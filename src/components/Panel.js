import React, { useContext } from 'react'
import { DrumPadContext } from './App'
import SoundbankA from './SoundbankA';
import SoundbankB from './SoundbankB';

export default function Panel({currentSound, drumPadsA, activePads, soundbankAisActive}) {
  
  const { handleChangeSoundbank } = useContext(DrumPadContext)
  
  return (
    
    <div className='panel-container'>
        <div className='sound-display-container'>
          <div className='sound-display' id="display">{currentSound}</div>
        </div>
        <div className='soundbank-container'>
          <div className='selected-soundbank'>
            {soundbankAisActive && <SoundbankA/>}
            {!soundbankAisActive && <SoundbankB/>}
          </div>
          <div className='soundbank-button-container'>
            <button 
              className='soundbank-button'
              onClick={handleChangeSoundbank}
            >Soundbank</button> 
          </div>
          
        </div>
        <div className='volume-container'>
          <input 
            name="volume"
            id="volume"
            type="range" 
            className="volume-slider" 
            orient="vertical"
            min="0"
            max="100"
            step="1"
            defaultValue={"50"}
          >
          </input>
          {/* <label for="volume" className='volume-text'>Volume: {}</label> */}
          <div>Volume </div>
        </div>
        
    </div>

  )
}
