import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Interactive from "@/components/Interactive";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Interactive />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
