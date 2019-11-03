import React from 'react';
import Display from '../../components/Display';
import Keypad from '../Keypad';
import './Calculator.css';

const Calculator = () => {
  return (
    <div className="calculator">
      <Display />
      <Keypad />
    </div>
  );
}

export default Calculator;
