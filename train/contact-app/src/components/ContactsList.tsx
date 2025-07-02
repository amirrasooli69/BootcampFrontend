import type { ContactType } from "../types/contact.type"
import ContactItem from "./ContactItem"
import styles from './ContactList.module.css'

export interface ContactsListProps {
  contacts: ContactType[];
  deleteHandler: (id: string) => void;
}
function ContactsList({ contacts, deleteHandler}: ContactsListProps) {

    return (
        <div className={styles.container}>
            <h3>Contact list</h3>
            {contacts.length ? (<ul className={styles.contacts}>
                {contacts.map(contact =>
                    <ContactItem key={contact.id} data={contact} deleteHandler={deleteHandler}/>
                )}
            </ul>) : <p className={styles.message}>Contact Not Yet</p>}

        </div>
    )
}

export default ContactsList
