"use client";

import { Button } from "./ui/button";

function ButtonDemo() {
  return (
    <div className="bg-white max-w-xs flex flex-col items-center gap-6 justify-center h-72 rounded">
      <Button>Submit Me</Button>
      <Button
        variant={"outline"}
        className="text-black border-pink-700"
        onClick={() => console.log("clicked me")}
      >
        Submit Me
      </Button>
      <Button variant={"destructive"} className="focus:ring-pink-700">
        Submit Me
      </Button>
    </div>
  );
}

export default ButtonDemo;
