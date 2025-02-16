import { Code, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

function Services() {
  return (
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
              Creamos sitios web y aplicaciones robustas, escalables y de alto
              rendimiento utilizando las últimas tecnologías.
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
  );
}

export default Services;
