import React from "react";
import { StatusBar } from "react-native";
import { Home } from "./src/pages/Home";

export default function App() {
  // Test CI/CD

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
}
