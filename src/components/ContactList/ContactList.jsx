import propTypes from 'prop-types';

import { ContactItem } from './ContactItem';


export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <ContactItem
            id={contact.id}
            key={contact.id}
            name={contact.name}
            number={contact.number}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
};

ContactList.prototype = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ).isRequired,
};
