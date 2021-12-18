import React from "react";
import styled from "styled-components";
import Navbar from "./component/navbar/Navbar";
import Routers from "./routes/routers";

const App = () => {
  return (
    <Container>
      <Navbar />
      <Routers />
    </Container>
  );
};

export default App;

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
