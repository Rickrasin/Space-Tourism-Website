import PropTypes from "prop-types";

import { ButtonStyle } from "./ButtonComponent.styled";

const ButtonComponent = ({ buttonName, onClick }) => {
  return <ButtonStyle onClick={onClick}>{buttonName}</ButtonStyle>;
};

ButtonComponent.propTypes = {
  buttonName: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonComponent;
