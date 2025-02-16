
import { SnackbarProvider  } from 'notistack'

import { ThemeToggle } from "@/components/modeToggle/ThemeToggle";

// componentes
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/Projects";
import Services from "@/components/Servicies";
import ProfessionalProfile from '@/components/ProfessionalProfile';

function Home() {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Professional Section */}
      <section
        id="home"
        className="relative bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-900 dark:to-purple-900 text-white"
      >
        <ProfessionalProfile/>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-gray-800">
        <Services/>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <Projects/>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <Testimonials/>
      </section>

      {/* Provider notification */}
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      />

      {/* Contact Form Section */}
      <section id="contact" className="py-14 bg-gray-50 dark:bg-gray-900">
       <Contact/>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-700/90 dark:bg-indigo-500/80 text-white py-8">
        <Footer/>
      </footer>
    </div>
  );
}

export default Home;
