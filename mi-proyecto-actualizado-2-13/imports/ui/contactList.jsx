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
    <div>
      <div className="mt-10">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Lista de Contactos
        </h3>
        <ul role="list" className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
          {contactos.map((person, personIdx) => (
            <li key={personIdx} className="py-4 flex items-center justify-between space-x-3">
              <div className="min-w-0 flex-1 flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 truncate">{person.name}</p>
                  <p className="text-sm font-medium text-gray-500 truncate">{person.email}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};
