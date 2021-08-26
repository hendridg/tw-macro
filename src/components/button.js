import React from "react";
import tw from "twin.macro";

const Btn = tw.button`
    py-2 px-6 inline-block bg-cyan text-white hover:bg-sky
    rounded-tl-3xl
`;

export default function Button({ children }) {
  return (
    <div>
      <Btn>{children}</Btn>
    </div>
  );
}
