import React from "react";
import Button from "@atlaskit/button";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
  margin-top: 5px;
  text-align: left;
`;

export default function TodoItem({ todoItem }) {
  return <ButtonStyled shouldFitContainer>{todoItem.name}</ButtonStyled>;
}
