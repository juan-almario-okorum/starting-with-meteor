import { ContactsCollection } from "./contactCollection";
Meteor.methods({
    insert({name, email, imageUrl}) {
        return ContactsCollection.insert({name, email, imageUrl})
    }
    
})
