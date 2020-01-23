import styled from "styled-components";
import { Link } from "react-router-dom";

import background from "../../Assets/images/Background-site-04.jpg";

export const Container = styled.div`
  min-height: 100vh;
  background-image: url(${background});
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50vh;
  padding: 20px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Text = styled.h1`
  color: #fff;
  font-size: 100px;
  text-align: center;
  font-weight: 300;
`;

export const MediumText = styled.p`
  color: #fff;
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  margin-top: 10px;
`;

export const SmallText = styled.small`
  color: #fff;
  text-align: justify;
  width: fit-content;
  align-self: center;
  font-size: 15px;
  margin-top: 30px;
  max-width: 800px;
`;

export const Back = styled(Link)`
  color: #fff;
  font-size: 30px;
  margin: 30px;
`;
