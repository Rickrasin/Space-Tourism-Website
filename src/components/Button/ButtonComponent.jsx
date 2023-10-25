import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { ButtonStyle } from "./ButtonComponent.styled";

const ButtonComponent = ({ buttonName }) => {
  return (
    <Link to="/Destination">
      <ButtonStyle
        whileHover={{
          outline: "solid 5.5rem rgba(255, 255, 255, 0.1036)",
        }}
        initial={{ outline: "solid 0rem rgba(255, 255, 255, 0)" }}
      >
        {buttonName}
      </ButtonStyle>
    </Link>
  );
};

ButtonComponent.propTypes = {
  buttonName: PropTypes.string,
};

export default ButtonComponent;
