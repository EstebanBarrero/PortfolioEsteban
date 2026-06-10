import { Hero } from '../organisms/Hero';
import { About } from '../organisms/About';
import { Skills } from '../organisms/Skills';
import { Projects } from '../organisms/Projects';
import { Experience } from '../organisms/Experience';
import { AIShowcase } from '../organisms/AIShowcase';
import { Contact } from '../organisms/Contact';
import { Footer } from '../organisms/Footer';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <AIShowcase />
      <Contact />
      <Footer />
    </>
  );
}
