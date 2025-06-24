import { useState } from "react"
import ContactsList from "./ContactsList";
import type { ContactType } from "../types/contact.type";
import inputs from "../constants/inputs";
import { v4 } from "uuid";

function Contact() {
  const [alert, setAlert] = useState("");
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [contact, setContact] = useState<ContactType>({
    id:"",
    name: "",
    lastName: "",
    email: "",
    phone: ""
  })

  const changeHandler = (event: any) => {
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
    const newContact = {...contact, id: v4()}
    setContacts((contacts) => [...contacts, newContact])
    setContact({
      id: "",
      name: "",
      lastName: "",
      email: "",
      phone: ""
    })
  }

  return (
    <div>
      <div>
        {inputs.map((input, index) => <input key={index} type={input.type} name={input.name} placeholder={input.placeholder} value={contact[input.name]} onChange={changeHandler} />)}
        <button onClick={addHandler}>Add Contact</button>
      </div>
      <div>
        {alert && <p>{alert}</p>}
      </div>
      <ContactsList contacts={contacts} />

    </div>
  )
}

export default Contact