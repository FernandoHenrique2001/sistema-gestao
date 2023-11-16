import React from "react";
import { useRouter } from 'next/navigation';

export const Card = ({ status, title }: { status: string; title: string}) => {
  return (
      <div className="w-[60rem] h-32 rounded-xl bg-gray-100 border border-black flex justify-between items-center px-10 py-3">
        <h1>{title}</h1>
        <h2 className="self-end">status: {status}</h2>
      </div>
  );
};
