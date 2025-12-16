import Hero from "@/components/Hero";
import Hike from "@/components/Hike";
import Places from "@/components/Places";
import Exiting from "@/components/Exiting";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Hike />
      <Places />
      <Exiting />
      <Contact />
      <Footer />
    </main>
  );
}
