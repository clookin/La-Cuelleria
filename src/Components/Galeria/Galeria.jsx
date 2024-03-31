import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Drawer,
  Button,
  Typography,
  IconButton,
  Input,
  Textarea,
  Carousel,
} from "@material-tailwind/react";
import "./Galeria.css";
import Cliente1 from '../Assets/Cuelleria/clientes-1a.jpg'
import Cliente2 from '../Assets/Cuelleria/clientes-2a.jpg'
import Cliente3 from '../Assets/Cuelleria/clientes-3a.jpg'
import Cliente4 from '../Assets/Cuelleria/clientes-4a.jpg'
import Cliente5 from '../Assets/Cuelleria/clientes-5a.jpg'
import Cliente6 from '../Assets/Cuelleria/clientes-6a.jpg'
const Galeria = () => {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <section className="flex flex-wrap mt-4 mb-4">
      <div className="m-auto">
        <Card className="mt-6 w-96 ">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Quieres comunicarte con nosotros?
            </Typography>
            <Typography>
              Tenemos los mejores precios si los quieres en unidad o si los quieres al por mayor, da click abajo para recibir informacion 
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={openDrawer}>Da Click Aqui</Button>
          </CardFooter>
        </Card>
        <Drawer open={open} onClose={closeDrawer}>
          <div className="flex items-center justify-between px-4 pb-2">
            <Typography variant="h5" color="blue-gray">
              Contactanos
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <div className="mb-5 px-4">
            <Typography variant="small" color="gray" className="font-normal ">
              Escribenos en que estas interesado y dale a enviar.
            </Typography>
          </div>
          <form className="flex flex-col gap-6 p-4">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Ingresa tus datos 
            </Typography>
            <Input label="Nombre" required/>
            <Input type="number" label="Numero" required/>
            <Input type="email" label="Correo" required/>
            <Textarea rows={6} label="Message" required/>
            <Button type="submit">Enviar</Button>
          </form>
        </Drawer>
      </div>
      <Carousel className="rounded-md w-1/4 m-auto overflow-hidden">
        <img
          src={Cliente6}
          alt="image 1"
          className="ratio w-full object-cover"
        />
        <img
          src={Cliente2}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src={Cliente3}
          alt="image 1"
          className=" h-full w-full object-cover"
        />
        <img
          src={Cliente4}
          alt="image 1"
          className="ratio h-full w-full object-cover"
        />
        <img
          src={Cliente5}
          alt="image 2"
          className="ratio h-full w-full object-cover"
        />
        <img
          src={Cliente1}
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </section>
  );
};

export default Galeria;
