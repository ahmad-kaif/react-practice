import React, { useEffect, useState } from "react";

const Light = () => {
  const [result, setResult] = useState("Go!!");
  const [currentLight, setCurrentLight] = useState("green"); // Tracks the current light (green, yellow, red)


  useEffect(() => {
    const lightSeq = {
      green: { next: "yellow", message: "Slow Down", duration: 4000 },
      yellow: { next: "red", message: "Stop!!", duration: 3000 },
      red: { next: "green", message: "Go!!", duration: 4000 },
    };

    const timer = setTimeout(() => {
      const nextLight = lightSeq[currentLight];
      setCurrentLight(nextLight.next);
      setResult(nextLight.message);
    }, lightSeq[currentLight].duration);

  }, [currentLight]);

   // Light color classes based on state
   const lightStyles = {
    red: currentLight === "red" ? "bg-red-600" : "bg-red-100",
    yellow: currentLight === "yellow" ? "bg-yellow-400" : "bg-yellow-100",
    green: currentLight === "green" ? "bg-green-600" : "bg-green-100",
  };

  return (
    <div className="h-screen bg-black text-white">
      <div className="flex flex-col items-center justify-center h-72 ">
        <div className="border border-yellow-500">
          <div  className={`text-black border rounded-full h-11 w-12 m-3 flex justify-center items-center ${lightStyles.red}`}>
            R
          </div>
          <div className={`text-black border rounded-full h-11 w-12 m-3 flex justify-center items-center ${lightStyles.yellow}`}>
            Y
          </div>
          <div  className={`text-black border rounded-full h-11 w-12 m-3 flex justify-center items-center ${lightStyles.green}`}>
            G
          </div>
        </div>
        <div className="mt-3 text-3xl font-bold">
          {result}
        </div>
      </div>
    </div>
  );
};

export default Light;
