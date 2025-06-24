import type { ContactType } from "../types/contact.type"

// interface IContact {
//   name: string;
//   lastName: string;
//   email: string;
//   phone: string;
// }

function ContactsList({contacts}: ContactType[]) {

    console.log(contacts)
    return (
        <div>
            <h4>Contact list</h4> 
            <ul>
                {contacts.map(contact => <li key={contact.id}>{contact.name}</li>)}
            </ul>
        </div>
    )
}

export default ContactsList
