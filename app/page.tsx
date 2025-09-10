import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pipeline from "./components/Pipeline";
import AdvancedCharts from "./components/AdvancedCharts";
import ProjectManagement from "./components/ProjectManagement";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Pipeline />
      <AdvancedCharts />
      <ProjectManagement />
      <Footer />
    </main>
  );
}
