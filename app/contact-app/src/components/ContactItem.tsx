import type { ContactType } from "../types/contact.type";
import styles from './ContactItem.module.css'

interface ContactItemProps {
  data: ContactType;
  deleteHandler: (id: string) => void;
}

function ContactItem({ data: { id, name, lastName, email, phone }, deleteHandler }: ContactItemProps) {
    return (
        <li className={styles.item}>
            <p>{name} {lastName}</p>
            <p><span>📬</span>{email}</p>
            <p><span>📞</span>{phone}</p>
            <button onClick={() => deleteHandler(id)}>❌</button>
        </li>
    )
}

export default ContactItem
