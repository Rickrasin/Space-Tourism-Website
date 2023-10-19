import PropTypes from "prop-types";

import { ButtonStyle } from "./ButtonComponent.styled";

const ButtonComponent = ({ buttonName, onClick }) => {
  return (
    <ButtonStyle
      whileHover={{
        outline: "solid 5.5rem rgba(255, 255, 255, 0.1036)",
      }}
      initial={{ outline: "solid 0rem rgba(255, 255, 255, 0)" }}
    >
      {buttonName}
    </ButtonStyle>
  );
};

ButtonComponent.propTypes = {
  buttonName: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonComponent;
