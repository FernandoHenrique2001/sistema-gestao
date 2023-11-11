import React from "react";

export const Button = ({ text }: { text: string }) => {
  return (
    <div className="w-52 h-8 rounded-xl border border-black flex justify-center items-center mt-10 ">
      <button className="bg-gray hover:bg-gray-dark text-black font-bold py-2 px-4 rounded">
        {text}
      </button>
    </div>
  );
};
