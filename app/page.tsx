import { CallCom } from "./_landing/CallCom";
import { Hero } from "./_landing/Hero";
import { Work } from "./_landing/Work";

export default function Home() {
  return (
    <main className="h-full">
      <Hero />
      <Work />
      <CallCom />
    </main>
  );
}
