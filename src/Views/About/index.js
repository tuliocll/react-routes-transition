import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import {
  Container,
  Content,
  Col,
  MediumText,
  SmallText,
  Text,
  Back
} from "./styles";

export default function About() {
  return (
    <Container>
      <br />
      <Back to="/">
        <FaAngleLeft />
      </Back>
      <Content>
        <Col>
          <Text>About Us</Text>
          <MediumText>Our Story</MediumText>

          <SmallText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ipsum
            metus, condimentum convallis orci vitae, aliquam luctus ex. Integer
            dapibus sem malesuada, lobortis magna quis, aliquam tellus.
            Vestibulum pretium lacus mi, sit amet gravida purus porta nec.
            Vestibulum in mollis dui, eu consectetur arcu. Curabitur dui sapien,
            pellentesque sit amet interdum et, pretium eu erat. Morbi commodo,
            felis a dignissim suscipit, est magna dictum velit, eu pulvinar urna
            dui ac velit. Aliquam est nibh, tristique id tellus id, faucibus
            semper ex. Morbi dignissim nunc vel sapien lobortis, sed mollis
            nulla ullamcorper. Sed lacinia volutpat rutrum. Nullam interdum eu
            justo in condimentum. Curabitur sed pulvinar ex. Fusce ornare felis
            eget nisl fermentum consequat.
          </SmallText>
        </Col>
      </Content>
    </Container>
  );
}
