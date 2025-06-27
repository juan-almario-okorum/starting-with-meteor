import { Meteor } from "meteor/meteor";
import { ContactsCollection } from "./contactCollection";
Meteor.methods({
    "contactos.insert"({name, email, imageUrl}) {
        if(!name){
            throw new Meteor.Error("El campo Name es obligatorio")
        }
        return ContactsCollection.insert({name, email, imageUrl})
    }
    
})
