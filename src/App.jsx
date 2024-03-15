import ButtonGradient from "./assets/svg/ButtonGradient";
import React from "react";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10" href="#login">
          Something
        </Button>
      </div>
      <ButtonGradient /> {/* to give gradient color to button */}
    </>
  );
};

export default App;
