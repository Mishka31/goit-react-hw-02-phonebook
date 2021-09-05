import React, { Component } from "react";
import ContactForm from "./Components/ContactForm/ContactForm.jsx";
import ContactList from "./Components/ContactList/ContactList.jsx";
import Filter from "./Components/Filter/Filter.jsx";
import s from "./App.module.css";

import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [
      { id: "c2cc433e-97d2-4fa7-b9eb-12a98511c9ab", name: "Misha Krasnonos", number: "000-00-11-11" },
      { id: "f98d00d6-01b7-481a-8b52-c607c5127348", name: "Sasha Krasnonos", number: "111-11-00-00" },
      { id: "f98d00d6-01b7-481a-8b52-c607c7887 348", name: "Lena Krasnonos", number: "111-11-22-22" },
    ],
    filter: "",
  };

  formSubmitHandler = (data) => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id: uuidv4(), ...data }],
    }));
  };

  onDelete = (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id.target.id),
    }));
  };

  onFind = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const lowerFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter((contact) => contact.name.toLowerCase().includes(lowerFilter));

    return (
      <div>
        <h1 className={s.titleH1}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} listArrey={contacts} />
        <h2 className={s.titleH2}>Contacts</h2>
        <Filter value={filter} onSearch={this.onFind} />
        <ContactList contacts={filteredContacts} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default App;
