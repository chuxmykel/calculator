import React from 'react';
import { connect } from 'react-redux';
import './Display.css';

const Display = props => {
  const { mainDisplay, operationDisplay } = props;
  return (
    <div className="display">
      <div className="result-screen">{mainDisplay}</div>
      <div className="operation-screen">{operationDisplay}</div>
    </div>
  )
}

const mapStateToProps = state => ({
  mainDisplay: state.calculator.mainDisplay,
  operationDisplay: state.calculator.operationDisplay,
});

export default connect(mapStateToProps)(Display);
