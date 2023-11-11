import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import Image from "next/image";

const documents = [
  {
    title:
      "Uma Análise Crítica das Implicações Éticas da Inteligência Artificial",
    status: "concluído",
  },
  { title: "Estratégias de Desenvolvimento Sustentável", status: "concluído" },
  {
    title: "O Impacto da Globalização nas Práticas Culturais",
    status: "concluído",
  },
  // {
  //   title: "Explorando os Efeitos da Educação Online no Desempenho Acadêmico",
  //   status: "concluído",
  // },
  // {
  //   title:
  //     "Análise da Influência da Mídia na Percepção Pública de Questões de Saúde Mental",
  //   status: "concluído",
  // },
];

export default function Home() {
  return (
    <div className="w-screen h-screen px-20 py-5 flex flex-col items-center">
      <h1 className="text-lg">Minhas Publicações</h1>
      <div className="flex justify-end w-[60rem]">
        <Button text="Nova Publicação" />
      </div>

      <div className="flex flex-col gap-4 mt-10">
        {documents.map((doc) => (
          <Card key={doc.title} status={doc.status} title={doc.title}></Card>
        ))}
      </div>
    </div>
  );
}
