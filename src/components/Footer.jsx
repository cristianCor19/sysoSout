import {
  ChevronsUp,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex -mt-14">
        <a href="#home" className="mx-auto bg-blue-400 rounded-full p-3">
          <ChevronsUp />
        </a>
      </div>
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
  );
}

export default Footer;
