import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SnackbarProvider  } from 'notistack'
import { Card, CardContent } from "@/components/ui/card";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { useEmail } from "@/context/EmailContext";
import { useForm } from "react-hook-form";
import {
  Code,
  Smartphone,
  ChevronsUp,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
ChevronsUp;
import { ThemeToggle } from "@/components/modeToggle/ThemeToggle";

function Home() {

  const {register, handleSubmit, reset} = useForm()
  const {sendEmail} = useEmail();

  const onSubmit = handleSubmit((data) => {
    sendEmail(data)
    reset()
})


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-900 dark:to-purple-900 text-white"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Team working on digital solutions"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center relative z-10 sm:py-36">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down">
            Transformamos Ideas en Soluciones Digitales
          </h1>
          <p className="text-xl mb-8 max-w-2xl animate-fade-in-up font-bold">
            Syso Sout: Expertos en desarrollo web y móvil para impulsar tu
            negocio al siguiente nivel
          </p>
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-white animate-pulse"
          >
            <a href="#contact">Solicita una Consulta Gratis</a>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-28">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800 dark:text-indigo-300">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 dark:bg-gray-700">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Code size={48} className="text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-indigo-700 dark:text-indigo-300">
                  Desarrollo Web
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Creamos sitios web y aplicaciones robustas, escalables y de
                  alto rendimiento utilizando las últimas tecnologías.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300 dark:bg-gray-700">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Smartphone size={48} className="text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-indigo-700 dark:text-indigo-300">
                  Desarrollo Móvil
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Diseñamos y desarrollamos aplicaciones móviles intuitivas y
                  potentes para iOS y Android.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-28">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800 dark:text-indigo-300">
            Proyectos Destacados
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "Plataforma E-learning",
                description:
                  "Sistema de aprendizaje en línea con cursos interactivos y seguimiento de progreso.",
              },
              {
                image:
                  "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "App de Finanzas Personales",
                description:
                  "Aplicación móvil para gestión de gastos y planificación financiera con análisis en tiempo real.",
              },
              {
                image:
                  "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "Portal de Comercio Electrónico",
                description:
                  "Tienda en línea con integración de pagos, gestión de inventario y panel de administración.",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md group"
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-200">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-28">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800 dark:text-indigo-300">
            Lo que Dicen Nuestros Clientes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Syso Sout superó todas nuestras expectativas. Su equipo es altamente profesional y entregó nuestro proyecto a tiempo y dentro del presupuesto.",
                name: "Ana Martínez",
                position: "CEO, TechInnovate",
                image:
                  "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                quote:
                  "La experiencia y creatividad del equipo de Syso Sout transformó nuestra idea en una aplicación móvil excepcional. Estamos encantados con los resultados.",
                name: "Carlos Rodríguez",
                position: "Fundador, AppMasters",
                image:
                  "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 dark:bg-gray-700"
              >
                <CardContent className="p-6">
                  <p className="mb-4 italic text-gray-600 dark:text-gray-300">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-indigo-700 dark:text-indigo-300">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
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
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className="text-3xl font-bold text-center mb-4 text-indigo-800 dark:text-indigo-300">
            Contáctanos
          </h2>
          <Card className="p-6 shadow-lg dark:bg-gray-800">
            <form onSubmit={onSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Nombre
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full dark:bg-gray-700 dark:text-white"
                  {...register("name", {required: true})}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full dark:bg-gray-700 dark:text-white"
                  {...register('email', {required: true})}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  placeholder="¿Cómo podemos ayudarte?"
                  className="w-full dark:bg-gray-700 dark:text-white"
                  {...register('message', {required: true})}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-indigo-600/90 hover:bg-indigo-700 dark:bg-indigo-500/80 hover:dark:bg-indigo-700 text-white transition-colors duration-300"
              >
                Enviar Mensaje
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-700/90 dark:bg-indigo-500/80 text-white py-8">
        <div className="flex -mt-14">
          <a href="#home" className="mx-auto bg-blue-400 rounded-full p-3">
            <ChevronsUp />
          </a>
        </div>
        <div className="container mx-auto px-4">
          {/* Main footer content grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-28 mb-8">
            {/* Company info */}
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-4">Syso Sout</h3>
              <p className="text-gray-100 mb-4">
                Transformando ideas en soluciones digitales innovadoras para
                impulsar tu negocio hacia el futuro.
              </p>
            </div>

            {/* Quick links */}
            <div className="text-left">
              <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Proyectos
                  </a>
                </li>
                <li>
                  <a
                    href="#home"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact info */}
            <div className="text-left">
              <h3 className="text-xl font-bold mb-4">Contacto</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-100" />
                  <p className="text-gray-300">Sogamoso, Colombia</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-100" />
                  <p className="text-gray-300">+57 3105604566</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-100" />
                  <a
                    href="mailto:sysosout@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    sysosout@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social media links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-10 h-10 rounded-full border-2 border-white p-1.5" />
            </a>

            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-10 h-10  rounded-full border-2 p-1.5 border-white" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaWhatsapp className="w-10 h-10  rounded-full border-2 border-white p-1.5" />
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-indigo-600">
            {/* Copyright and legal links */}
            <div className="flex flex-col justify-between items-center text-sm text-gray-300">
              <p>
                &copy; {new Date().getFullYear()} Syso Sout. Todos los derechos
                reservados.
              </p>
              <div className="flex gap-4 mt-2 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">
                  Términos y Condiciones
                </a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors">
                  Política de Privacidad
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
