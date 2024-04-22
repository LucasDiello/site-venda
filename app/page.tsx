import Aprender from "@/components/Aprender";
import Feedback from "@/components/Feedback";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Options from "@/components/Options";
import Traject from "@/components/Traject";

export default function Home() {
  return (
  <main className="bg-[#fff]">
    <Header />
    <MainContent />
    <Aprender />
    <Feedback />
    <Traject />
    <Options />
  </main>
  );
}
