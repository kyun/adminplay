"use client";
import { Button } from "antd";
import styled from "styled-components";

const Main = styled.main`
  background-color: red;
`;
export default function Home() {
  return (
    <Main>
      Hello
      <Button type="primary">Button</Button>
    </Main>
  );
}
