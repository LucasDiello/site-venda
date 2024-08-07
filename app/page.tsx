import Accordion from "@/components/Accordion";
import Aprender from "@/components/Aprender";
import Footer from "@/components/Footer";
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
    <Traject />
    <Options />
    <Accordion />
    <Footer />
  </main>
  );
}
