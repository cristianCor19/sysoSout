import { useEmail } from "@/context/EmailContext";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function Contact() {
  const {register, handleSubmit, reset} = useForm()
    const {sendEmail} = useEmail();
  
    const onSubmit = handleSubmit((data) => {
      sendEmail(data)
      reset()
    });
  return (
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
              {...register("name", { required: true })}
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
              {...register("email", { required: true })}
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
              {...register("message", { required: true })}
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
  );
}

export default Contact;
