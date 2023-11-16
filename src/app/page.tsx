"use client";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
  const [documents, setDocuments] = useState<any>();
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3000/documentos")
      const data = await response.json()
      setDocuments(data);
    }

    getData()

  })



  return (documents &&
    <div className="w-screen h-screen px-20 py-5 flex flex-col items-center">
      <h1 className="text-lg">Minhas Publicações</h1>
      <div className="flex justify-end w-[60rem]">
        <Button text="Nova Publicação" />
      </div>

      <div className="flex flex-col gap-4 mt-10">
        {documents.map((doc:any) => (
          <Card key={doc.title} status={doc.status} title={doc.title}></Card>
        ))}
      </div>
    </div>
  );
}
