import styled from "styled-components";
import { Link } from "react-router-dom";

import background from "../../Assets/images/Background-site-04.jpg";

export const Container = styled.div`
  min-height: 100vh;
  background-image: url(${background});
`;

export const Nav = styled.nav`
  display: flex;
  min-height: 60px;
  background-color: #000b;
  justify-content: space-between;
  align-items: center;
`;

export const NavLink = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const NavItem = styled.a`
  color: #fff;
  font-size: 18px;
  font-variant-caps: all-small-caps;
  margin: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 60vh;
  padding: 20px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

export const Text = styled.h1`
  color: #fff;
  font-size: 100px;
  text-align: center;
  font-weight: 300;
`;

export const MediumText = styled.p`
  color: #fff;
  text-align: left;
  font-size: 35px;
  font-weight: bold;
  margin-left: 20px;
`;

export const SmallText = styled.small`
  color: #fff;
  text-align: left;
  font-size: 15px;
  margin-top: 40px;
`;

export const PrimaryButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: #fff;
  border-radius: 20px;
  margin: 0px 20px;
  max-width: 200px;
  text-align: center;
  color: #000;
  text-decoration: none;
`;

export const PlayButton = styled.button`
  height: 40px;
  background-color: #fff;
  border: none;
  border-radius: 20px;
  padding: 0px 15px;
`;

export const Logo = styled.h1`
  color: #fff;
  margin: 10px 50px;
`;
