import { BUTTON_CLICKED, OPERATOR_CLICKED } from './types';

export const buttonClicked = text => ({
  type: BUTTON_CLICKED,
  payload: text,
});

export const operatorClicked = () => ({ type: OPERATOR_CLICKED });
