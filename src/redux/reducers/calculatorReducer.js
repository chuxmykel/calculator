import { BUTTON_CLICKED, OPERATOR_CLICKED } from '../actions/types';

const initialState = {
  mainDisplay: '0.',
  operationDisplay: '0.'
};

const calculator = (state = initialState, action) => {
  switch (action.type) {
    case BUTTON_CLICKED:
      return {
        ...state,
        operationDisplay: state.operationDisplay === '0.' ? action.payload : `${state.operationDisplay}${action.payload}`,
      };
    case OPERATOR_CLICKED:
      return {
        ...state,
        mainDisplay: eval(state.operationDisplay)
      };
    default:
      return state;
  }
};

export default calculator;
