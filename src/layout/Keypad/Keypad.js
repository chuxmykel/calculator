import React from 'react';
import Button from '../../components/Button';
import KeypadRow from '../KeypadRow';

const Keypad = () => {
  return (
    <div>
      <KeypadRow>
        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
        <Button text="/" />
      </KeypadRow>
      <KeypadRow>
        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button text="*" />
      </KeypadRow>
      <KeypadRow>
        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <Button text="-" />
      </KeypadRow>
      <KeypadRow>
        <Button text="0" />
        <Button text="." />
        <Button text="=" equalSign />
      </KeypadRow>
    </div>
  );
}

export default Keypad;
