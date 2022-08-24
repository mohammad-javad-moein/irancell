import React from "react";
import Container from "./Views/Container";
import Header from "./Views/Header";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#efeff4",
        height: "100%",
      }}
    >
      <Header />
      <Container />
    </div>
  );
}

export default App;
