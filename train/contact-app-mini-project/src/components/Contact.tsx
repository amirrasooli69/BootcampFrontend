import { useEffect, useState } from "react"
import ContactsList from "./ContactsList";
import type { ContactType } from "../types/contact.type";
import inputs from "../constants/inputs";
import { v4 } from "uuid";
import styles from './Contacts.module.css'
import SearchContact from "./SearchContact";

function Contact() {
  const [alert, setAlert] = useState("");
  const [search, setSearch] = useState("")

  const [contacts, setContacts] = useState<ContactType[]>([]) 
  const [copyContacts, setCopyContacts] = useState<ContactType[]>([]) 


  const [contact, setContact] = useState<ContactType>({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: ""
  })

  useEffect(()=>{
  },[])

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setContact({ ...contact, [name]: value })
  }

  const addHandler = () => {

    if (!contact.name || !contact.lastName || !contact.email || !contact.phone) {
      setAlert("Please Enter Valid Data !!!!")
      return;
    }
    setAlert("")
    const newContact = { ...contact, id: v4() }
    setContacts((contacts) => [...contacts, newContact])
    setCopyContacts([...contacts])
    setContact({
      id: "",
      name: "",
      lastName: "",
      email: "",
      phone: ""
    })

  }

  const deleteHandler = (id: string) => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
    setCopyContacts([...newContacts])

  }

  const searchHandler = () => {
    setContacts(copyContacts)
    if (search) {
      const serachContacts = copyContacts.filter(contact => contact.name.includes(search))
      setContacts(serachContacts)
    } else {
      setContacts(contacts)
    }

  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((input, index) =>
          <input key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={contact[input.name as keyof ContactType]}
            onChange={changeHandler}
          />)}
        <button onClick={addHandler}>Add Contact</button>
      </div>
      <div className={styles.alert}>
        {alert && <p>{alert}</p>}
      </div>
      <SearchContact searchHandler={searchHandler} search={search} setSearch={setSearch} />
      <ContactsList contacts={contacts} deleteHandler={deleteHandler} />

    </div>
  )
}

export default Contact