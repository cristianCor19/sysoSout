import { Card, CardContent } from "@/components/ui/card";


function Testimonials() {
  return (
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
  );
}

export default Testimonials;
