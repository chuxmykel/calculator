import React from 'react';
import { connect } from 'react-redux';
import { buttonClicked, operatorClicked } from '../../redux/actions/calculatorActions';
import './Button.css';
const Button = props => {
  const { text, operator, equalSign, handleClick, handleOperation } = props;
  return (
    <button
      className={`btn${operator ? ' operator': ''}${equalSign ? ' large': ''}`}
      onClick={equalSign ? handleOperation : () => handleClick(text)}
    >
      {text}
    </button>
  )
}

const mapDispatchToProps = dispatch => ({
  handleClick: text => dispatch(buttonClicked(text)),
  handleOperation: () => dispatch(operatorClicked()),
});

export default connect(null, mapDispatchToProps)(Button);
