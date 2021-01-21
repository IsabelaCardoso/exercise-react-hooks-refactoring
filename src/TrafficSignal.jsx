import React, { useContext } from 'react';
import CarsContext from './context/CarsContext';

function TrafficSignal() {
  const { signal, changeSignal, renderSignal } = useContext(CarsContext);
  const { color } = signal;
  return (
    <div>
      <div className="button-container">
        <button onClick={() => changeSignal('red')} type="button">
          Red
        </button>
        <button onClick={() => changeSignal('yellow')} type="button">
          Yellow
        </button>
        <button onClick={() => changeSignal('green')} type="button">
          Green
        </button>
      </div>
      <img className="signal" src={renderSignal(color)} alt="" />
    </div>
  );
};

TrafficSignal.contextType = CarsContext;

export default TrafficSignal;
