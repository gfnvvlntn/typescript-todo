import React from "react";
import Navbar from "./component/navbar/Navbar";
import Routers from "./routes/routers";
import Flex from "./primitive/flex/Flex";

const App = () => {
  return (
    <Flex flexDirection={"column"}>
      <Navbar />
      <Routers />
    </Flex>
  );
};

export default App;
