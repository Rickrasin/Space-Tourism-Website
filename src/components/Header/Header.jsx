import { HeaderContainer } from "./Header.style";

import LogoImg from "../../assets/shared/logo.svg";

import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={LogoImg} alt="Logo" className="logo" />
      <Navbar />
    </HeaderContainer>
  );
};

export default Header;
