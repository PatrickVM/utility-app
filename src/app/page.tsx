import Image from "next/image";
import QuestionCard from "./components/QuestionCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <QuestionCard />
    </main>
  );
}
