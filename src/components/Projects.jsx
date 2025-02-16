function Projects() {
  return (
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
  );
}

export default Projects;
