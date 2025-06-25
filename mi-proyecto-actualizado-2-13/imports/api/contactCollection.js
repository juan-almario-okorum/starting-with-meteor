import { Mongo } from "meteor/mongo"; // Importa el módulo de Meteor que permite usar MongoDB
import { Meteor } from "meteor/meteor"; // Importa el objeto Meteor que brinda funciones propias del framework

export const ContactsCollection = new Mongo.Collection("contactos"); // Crea una colección llamada "contactos" y la exporta para usarla en otros archivos

ContactsCollection.allow({
  insert() {
    return true;
  },
}); // Permite que los clientes puedan insertar datos directamente en la colección desde el navegador
// Por defecto, Meteor bloquea todas las operaciones directas por seguridad. Esta línea permite insertar sin necesidad de métodos de servidor

if (Meteor.isServer) { // Asegura que el codigo de publicación (publish) este corriendo únicamente en server
  Meteor.publish("contactos", function () { // Publica los datos al cliente
    return ContactsCollection.find(); // Devuelve todos los contactos de la colección
  });
}
