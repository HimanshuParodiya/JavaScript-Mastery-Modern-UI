import ButtonGradient from "./assets/svg/ButtonGradient";
import React from "react";
import Button from "./components/Button";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <ButtonGradient /> {/* to give gradient color to button */}
    </>
  );
};

export default App;
