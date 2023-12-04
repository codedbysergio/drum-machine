import React, { useState } from 'react';
import '../css/app.css';
import Device from './Device';
import drumPadsA from '../data/drumPadsA.json';
import drumPadsB from '../data/drumPadsB.json';

export const DrumPadContext = React.createContext()

function App() {

  const [activePads, setActivePads ] = useState(drumPadsA)
  const [currentSound, setCurrentSound] = useState("_");
  const [soundbankAisActive, setSoundbankAisActive ] = useState(true);

  const drumContextValue = {
    handleChangeSoundbank,
    handleSetCurrentSound
  }

  function handleChangeSoundbank() {
    let newPads = activePads
    if (newPads === drumPadsA) {
      setActivePads(drumPadsB)
    }
    else { setActivePads(drumPadsA) }
    let currentlyActive = soundbankAisActive;
    setSoundbankAisActive(!currentlyActive);
  }

  function handleSetCurrentSound(sound) {
    let newSound = sound;
    setCurrentSound(newSound);
  }

  return (
    <div className='container'>
      <DrumPadContext.Provider value={drumContextValue}>
        <Device 
          drumPads={activePads} 
          currentSound={currentSound}
          drumPadsA={drumPadsA}
          activePads={activePads}
          soundbankAisActive={soundbankAisActive}
        />
      </DrumPadContext.Provider>
    </div>
    
  );
}


export default App;
