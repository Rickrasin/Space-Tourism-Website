import { HeaderContainer, Logo } from "./Header.style";

import LogoImg from "../../assets/shared/logo.svg";

import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={LogoImg} />
      <Navbar />
    </HeaderContainer>
  );
};

export default Header;
