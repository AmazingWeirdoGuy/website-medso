import Header from "@/components/header";
import Hero from "@/components/hero";
import Mission from "@/components/mission";
import Programs from "@/components/programs";
import News from "@/components/news";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Mission />
      <Programs />
      <News />
      <Footer />
    </div>
  );
}
