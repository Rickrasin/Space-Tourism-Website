import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { ButtonStyle } from "./ButtonComponent.styled";

const ButtonComponent = (props) => {
  return (
    <Link to={props.link ? props.link : "/#"}>
      <ButtonStyle
        whileHover={{
          outline: "solid 5.5rem rgba(255, 255, 255, 0.1036)"
        }}
        initial={{ outline: "solid 0rem rgba(255, 255, 255, 0)" }}
      >
        {props.buttonName}
      </ButtonStyle>
    </Link>
  );
};

ButtonComponent.propTypes = {
  props: PropTypes.array,
  buttonName: PropTypes.string,
  link: PropTypes.string
};

export default ButtonComponent;
