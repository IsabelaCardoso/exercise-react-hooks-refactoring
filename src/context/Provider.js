import React, { useState } from 'react';
import CarsContext from './CarsContext';
import redSignal from '../images/redSignal.jpeg';
import yellowSignal from '../images/yellowSignal.jpeg';
import greenSignal from '../images/greenSignal.jpeg';


function Provider({ children }) {
  const [cars, setCars] = useState({ red: false, blue: false, yellow: false});
  const [signal, setSignal] = useState({ color: 'red' });

  const moveCar = (car, side) => {
    setCars({...cars, [car]: side });
  };

  const changeSignal = (signalColor) => {
    setSignal({...signal, color: signalColor});
  };

  const renderSignal = (signalColor) => {
    if (signalColor === 'red') return redSignal;
    if (signalColor === 'yellow') return yellowSignal;
    if (signalColor === 'green') return greenSignal;
    return null;
  };

  const context = {
    cars,
    signal,
    moveCar,
    changeSignal,
    renderSignal,
  };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

export default Provider;
