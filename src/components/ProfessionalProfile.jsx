import { Button } from "@/components/ui/button";

function ProfessionalProfile() {
  return (
    <div>
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
          Syso Sout: Expertos en desarrollo web y móvil para impulsar tu negocio
          al siguiente nivel
        </p>
        <Button
          size="lg"
          className="bg-amber-500 hover:bg-amber-600 text-white animate-pulse"
        >
          <a href="#contact">Solicita una Consulta Gratis</a>
        </Button>
      </div>
    </div>
  );
}

export default ProfessionalProfile;
