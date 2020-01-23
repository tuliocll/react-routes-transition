import React from "react";

import {
  Container,
  Nav,
  NavItem,
  Content,
  Col,
  MediumText,
  SmallText,
  PrimaryButton,
  PlayButton,
  Text,
  Logo,
  NavLink,
  Row
} from "./styles";

export default function Home() {
  return (
    <Container>
      <Nav>
        <Logo>Logo</Logo>
        <NavLink>
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Contat</NavItem>
          <NavItem>Media</NavItem>
        </NavLink>
      </Nav>

      <Content>
        <Col>
          <Text>Smart</Text>
          <Text>City</Text>
        </Col>
        <Col>
          <MediumText>Lorem ipsum dolor sit amet</MediumText>
          <SmallText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu
            ultrices tellus, ut placerat leo. Vestibulum eu quam sit amet arcu
            hendrerit imperdiet.{" "}
          </SmallText>
          <Row>
            <PrimaryButton to="/about">Get Started</PrimaryButton>
            <PlayButton>></PlayButton>
          </Row>
        </Col>
      </Content>
    </Container>
  );
}
