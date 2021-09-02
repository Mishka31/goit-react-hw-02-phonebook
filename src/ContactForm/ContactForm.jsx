import React, { Component } from "react";
import s from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    contacts: [],
    name: "asd",
  };
  handleNameChange = (event) => {
    this.setState({ name: event.currentTarget.value });
  };
  render() {
    return (
      <div className={s.container}>
        <form className={s.imputAndButton}>
          <label htmlFor="">
            <p className={s.name}>Name</p>
            <input
              type="text"
              className={s.imput}
              onChange={this.handleNameChange}
              value={this.state.name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label htmlFor="">
            <p className={s.name}>Number</p>
            <input
              type="tel"
              className={s.imput}
              onChange={this.handleNameChange}
              value={this.state.name}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button className={s.button}>Add contact</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
