import React from "react"; // Para crear el componente
import { ContactsCollection } from "../api/contactCollection"; // La colección de mongo que creé
import { useTracker } from "meteor/react-meteor-data"; // Permite reactividad con datos de Meteor
import { Meteor } from "meteor/meteor"; // Permite la subscripción a publicaciones del servidor 

export const ContactList = () => {
  const { contactos, isLoading } = useTracker(() => { // Se espera que useTracker devuelva un objeto con contactos e isLoading, y guarda las variables
    const handle = Meteor.subscribe("contactos"); // Inicia la conexión del cliente a la publicación del servidor
    const loading = !handle.ready(); // Mientras loading sea true, significa que los datos no han cargado 
    const contactos = ContactsCollection.find({}).fetch(); // Aquí se consultan los contactos disponibles que el servidor envió y los convierte en un array de objetos
    return { contactos, isLoading: loading }; // Ahora puedes usar contactos y isLoading en el componente
  });

  if (isLoading) {
    return <div>Cargando...</div>;
  } // Mientras los datos están cargando, se muestra el mensaje

  return (
    <>
      <h3>Lista de contactos</h3>
      <ul>
        {contactos.map((contacto) => ( // Se recorre el array de contactos y el map toma cada contacto, la key se coloca para que React sepa qué elemento se agregó y lo pueda identificar, luego se muestran los datos a cada contacto
          <li key={contacto._id}> 
            {contacto.name} - {contacto.email} 
          </li>
        ))}
      </ul>
    </>
  );
};
